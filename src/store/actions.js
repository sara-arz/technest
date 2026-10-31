// Action types
export const ADD_TO_CART = "cart/add";
export const REMOVE_FROM_CART = "cart/remove";
export const INCREMENT = "cart/increment";
export const DECREMENT = "cart/decrement";
export const CLEAR_CART = "cart/clear";
export const TOGGLE_WISHLIST = "wishlist/toggle";

// Action creators
export const addToCart = (product, qty = 1, color = "") => ({
  type: ADD_TO_CART,
  payload: { product, qty, color },
});
export const removeFromCart = (key) => ({
  type: REMOVE_FROM_CART,
  payload: key,
});
export const increment = (key) => ({ type: INCREMENT, payload: key });
export const decrement = (key) => ({ type: DECREMENT, payload: key });
export const clearCart = () => ({ type: CLEAR_CART });
export const toggleWishlist = (id) => ({ type: TOGGLE_WISHLIST, payload: id });
