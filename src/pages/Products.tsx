import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import FaboraHeader from "@/components/FaboraHeader";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AddToCartModal from "@/components/AddToCartModal";
import { products } from "@/data/products";
import { ShoppingBag, ChevronRight } from "lucide-react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProductName, setModalProductName] = useState("");

  const filtered = products.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <FaboraHeader />
      
      {/* Collection Banner */}
      <div className="pt-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left - Realistic Image */}
            <div className="w-full md:w-1/2 h-48 md:h-64 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80" 
                alt="Wink Collection - Clothes on hangers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f5f5f5]/20" />
            </div>
            
            {/* Right - Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <span className="text-xs text-gray-500 tracking-wide">- Collections</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2 leading-tight">
                Explore The Various Collection<br />of Wink Collection
              </h2>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Don't miss out to shopping collection from us!<br />
                you'll not be let down.
              </p>
            </div>
          </div>
        </div>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Wink Collection</span>
        </div>
        
        {/* Collection Title */}
        <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-8">Wink Collection</h2>
      </div>
      
      <div className="pt-8 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
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
                    className="w-9 h-9 border border-border text-xs font-sans text-muted-foreground hover:border-foreground hover:text-foreground transition-colors rounded-lg"
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
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddedToCart={(name) => { setModalProductName(name); setModalOpen(true); }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <AddToCartModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={modalProductName}
      />
    </div>
  );
};

export default Products;
