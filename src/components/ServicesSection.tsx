import { motion } from "framer-motion";
import { Refrigerator, WashingMachine, Wine, Sparkles } from "lucide-react";

const WHATSAPP_BASE = "https://api.whatsapp.com/send/?phone=5491138839060&text=";

const services = [
  {
    icon: Refrigerator,
    title: "Heladeras",
    description: "Diagnóstico y reparación de compresor, termostato, fugas de gas refrigerante y más.",
    whatsappText: "Hola, necesito servicio técnico para mi heladera",
  },
  {
    icon: WashingMachine,
    title: "Lavarropas",
    description: "Reparación de todo tipo de fallas: no centrifuga, fugas de agua, ruidos y más.",
    whatsappText: "Hola, necesito servicio técnico para mi lavarropas",
  },
  {
    icon: Wine,
    title: "Cavas de Vino",
    description: "Mantenimiento y reparación de sistemas de enfriamiento, termostatos y compresores.",
    whatsappText: "Hola, necesito servicio técnico para mi cava de vino",
  },
  {
    icon: Sparkles,
    title: "Lavavajillas",
    description: "Reparación de bombas, filtros, sistemas de secado y paneles de control.",
    whatsappText: "Hola, necesito servicio técnico para mi lavavajillas",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            ¿Qué podemos reparar?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Contamos con técnicos especializados en todas las marcas y tipos de electrodomésticos.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                {service.description}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl py-3 px-4 font-semibold text-sm text-white transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
