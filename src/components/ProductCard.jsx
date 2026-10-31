import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../store/actions";
import { selectWishlist } from "../store/reducer";
import { Heart } from "./Icons.jsx";
import Img from "./Img.jsx";

export default function ProductCard({ product, onOpen }) {
  const dispatch = useDispatch();
  const wished = useSelector(selectWishlist).includes(product.id);

  const specs = product.specs || {};

  return (
    <article className="pcard">
      <button
        className={wished ? "heart on" : "heart"}
        onClick={() => dispatch(toggleWishlist(product.id))}
        aria-pressed={wished}
        aria-label="Add to wishlist"
      >
        <Heart size={18} filled={wished} />
      </button>

      <button
        className="pimg"
        onClick={() => onOpen(product.id)}
        aria-label={`View ${product.name}`}
      >
        <Img src={product.image} alt={product.name} fallback={product.emoji} />
      </button>

      <div className="pbody">
        <h3>{product.name}</h3>
        {product.sub && <p className="muted">{product.sub}</p>}
        <div className="product-specs">
          {specs.processor && <span>{specs.processor}</span>}
          {specs.ram && <span>{specs.ram} RAM</span>}
          {specs.storage && <span>{specs.storage}</span>}
        </div>

        <strong className="price">{product.price.toLocaleString()} DA</strong>

        <button
          className="primary wide"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
