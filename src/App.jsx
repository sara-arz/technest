import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectWishlist } from "./store/reducer";
import { products, featured, categories } from "./data/products";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer";

export default function App() {
  // UI state kept locally: which page, filters, and the cart panel. Cart data lives in Redux.
  const [view, setView] = useState("home"); // "home" | "shop" | "product"
  const [productId, setProductId] = useState(null);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const wishlist = useSelector(selectWishlist);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("technest-theme") || "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("technest-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const top = () => window.scrollTo({ top: 0 });
  const goHome = () => {
    setView("home");
    setQuery("");
    top();
  };
  const goShop = (cat = "All") => {
    const selectedCategory = categories.find((c) => c.id === cat)?.name || cat;

    setCategory(selectedCategory);
    setQuery("");
    setView("shop");
    top();
  };
  const openProduct = (id) => {
    setProductId(id);
    setView("product");
    top();
  };
  const scrollTo = (id) => {
    setView("home");
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      0,
    );
  };
  const search = (q) => {
    setQuery(q);
    setCategory("All");
    setView("shop");
  };

  const shown = products.filter(
    (p) =>
      (category === "All" ||
        (category === "Wishlist"
          ? wishlist.includes(p.id)
          : p.category === category)) &&
      `${p.name} ${p.sub} ${p.brand}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  return (
    <>
      <Header
        view={view}
        query={query}
        onSearch={search}
        onHome={goHome}
        onShop={() => goShop()}
        onCategories={() => scrollTo("categories")}
        onAbout={() => scrollTo("about")}
        onWishlist={() => goShop("Wishlist")}
        onCart={() => setCartOpen(true)}
      />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <main>
        {view === "home" && (
          <>
            <Hero onShop={() => goShop()} />
            <Categories onPick={goShop} onViewAll={() => goShop()} />
            <ProductGrid
              title="Featured Products"
              items={featured}
              onOpen={openProduct}
              onViewAll={() => goShop()}
            />
          </>
        )}
        {view === "shop" && (
          <>
            <div className="chips">
              {["All", ...categories.map((c) => c.name), "Wishlist"].map(
                (c) => (
                  <button
                    key={c}
                    className={c === category ? "chip on" : "chip"}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ),
              )}
            </div>
            <ProductGrid
              title={category === "All" ? "All Products" : category}
              items={shown}
              onOpen={openProduct}
            />
          </>
        )}
        {view === "product" && (
          <ProductDetail
            key={productId}
            product={products.find((p) => p.id === productId)}
            onHome={goHome}
            onCategory={goShop}
          />
        )}
      </main>
      <Footer
        onHome={goHome}
        onShop={goShop}
        onWishlist={() => goShop("Wishlist")}
        onAbout={() => scrollTo("about")}
      />{" "}
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
