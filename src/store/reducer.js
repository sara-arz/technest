import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  TOGGLE_WISHLIST,
} from "./actions";

// Load saved state from localStorage
const savedState = JSON.parse(localStorage.getItem("technest-state") || "null");

const initialState = savedState || {
  items: [],
  wishlist: [],
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_TO_CART: {
      const { product, qty, color } = action.payload;
      const key = `${product.id}-${color}`;
      const exists = state.items.some((i) => i.key === key);

      newState = {
        ...state,
        items: exists
          ? state.items.map((i) =>
              i.key === key ? { ...i, qty: i.qty + qty } : i,
            )
          : [...state.items, { ...product, key, color, qty }],
      };
      break;
    }

    case INCREMENT:
      newState = {
        ...state,
        items: state.items.map((i) =>
          i.key === action.payload ? { ...i, qty: i.qty + 1 } : i,
        ),
      };
      break;

    case DECREMENT:
      newState = {
        ...state,
        items: state.items
          .map((i) => (i.key === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };
      break;

    case REMOVE_FROM_CART:
      newState = {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload),
      };
      break;

    case CLEAR_CART:
      newState = { ...state, items: [] };
      break;

    case TOGGLE_WISHLIST:
      newState = {
        ...state,
        wishlist: state.wishlist.includes(action.payload)
          ? state.wishlist.filter((id) => id !== action.payload)
          : [...state.wishlist, action.payload],
      };
      break;

    default:
      return state;
  }

  // Save updated cart and wishlist
  localStorage.setItem("technest-state", JSON.stringify(newState));

  return newState;
}

// Selectors
export const selectItems = (s) => s.items;
export const selectWishlist = (s) => s.wishlist;
export const selectCount = (s) => s.items.reduce((n, i) => n + i.qty, 0);
export const selectSubtotal = (s) =>
  s.items.reduce((n, i) => n + i.qty * i.price, 0);
