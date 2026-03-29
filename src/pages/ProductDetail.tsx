import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import AddToCartModal from "@/components/AddToCartModal";
import { Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>("details");
  const [modalOpen, setModalOpen] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-sans text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleAddToCart = () => {
    addItem({
      product,
      size: selectedSize || product.sizes[0],
      color: product.colors[selectedColor].name,
      quantity,
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 pb-20">
        <div className="flex gap-2 text-xs text-muted-foreground font-sans mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <img src={product.image} alt={product.name} width={900} height={1200} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`aspect-square bg-secondary overflow-hidden border-2 transition-colors ${
                    selectedColor === i ? "border-foreground" : "border-transparent"
                  }`}
                >
                  <img src={product.image} alt={color.name} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:pt-8">
            <p className="editorial-subheading mb-2">{product.brand}</p>
            <h1 className="editorial-heading text-3xl md:text-4xl mb-4">{product.name}</h1>
            <p className="text-lg font-sans mb-8">${product.price}</p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-10">{product.description}</p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-3">Size</h4>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-11 px-3 border text-xs font-sans uppercase tracking-wider transition-colors ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-3">
                Color — {product.colors[selectedColor].name}
              </h4>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 rounded-full border transition-all ${
                      selectedColor === i ? "ring-1 ring-foreground ring-offset-2" : "border-border"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-[0.2em] font-sans mb-3">Quantity</h4>
              <div className="flex items-center border border-border w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm font-sans">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button variant="editorial" size="lg" className="w-full mb-4" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            <div className="mt-12 border-t border-border">
              {[
                { key: "details", title: "Product Details", content: product.description },
                { key: "delivery", title: "Delivery & Returns", content: "Free standard shipping on orders over $200. Express delivery available. Free returns within 30 days of delivery." },
                { key: "reviews", title: "Reviews", content: "No reviews yet. Be the first to share your experience." },
              ].map((section) => (
                <div key={section.key} className="border-b border-border">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] font-sans">{section.title}</span>
                    <Plus size={14} className={`transition-transform duration-300 ${openSection === section.key ? "rotate-45" : ""}`} />
                  </button>
                  {openSection === section.key && (
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed pb-5">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <AddToCartModal open={modalOpen} onClose={() => setModalOpen(false)} productName={product.name} />
    </div>
  );
};

export default ProductDetail;
