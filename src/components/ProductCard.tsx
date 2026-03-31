import { Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  onAddedToCart?: (name: string) => void;
}

const getOriginalPrice = (price: number) => Math.round(price * 1.35);
const reviewCounts: Record<string, number> = {
  "1": 17, "2": 9, "3": 32, "4": 24, "5": 11, "6": 19,
  "7": 14, "8": 27, "9": 8, "10": 21, "11": 15, "12": 30,
};

const ProductCard = ({ product, featured = false, onAddedToCart }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      product,
      quantity: 1,
      size: product.sizes?.[0] || "M",
      color: product.colors?.[0]?.name || "Default",
    });
    onAddedToCart?.(product.name);
  };

  const reviews = reviewCounts[product.id] || 12;

  return (
    <div className={`group ${featured ? "md:row-span-2" : ""}`}>
      <Link
        to={`/product/${product.id}`}
        className={`block relative overflow-hidden rounded-2xl bg-secondary ${
          featured ? "aspect-[3/5]" : "aspect-[4/5]"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* HOT badge + vertical text on featured */}
        {featured && (
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

        {/* New badge on non-featured */}
        {!featured && (product.id === "1" || product.id === "4") && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-sans px-3 py-1.5 rounded-full">
            New
          </span>
        )}

        {/* Shopping bag CTA */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center transition-transform hover:scale-110 ${
            featured
              ? "bg-[hsl(80,70%,55%)] text-foreground"
              : "bg-foreground text-background"
          }`}
        >
          <ShoppingBag size={16} strokeWidth={2} />
        </button>
      </Link>

      {/* Card footer */}
      <div className="mt-3 flex items-start justify-between">
        <div className="flex-1">
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
        <div className="flex items-center gap-1 mt-1 ml-2">
          <Star size={12} className="text-[hsl(45,100%,50%)] fill-[hsl(45,100%,50%)]" />
          <span className="text-xs font-sans text-muted-foreground">
            {String(reviews).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
