import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import AddToCartModal from "@/components/AddToCartModal";
import { products } from "@/data/products";
import { ShoppingBag } from "lucide-react";

const sizeOptions = ["XS", "S", "M", "L", "XL"];
const colorOptions = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Cream", hex: "#F5F0E8" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Camel", hex: "#C4943A" },
];
const categories = ["All", "Men", "Women", "Kids", "Accessories"];

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const { addItem } = useCart();

  const filtered = products.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  const handleQuickAdd = (product: typeof products[0]) => {
    addItem({
      product,
      size: product.sizes[0],
      color: product.colors[0].name,
      quantity: 1,
    });
    setModalProduct(product.name);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 pb-20">
        <h1 className="editorial-heading text-4xl md:text-6xl mb-4">All Products</h1>
        <p className="text-sm text-muted-foreground font-sans mb-12">{filtered.length} pieces</p>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-56 shrink-0">
            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-4">Category</h4>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm font-sans text-left transition-colors ${
                      selectedCategory === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-4">Price Range</h4>
              <input
                type="range"
                min={0}
                max={600}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-foreground"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-sans mt-2">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-4">Size</h4>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    className="w-9 h-9 border border-border text-xs font-sans text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-4">Color</h4>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    title={color.name}
                    className="w-6 h-6 rounded-full border border-border hover:ring-1 hover:ring-foreground hover:ring-offset-2 transition-all"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid or Empty State */}
          {filtered.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground/40 mb-6" />
              <p className="text-lg font-serif mb-2">No products available</p>
              <p className="text-sm text-muted-foreground font-sans">
                No products found in this category. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] overflow-hidden mb-4 bg-secondary relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        width={900}
                        height={1200}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.id === "1" || product.id === "4" ? (
                        <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-sans px-2 py-1">
                          New
                        </span>
                      ) : null}
                    </div>
                  </Link>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-sans font-normal mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground font-sans">${product.price}</p>
                    </div>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="text-muted-foreground hover:text-foreground transition-colors mt-0.5"
                      title="Add to Cart"
                    >
                      <ShoppingBag size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <AddToCartModal
        open={!!modalProduct}
        onClose={() => setModalProduct(null)}
        productName={modalProduct || ""}
      />
    </div>
  );
};

export default Products;
