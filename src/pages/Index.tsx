import FaboraHeader from "@/components/FaboraHeader";
import HeroBentoGrid from "@/components/HeroBentoGrid";
import ProductLooksCarousel from "@/components/ProductLooksCarousel";
import CampaignBanner from "@/components/CampaignBanner";
import CategoryGrid from "@/components/CategoryGrid";
import BentoGrid from "@/components/BentoGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";
import LookbookGrid from "@/components/LookbookGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FaboraHeader />
      <main>
        <HeroBentoGrid />
        <ProductLooksCarousel />
        <CampaignBanner />
        <CategoryGrid />
        <BentoGrid />
        <NewArrivals />
        <FeaturedProducts />
        <WhyChooseUs />
        <LookbookGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
