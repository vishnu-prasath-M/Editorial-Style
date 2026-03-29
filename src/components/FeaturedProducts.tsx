import { Link } from "react-router-dom";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="editorial-subheading mb-4">Curated</p>
          <h2 className="editorial-heading text-3xl md:text-5xl">Featured Pieces</h2>
        </div>
        <Link to="/products" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-sans border-b border-muted-foreground/30 pb-1">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {featured.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] overflow-hidden mb-4 bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={900}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-sans font-normal mb-1 text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground font-sans">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
