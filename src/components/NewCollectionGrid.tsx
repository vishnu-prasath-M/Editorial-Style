import { Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import AddToCartModal from "./AddToCartModal";

const NewCollectionGrid = () => {
  const { addItem } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProductName, setModalProductName] = useState("");
  const displayProducts = products.slice(0, 6);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      product,
      quantity: 1,
      size: "M",
      color: typeof product.colors[0] === 'string' ? product.colors[0] : product.colors[0]?.name || "Default",
    });
    setModalProductName(product.name);
    setModalOpen(true);
  };

  // Fake original prices (30% higher)
  const getOriginalPrice = (price: number) => Math.round(price * 1.35);
  // Fake review counts
  const reviewCounts = [17, 9, 32, 24, 11, 19];

  return (
    <section className="px-4 md:px-10 py-16 md:py-24 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <p className="editorial-subheading mb-3">Just Dropped</p>
        <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-foreground">
          New Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {displayProducts.map((product, i) => {
          const isFeature = i === 1;
          return (
            <div key={product.id} className={`group ${isFeature ? "md:row-span-2" : ""}`}>
              {/* Image container */}
              <Link
                to={`/product/${product.id}`}
                className={`block relative overflow-hidden rounded-2xl bg-secondary ${
                  isFeature ? "aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* HOT badge only on featured */}
                {isFeature && (
                  <>
                    <span className="absolute top-4 left-4 bg-white text-foreground text-[10px] uppercase tracking-[0.15em] font-sans font-medium px-3 py-1.5 rounded-full">
                      HOT
                    </span>
                    <span
                      className="absolute top-4 right-3 text-white/80 text-[10px] font-sans uppercase tracking-[0.3em] font-semibold"
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      Featured Style
                    </span>
                  </>
                )}

                {/* Shopping bag CTA */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center transition-transform hover:scale-110 ${
                    isFeature
                      ? "bg-[hsl(80,70%,55%)] text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  <ShoppingBag size={16} strokeWidth={2} />
                </button>
              </Link>

              {/* Card footer */}
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-sm md:text-base font-semibold text-foreground uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-sans text-sm font-semibold text-foreground">
                      ₹{(product.price * 83).toLocaleString()}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground line-through">
                      ₹{(getOriginalPrice(product.price) * 83).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="text-[hsl(45,100%,50%)] fill-[hsl(45,100%,50%)]" />
                  <span className="text-xs font-sans text-muted-foreground">
                    {String(reviewCounts[i] || 10).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {modalProduct && (
        <AddToCartModal
          productName={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </section>
  );
};

export default NewCollectionGrid;
