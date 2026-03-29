import { Link } from "react-router-dom";
import { products } from "@/data/products";

const NewArrivals = () => {
  const newProducts = products.slice(0, 3);

  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="editorial-subheading mb-4">Just Dropped</p>
          <h2 className="editorial-heading text-3xl md:text-5xl">New Arrivals</h2>
        </div>
        <Link to="/products" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-sans border-b border-muted-foreground/30 pb-1">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newProducts.map((product, i) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={`group relative ${i === 0 ? "md:row-span-2" : ""}`}
          >
            <div className={`overflow-hidden bg-secondary ${i === 0 ? "aspect-[3/5]" : "aspect-[3/4]"}`}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-sans px-3 py-1.5">
                New
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-sans font-normal mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground font-sans">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
