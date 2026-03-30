import { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import carouselCenter from "@/assets/carousel-center.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";

const panels = [
  { img: carousel1, alt: "Streetwear look" },
  { img: carousel2, alt: "Bold pink look" },
  { img: carousel3, alt: "Classic leather" },
  { img: carouselCenter, alt: "Featured style", center: true },
  { img: carousel4, alt: "Urban chains" },
  { img: carousel5, alt: "Silver metallic" },
  { img: carousel1, alt: "Teal hoodie" },
];

const ProductLooksCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-foreground mb-3">
          Curated Looks
        </h2>
        <p className="text-sm md:text-base font-sans text-muted-foreground max-w-md mx-auto">
          Candid fashion from top brands, made for trendsetters. Effortless style for everyday.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 max-w-[1400px] mx-auto">
        {panels.map((panel, index) => {
          const isCenter = index === 3;
          return (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 shrink-0 ${
                isCenter
                  ? "w-[200px] md:w-[280px] h-[380px] md:h-[500px] z-10"
                  : "w-[80px] md:w-[120px] h-[300px] md:h-[420px]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index && !isCenter ? "scale(1.05)" : "scale(1)",
              }}
            >
              <img
                src={panel.img}
                alt={panel.alt}
                loading="lazy"
                width={isCenter ? 280 : 120}
                height={isCenter ? 500 : 420}
                className="w-full h-full object-cover"
              />

              {/* Center panel overlays */}
              {isCenter && (
                <>
                  {/* HOT badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-background text-foreground text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                      HOT
                    </span>
                  </div>

                  {/* Vertical text */}
                  <div className="absolute top-4 right-3 flex flex-col items-center">
                    <span
                      className="text-background/90 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-semibold"
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      FABORA PICKS
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-14 left-4">
                    <p className="text-background/70 text-[10px] font-sans">Shop from</p>
                    <p className="text-background font-serif text-lg font-semibold">₹999 INR</p>
                  </div>

                  {/* Floating CTA */}
                  <Link
                    to="/products"
                    className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-[hsl(25,90%,55%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
                  >
                    <Plus size={24} className="text-background" />
                  </Link>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductLooksCarousel;
