import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ selectedBrand = null, onOpen }) {
  const [query, setQuery] = useState("");

  const visible = products.filter((p) => {
    const matchesBrand = !selectedBrand || p.brandId === selectedBrand;

    const matchesSearch = p.name.toLowerCase().includes(query.toLowerCase());

    return matchesBrand && matchesSearch;
  });

  return (
    <section>
      <div className="toolbar">
        <input
          type="search"
          placeholder="Search laptops..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {selectedBrand && (
          <button className="chip" onClick={() => {}}>
            {selectedBrand.toUpperCase()}
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="empty">No products found for this brand.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} />
          ))}
        </div>
      )}
    </section>
  );
}
