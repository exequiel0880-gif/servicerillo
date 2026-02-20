import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-technician.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Técnico reparando electrodoméstico"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-accent/20 text-accent border border-accent/30"
          >
            Servicio técnico profesional
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Reparamos tus{" "}
            <span className="text-gradient-accent">electrodomésticos</span>{" "}
            con garantía
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Reparamos heladeras, lavarropas, cavas de vino, lavavajillas y más.
            Servicio rápido a domicilio en Buenos Aires y alrededores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5491138839060&text=Hola%2C+necesito+solicitar+un+servicio+t%C3%A9cnico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl shadow-elevated transition-all hover:scale-[1.02]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llámanos ahora
              </Button>
            </a>
            <a href="#servicios">
              <Button
                size="lg"
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm hover:bg-primary-foreground/20"
              >
                Ver servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
