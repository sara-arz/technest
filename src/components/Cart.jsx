import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectCount, selectSubtotal } from "../store/reducer";
import { clearCart } from "../store/actions";
import { Arrow } from "./Icons.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart({ open, onClose }) {
  const items = useSelector(selectItems);
  const count = useSelector(selectCount);
  const subtotal = useSelector(selectSubtotal);
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    `${Number(price || 0).toLocaleString("en-US")} DA`;

  return (
    <>
      <div className={open ? "overlay show" : "overlay"} onClick={onClose} />

      <aside
        className={open ? "drawer open" : "drawer"}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="drawer-head">
          <div>
            <h2>Shopping Cart</h2>
            <p className="muted">
              You have {count} {count === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <button className="link" onClick={onClose}>
            Continue Shopping
          </button>
        </div>

        {items.length === 0 ? (
          <p className="empty">
            Your cart is empty. Add a product to get started.
          </p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((i) => (
                <CartItem key={i.key} item={i} />
              ))}
            </ul>

            <div className="summary">
              <h3>Order Summary</h3>

              <div className="srow">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="srow">
                <span>Payment</span>
                <span>Cash on delivery</span>
              </div>

              <div className="srow total">
                <span>Total</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <button className="primary wide">
                Proceed to Checkout <Arrow />
              </button>

              <button className="link" onClick={() => dispatch(clearCart())}>
                Empty cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
