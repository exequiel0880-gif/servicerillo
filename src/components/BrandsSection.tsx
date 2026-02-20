import { motion } from "framer-motion";

const brands = [
  "Gafa", "Drean", "Patrick", "Siam", "Kohinoor",
  "Aurora", "Longvie", "Peabody", "BGH", "Philco",
  "Samsung", "LG", "Whirlpool", "Electrolux",
];

const BrandsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Marcas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Marcas con las que trabajamos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="px-6 py-3 rounded-xl bg-card border border-border shadow-card text-foreground font-semibold text-sm hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
