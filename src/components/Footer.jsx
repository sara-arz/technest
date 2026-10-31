export default function Footer({ onHome, onShop, onWishlist, onAbout }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                onHome();
              }}
            >
              TECH<span>NEST.</span>
            </a>

            <p>
              Discover technology that moves you forward. Explore powerful
              laptops from the world's leading brands, all in one place.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Twitter">
                X
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <button onClick={onHome}>Home</button>
            <button onClick={onShop}>All Laptops</button>
            <button onClick={onWishlist}>Wishlist</button>
            <button onClick={onAbout}>About Us</button>
          </div>

          <div className="footer-column">
            <h4>Brands</h4>
            <button onClick={() => onShop("Apple")}>Apple</button>
            <button onClick={() => onShop("Dell")}>Dell</button>
            <button onClick={() => onShop("Lenovo")}>Lenovo</button>
            <button onClick={() => onShop("HP")}>HP</button>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="mailto:support@technest.com">Contact Us</a>
            <a href="mailto:support@technest.com">Help Center</a>
            <a href="mailto:support@technest.com">Customer Support</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TECHNEST. All rights reserved.</p>

          <span>Built for technology lovers.</span>
        </div>
      </div>
    </footer>
  );
}
