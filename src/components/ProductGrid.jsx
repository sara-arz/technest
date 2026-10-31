import { useMemo, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { Arrow } from "./Icons.jsx";

export default function ProductGrid({ title, items, onOpen, onViewAll }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    const result = [...items];

    switch (sortBy) {
      case "price-low":
        return result.sort((a, b) => a.price - b.price);

      case "price-high":
        return result.sort((a, b) => b.price - a.price);

      case "name-az":
        return result.sort((a, b) => a.name.localeCompare(b.name));

      case "name-za":
        return result.sort((a, b) => b.name.localeCompare(a.name));

      default:
        return result;
    }
  }, [items, sortBy]);

  return (
    <section>
      <div className="section-head">
        <h2>{title}</h2>

        {onViewAll && (
          <button className="link" onClick={onViewAll}>
            View all <Arrow />
          </button>
        )}
      </div>

      <div className="sort-bar">
        <span>Sort by:</span>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-az">Name: A to Z</option>
          <option value="name-za">Name: Z to A</option>
        </select>
      </div>

      {sortedItems.length === 0 ? (
        <p className="empty">
          Nothing here yet. Try another search or category.
        </p>
      ) : (
        <div className="grid">
          {sortedItems.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} />
          ))}
        </div>
      )}
    </section>
  );
}
