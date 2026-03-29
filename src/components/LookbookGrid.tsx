import bento1 from "@/assets/bento-1.jpg";
import bento2 from "@/assets/bento-2.jpg";
import bento3 from "@/assets/bento-3.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const images = [bento1, categoryWomen, bento2, categoryMen, bento3, categoryKids];

const LookbookGrid = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <p className="editorial-subheading text-center mb-4">@MAISON</p>
      <h2 className="editorial-heading text-3xl md:text-5xl text-center mb-16">The Lookbook</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden group cursor-pointer">
            <img
              src={img}
              alt={`Lookbook ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LookbookGrid;
