import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../store/actions";
import { Trash } from "./Icons.jsx";
import Qty from "./Qty.jsx";
import Img from "./Img.jsx";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const price = Number(item.price || 0);
  const total = price * item.qty;

  return (
    <li className="cart-item">
      <div className="cart-product-image">
        <Img src={item.image} alt={item.name} fallback={item.emoji} />
      </div>

      <div className="cart-product-info">
        <strong>{item.name}</strong>
        <span className="cart-unit-price">
          {price.toLocaleString("en-US")} DA
        </span>

        <Qty
          value={item.qty}
          label={item.name}
          onMinus={() => dispatch(decrement(item.key))}
          onPlus={() => dispatch(increment(item.key))}
        />
      </div>

      <div className="cart-product-actions">
        <button
          className="icon-btn"
          onClick={() => dispatch(removeFromCart(item.key))}
          aria-label={`Remove ${item.name}`}
        >
          <Trash size={17} />
        </button>

        <strong className="cart-line-total">
          {total.toLocaleString("en-US")} DA
        </strong>
      </div>
    </li>
  );
}
