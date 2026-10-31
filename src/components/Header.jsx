import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../store/reducer";
import { Search, Heart, CartIcon, Menu, Logo } from "./Icons.jsx";

export default function Header({
  view,
  query,
  onSearch,
  onHome,
  onShop,
  onCategories,
  onAbout,
  onWishlist,
  onCart,
}) {
  const count = useSelector(selectCount);
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (fn) => () => {
    setMenuOpen(false);
    fn();
  };

  return (
    <header className="header">
      <div className="bar">
        <button className="logo" onClick={go(onHome)}>
          <Logo /> TechNest
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main">
          <button className={view === "home" ? "on" : ""} onClick={go(onHome)}>
            Home
          </button>
          <button className={view === "shop" ? "on" : ""} onClick={go(onShop)}>
            Shop
          </button>
        </nav>
        <label className="search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>
        <div className="actions">
          <button onClick={onWishlist} aria-label="Wishlist">
            <Heart />
          </button>
          <button
            className="cart-btn"
            onClick={onCart}
            aria-label={`Open cart, ${count} items`}
          >
            <CartIcon />
            {count > 0 && <span className="badge">{count}</span>}
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
