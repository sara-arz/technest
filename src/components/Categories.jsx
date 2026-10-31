import { categories, products } from "../data/products";
import { Arrow } from "./Icons.jsx";
import Img from "./Img.jsx";

export default function Categories({ onPick, onViewAll }) {
  return (
    <section id="categories">
      <div className="section-head">
        <h2>Brands</h2>

        <button className="link" onClick={onViewAll}>
          View all <Arrow />
        </button>
      </div>

      <div className="cat-grid">
        {categories.map((c) => {
          const brandProducts = products.filter(
            (p) =>
              String(p.brandId || p.brand || "").toLowerCase() ===
              String(c.id).toLowerCase(),
          );

          return (
            <button key={c.id} className="cat" onClick={() => onPick(c.id)}>
              <span className="cat-img">
                <Img src={c.image} alt={c.name} fallback={c.emoji} />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
