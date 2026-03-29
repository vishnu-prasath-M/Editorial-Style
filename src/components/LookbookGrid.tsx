import bento1 from "@/assets/bento-1.jpg";
import bento2 from "@/assets/bento-2.jpg";
import bento3 from "@/assets/bento-3.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const LookbookGrid = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <p className="editorial-subheading text-center mb-4">@MAISON</p>
      <h2 className="editorial-heading text-3xl md:text-5xl text-center mb-16">The Lookbook</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[200px] md:auto-rows-[280px]">
        <div className="col-span-2 row-span-2 overflow-hidden group cursor-pointer">
          <img src={bento1} alt="Lookbook 1" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="overflow-hidden group cursor-pointer">
          <img src={categoryWomen} alt="Lookbook 2" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="overflow-hidden group cursor-pointer row-span-2">
          <img src={bento2} alt="Lookbook 3" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="bg-secondary flex flex-col justify-center items-center p-6 text-center">
          <p className="editorial-subheading mb-2">Summer</p>
          <h3 className="editorial-heading text-2xl">Summer Fits</h3>
        </div>
        <div className="overflow-hidden group cursor-pointer">
          <img src={categoryMen} alt="Lookbook 4" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="overflow-hidden group cursor-pointer">
          <img src={bento3} alt="Lookbook 5" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-2 overflow-hidden group cursor-pointer">
          <img src={categoryKids} alt="Lookbook 6" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default LookbookGrid;
