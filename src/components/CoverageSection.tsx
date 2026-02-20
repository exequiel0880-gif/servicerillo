import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  {
    name: "Buenos Aires (CABA)",
    areas: "Todos los barrios de Capital Federal",
  },
  {
    name: "Zona Oeste",
    areas: "Morón, Merlo, Moreno, Ituzaingó, Hurlingham, Castelar, Ramos Mejía",
  },
  {
    name: "Zona Sur",
    areas: "Lanús, Avellaneda, Lomas de Zamora, Quilmes, Berazategui, Florencio Varela",
  },
  {
    name: "Zona Norte",
    areas: "Vicente López, San Isidro, San Fernando, Tigre, Pilar, San Martín",
  },
];

const CoverageSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Cobertura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Zonas de cobertura
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{zone.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{zone.areas}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
