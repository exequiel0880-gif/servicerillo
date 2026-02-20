import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Zones from "@/components/Zones";
import PaymentMethods from "@/components/PaymentMethods";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Brands />
      <SectionDivider />
      <Zones />
      <SectionDivider />
      <PaymentMethods />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
