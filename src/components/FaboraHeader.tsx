import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FaboraHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems } = useCart();

  const links = [
    { label: "New In", to: "/products" },
    { label: "Best Sellers", to: "/products?category=Women" },
    { label: "Style Feed", to: "/products?category=Men" },
    { label: "Offers", to: "/products?category=Kids" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-foreground font-semibold">
          FABORA
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-sans text-foreground/70 hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Search + Cart + Profile */}
        <div className="flex items-center gap-4">
          {/* Rounded Search Bar */}
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <div className="flex items-center bg-secondary rounded-full px-4 py-2 gap-2">
                <Search size={16} className="text-muted-foreground" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-sm font-sans text-foreground outline-none w-44 placeholder:text-muted-foreground"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center bg-secondary rounded-full px-4 py-2 gap-2 hover:bg-accent transition-colors"
              >
                <Search size={16} className="text-muted-foreground" />
                <span className="text-sm font-sans text-muted-foreground">Search Products...</span>
              </button>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative text-foreground/70 hover:text-foreground transition-colors p-2">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-foreground text-background text-[10px] font-sans font-semibold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link to="/login" className="text-foreground/70 hover:text-foreground transition-colors p-2">
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default FaboraHeader;
