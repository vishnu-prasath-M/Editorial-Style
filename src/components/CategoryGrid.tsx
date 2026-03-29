import { Link } from "react-router-dom";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const categories = [
  { name: "Men", image: categoryMen },
  { name: "Women", image: categoryWomen },
  { name: "Kids", image: categoryKids },
];

const CategoryGrid = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <p className="editorial-subheading text-center mb-4">Explore</p>
      <h2 className="editorial-heading text-3xl md:text-5xl text-center mb-16">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products?category=${cat.name}`}
            className="relative group overflow-hidden aspect-[3/4]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover image-zoom"
            />
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/15 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-xl tracking-[0.15em] uppercase text-primary-foreground font-sans font-light">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
