import Head from "next/head";
import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi"; // Import icons
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGooglePay } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(true); // State to toggle filter visibility

  const [openAccordions, setOpenAccordions] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Explore our curated collection of premium products."
        />
      </Head>

      {/* Header */}
      <header>
        <div className="header-top">
          <div className="icon">
            {" "}
            <img src="/icon.png" alt="Logo" className="header-logo" />
          </div>
          <div className="logo">LOGO</div>
          <div className="search-bar">
            <div className="search-item">
              <FiSearch size={20} /> {/* Search Icon */}
            </div>
            <div className="search-item">
              <FiHeart size={20} /> {/* Heart Icon */}
            </div>
            <div className="search-item">
              <IoBagOutline size={20} />
            </div>
            <div className="search-item">
              <FiUser size={20} /> {/* User Icon */}
            </div>
            <div className="search-item">ENG</div>
          </div>
          <div className="search-bar-small">
            <div className="search-item-small">
              <FiSearch size={20} /> {/* Search Icon */}
            </div>
            <div className="search-item-small">
              <FiHeart size={20} /> {/* Heart Icon */}
            </div>
            <div className="search-item-small">
              <IoBagOutline size={20} />
            </div>
          </div>
        </div>
        <div className="header-top-small">
          <div className="icon-small">
            {" "}
            <img src="/icon.png" alt="Logo" className="header-logo-small" />
          </div>
          <div className="logo-small">LOGO</div>
          <div className="header-top-small-right-three-icon">
            <div className="header-top-small-icons">
              {" "}
              <FiSearch size={28} />{" "}
            </div>
            <div className="header-top-small-icons">
              {" "}
              <FiHeart size={28} />
            </div>
            <div className="header-top-small-icons">
              <IoBagOutline size={28} />
            </div>
          </div>
        </div>
        <div className="header-nav">
          {["SHOP", "SKILLS", "STORIES", "ABOUT US", "CONTACT US"].map(
            (link) => (
              <div key={link} className="nav-item">
                {link}
              </div>
            )
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Discover Section */}
        <section className="discover-section">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>
        <section className="filter-button-section">
          <div className="filter-buttons">
            <div className="left-button">
              {showFilter ? (
                <button
                  className="toggle-button"
                  onClick={() => setShowFilter(false)}
                >
                  365 items
                  <PiLessThan /> Hide Filter
                </button>
              ) : (
                <button
                  className="toggle-button"
                  onClick={() => setShowFilter(true)}
                >
                  365 items Show Filter
                  <PiGreaterThan />
                </button>
              )}
            </div>
            <button className="recommended-button">
              RECOMMENDED <FaChevronDown />{" "}
            </button>
          </div>
        </section>

        {/* Layout: Filters on Left, Products on Right */}
        <div
          className={`main-layout ${showFilter ? "with-filter" : "no-filter"}`}
        >
          {/* Sidebar Filters */}
          {showFilter && (
            <>
              <aside className="filters">
                <h2>Filters</h2>
                <h2>
                  <input type="checkbox" /> Customizable
                </h2>
                {[
                  { key: "idealFor", label: "Ideal For" },
                  { key: "occasion", label: "Occasion" },
                  { key: "work", label: "Work" },
                  { key: "fabric", label: "Fabric" },
                ].map((filter) => (
                  <div key={filter.key} className="accordion">
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(filter.key)}
                    >
                      <span>{filter.label}</span>
                      {openAccordions[filter.key] ? (
                        <FiChevronUp size={16} />
                      ) : (
                        <FiChevronDown size={16} />
                      )}
                    </div>
                    {openAccordions[filter.key] && (
                      <div className="accordion-content">
                        <label>
                          <input type="checkbox" /> {filter.label}
                        </label>
                      </div>
                    )}
                    <div className="accordion-border"></div>
                  </div>
                ))}
              </aside>
              <div className="filters-small">
                <div>FILTER</div>
                <div>
                  RECOMMENDED <FaChevronDown />
                </div>
              </div>
            </>
          )}
          {/* Product Grid */}

          <section
            className={`products-grid ${
              showFilter ? "grid-three" : "grid-four"
            }`}
          >
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3>
                      {product.title.split(" ").slice(0, 4).join(" ")}
                      {"..."}
                    </h3>
                    <button className="heart-button">
                      <CiHeart size={20} />
                    </button>
                  </div>
                  <p className="small-text">Sign in to see product price</p>
                </div>
              </div>
            ))}
          </section>

          <section className={`products-grid-small`}>
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3>
                      {product.title.split(" ").slice(0, 4).join(" ")}
                      {"..."}
                    </h3>
                    <button className="heart-button">
                      <CiHeart size={20} />
                    </button>
                  </div>
                  <p className="small-text">Sign in to see product price</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer class="custom-footer">
        <div class="footer-top">
          <div class="newsletter">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettà muse.</p>
            <form>
              <input type="email" placeholder="Enter your email..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="hline">
            <hr />
          </div>
          <div class="contact-us">
            <h2>CONTACT US</h2>
            <p>+44 221 133 536</p>
            <p>customercare@mettamuse.com</p>
            <div className="hline">
              <hr />
            </div>
            <h3>CURRENCY</h3>
            <p>USD</p>
            <p>
              Transaction will be completed in euro and the currency reference
              will be available on hover
            </p>
            <div className="hline">
              <hr />
            </div>
          </div>
        </div>

        <div class="footer-middle">
          <div class="footer-column">
            <h3>mettà muse</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Artisans</a>
              </li>
              <li>
                <a href="#">Boutiques</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">EU Compliance Docs</a>
              </li>
            </ul>
          </div>
          <div className="hline">
            <hr />
          </div>
          <div class="footer-column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="#">Orders & Shipping</a>
              </li>
              <li>
                <a href="#">Join/Login as a Seller</a>
              </li>
              <li>
                <a href="#">Payment & Pricing</a>
              </li>
              <li>
                <a href="#">Return & Refunds</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="hline">
            <hr />
          </div>
          <div class="footer-column">
            <h3>FOLLOW US</h3>
            <div class="social-links">
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <IoLogoLinkedin />
              </a>
            </div>
            <h3>mettà muse ACCEPTS</h3>
            <div className="payment-methods">
              <span>
                <FaGooglePay size={50} />
              </span>
              <span>
                <FaGooglePay size={50} />
              </span>
              <span>
                <FaGooglePay size={50} />
              </span>
              <span>
                <FaGooglePay size={50} />
              </span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>Copyright &copy; 2024 mettà muse. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

// Fetch Products Data
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
