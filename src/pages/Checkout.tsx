import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const orderItems = [
  { product: products[0], size: "M", color: "Cream", quantity: 1 },
  { product: products[2], size: "L", color: "White", quantity: 2 },
];

const inputClass = "w-full bg-transparent border-b border-border py-3 text-sm font-sans outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground";

const Checkout = () => {
  const subtotal = orderItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 pb-20 max-w-5xl mx-auto">
        <h1 className="editorial-heading text-4xl md:text-5xl mb-12">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Form */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-sans mb-8">Contact</h2>
            <input type="email" placeholder="Email address" className={inputClass + " mb-6"} />

            <h2 className="text-xs uppercase tracking-[0.2em] font-sans mb-8 mt-12">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <input type="text" placeholder="First name" className={inputClass} />
              <input type="text" placeholder="Last name" className={inputClass} />
              <input type="text" placeholder="Address" className={inputClass + " col-span-2"} />
              <input type="text" placeholder="City" className={inputClass} />
              <input type="text" placeholder="Zip code" className={inputClass} />
              <input type="text" placeholder="Country" className={inputClass + " col-span-2"} />
            </div>

            <h2 className="text-xs uppercase tracking-[0.2em] font-sans mb-8 mt-12">Payment</h2>
            <div className="grid gap-6">
              <input type="text" placeholder="Card number" className={inputClass} />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM / YY" className={inputClass} />
                <input type="text" placeholder="CVC" className={inputClass} />
              </div>
            </div>

            <Button variant="editorial" size="lg" className="w-full mt-12">
              Place Order
            </Button>
          </div>

          {/* Right - Summary */}
          <div className="bg-secondary p-8 md:p-10 h-fit">
            <h2 className="text-xs uppercase tracking-[0.2em] font-sans mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8">
              {orderItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-16 aspect-[3/4] bg-background overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-sans mb-1">{item.product.name}</h3>
                    <p className="text-xs text-muted-foreground font-sans">{item.color} / {item.size} × {item.quantity}</p>
                  </div>
                  <p className="text-sm font-sans">${item.product.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-sans font-medium border-t border-border pt-3 mt-3">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
