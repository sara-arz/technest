import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../store/actions";
import { selectWishlist } from "../store/reducer";
import { Heart } from "./Icons.jsx";
import Img from "./Img.jsx";
import Qty from "./Qty.jsx";

export default function ProductDetail({ product: p, onHome, onCategory }) {
  const dispatch = useDispatch();
  const wished = useSelector(selectWishlist).includes(p.id);
  const [qty, setQty] = useState(1);

  const description = p.description || p.desc;
  const specs = p.specs || {};

  const price = `${p.price.toLocaleString("en-US")} ${p.currency === "DZD" ? "DA" : p.currency || "DA"}`;

  const specificationLabels = {
    processor: "Processor",
    ram: "Memory (RAM)",
    storage: "Storage",
    screen: "Display",
    graphics: "Graphics",
  };

  return (
    <section className="detail">
      <nav className="crumbs" aria-label="Breadcrumb">
        <button className="link" onClick={onHome}>
          Home
        </button>
        {" › "}
        <button className="link" onClick={() => onCategory(p.category)}>
          {p.category}
        </button>
        {" › "}
        <span>{p.name}</span>
      </nav>

      <div className="detail-top">
        <div className="detail-img">
          <Img src={p.image} alt={p.name} fallback={p.emoji} />
        </div>

        <div className="detail-info">
          <p className="muted">{p.category}</p>

          <h1>{p.name}</h1>

          <p className="big-price">{price}</p>

          {description && <p className="desc">{description}</p>}

          <div className="detail-buy">
            <p className="label">Quantity</p>

            <div className="buy">
              <Qty
                value={qty}
                onMinus={() => setQty(Math.max(1, qty - 1))}
                onPlus={() => setQty(qty + 1)}
              />

              <button
                className="primary grow"
                onClick={() => dispatch(addToCart(p, qty))}
              >
                Add to Cart
              </button>

              <button
                className={wished ? "heart-sq on" : "heart-sq"}
                onClick={() => dispatch(toggleWishlist(p.id))}
                aria-pressed={wished}
                aria-label="Add to wishlist"
              >
                <Heart filled={wished} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {Object.keys(specs).length > 0 && (
        <section className="specifications">
          <div className="section-head">
            <h2>Technical Specifications</h2>
          </div>

          <div className="spec-grid">
            {Object.entries(specificationLabels)
              .filter(([key]) => specs[key])
              .map(([key, label]) => (
                <div className="spec-item" key={key}>
                  <span className="spec-label">{label}</span>
                  <strong>{specs[key]}</strong>
                </div>
              ))}
          </div>
        </section>
      )}
    </section>
  );
}
