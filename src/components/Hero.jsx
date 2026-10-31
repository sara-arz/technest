import { Arrow } from "./Icons.jsx";

export default function Hero({ onShop }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">PREMIUM LAPTOPS</p>
        <h1>Find Your Perfect Laptop.</h1>
        <p className="lead">
          Discover powerful laptops for work, study, gaming, and everything in
          between.
        </p>
        <button className="primary pill" onClick={onShop}>
          Shop Now <Arrow />
        </button>
      </div>
    </section>
  );
}
