import { motion } from "framer-motion";
import { Banknote, Building2 } from "lucide-react";

const methods = [
  {
    icon: Banknote,
    title: "Efectivo",
    description: "Pagá en efectivo al momento del servicio.",
  },
  {
    icon: Building2,
    title: "Transferencia Bancaria",
    description: "CBU/Alias disponible al coordinar",
  },
];

const PaymentSection = () => {
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
            Pagos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Métodos de pago
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 p-8 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-primary/10 text-primary">
                <method.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
