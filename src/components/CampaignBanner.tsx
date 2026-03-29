import { Link } from "react-router-dom";
import campaignImage from "@/assets/campaign-summer.jpg";

const CampaignBanner = () => {
  return (
    <section className="w-full">
      <Link to="/products" className="block relative group overflow-hidden">
        <img
          src={campaignImage}
          alt="Summer Collection 2026 Campaign"
          loading="lazy"
          width={1920}
          height={600}
          className="w-full h-[50vh] md:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="editorial-subheading text-primary-foreground/80 mb-3">Discover</p>
          <h2 className="editorial-heading text-4xl md:text-6xl text-primary-foreground text-center">
            Summer Collection 2026
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default CampaignBanner;
