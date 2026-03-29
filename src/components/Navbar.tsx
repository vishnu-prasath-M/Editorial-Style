import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-sm border-b border-border"
    : "bg-transparent";

  const links = [
    { label: "Men", to: "/products?category=Men" },
    { label: "Women", to: "/products?category=Women" },
    { label: "Kids", to: "/products?category=Kids" },
    { label: "New Arrivals", to: "/products" },
    { label: "Accessories", to: "/products?category=Accessories" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.1em] text-foreground">
          MAISON
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <div className="relative">
            {searchOpen ? (
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="bg-transparent border-b border-foreground/30 text-foreground text-xs tracking-widest uppercase outline-none pb-1 w-40 font-sans placeholder:text-muted-foreground"
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-foreground/70 hover:text-foreground transition-colors">
                <Search size={18} strokeWidth={1.5} />
              </button>
            )}
          </div>
          <Link to="/cart" className="text-foreground/70 hover:text-foreground transition-colors">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </Link>
          <button className="text-foreground/70 hover:text-foreground transition-colors">
            <User size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
