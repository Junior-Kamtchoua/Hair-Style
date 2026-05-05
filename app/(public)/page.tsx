import Hero from "@/components/landing/Hero";
import ProductsPreview from "@/components/landing/ProductsPreview";
import BookingCTA from "@/components/landing/BookingCTA";
import Collections from "@/components/landing/Collections";
import StylistSection from "@/components/landing/StylistSection";
import GetTheLook from "@/components/landing/GetTheLook";
import BestSellers from "@/components/landing/BestSellers";
import InstagramSection from "@/components/landing/InstagramSection";
import LookSection from "@/components/landing/LookSection";
import QualitySection from "@/components/landing/QualitySection";
import ProductRangeSection from "@/components/landing/ProductRangeSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import InstagramVideos from "@/components/landing/InstagramVideos";
import ReviewWidget from "@/components/ReviewWidget";
import PromoPopup from "@/components/PromoPopup";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PromoPopup />
      <Collections />
      <StylistSection />
      <GetTheLook />
      <BestSellers />
      <InstagramSection />
      <LookSection />
      <QualitySection />
      <ReviewWidget />
      <ProductRangeSection />
      <NewsletterSection />
      <FeaturedProducts />

      <ProductsPreview />
      <InstagramVideos />
    </main>
  );
}
