import { Banknote, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useIsMobile } from "@/hooks/use-mobile";

const paymentMethods = [
  {
    icon: Banknote,
    title: "Efectivo",
    description: "Pagá en el momento del servicio"
  },
  {
    icon: Building2,
    title: "Transferencia Bancaria",
    description: "CBU/Alias disponible al coordinar"
  }
];

const PaymentMethods = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const isMobile = useIsMobile();

  return (
    <section id="pagos" className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Métodos de <span className="text-primary">Pago</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aceptamos las siguientes formas de pago para tu comodidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 text-center shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isMobile ? `${index * 200}ms` : `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
