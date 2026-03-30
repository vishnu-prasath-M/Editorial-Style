import FaboraHeader from "@/components/FaboraHeader";
import HeroFullImage from "@/components/HeroFullImage";
import ProductLooksCarousel from "@/components/ProductLooksCarousel";
import NewCollectionGrid from "@/components/NewCollectionGrid";
import WinterSaleBanner from "@/components/WinterSaleBanner";
import CategoryGrid from "@/components/CategoryGrid";
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
        <HeroFullImage />
        <ProductLooksCarousel />
        <NewCollectionGrid />
        <WinterSaleBanner />
        <CategoryGrid />
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
