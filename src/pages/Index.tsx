import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import WhyUsSection from "@/components/WhyUsSection";
import CoverageSection from "@/components/CoverageSection";
import PaymentSection from "@/components/PaymentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <WhyUsSection />
      <CoverageSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
