import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Servicio Rápido",
    description: "Atendemos en menos de 48 horas. Sabemos que no puedes esperar.",
  },
  {
    icon: Shield,
    title: "Garantía en Reparaciones",
    description: "Todas nuestras reparaciones incluyen garantía por escrito.",
  },
  {
    icon: BadgeCheck,
    title: "Técnicos Capacitados",
    description: "Personal profesional y altamente capacitado en electrodomésticos.",
  },
  {
    icon: ThumbsUp,
    title: "Precios Justos",
    description: "Presupuesto sin compromiso. Sin sorpresas ni costos ocultos.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Confianza y calidad en cada reparación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-primary-foreground/10 text-accent">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
