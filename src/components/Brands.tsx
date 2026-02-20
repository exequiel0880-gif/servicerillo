import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useIsMobile } from "@/hooks/use-mobile";

const brands = [
  "Whirlpool", "Samsung", "LG", "Electrolux", "Philco", "Gafa", 
  "Drean", "Patrick", "Bosch", "Siemens", "Mabe", "General Electric",
  "Frigidaire", "Kelvinator", "Siam", "Aurora"
];

const Brands = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const isMobile = useIsMobile();

  return (
    <section id="marcas" className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marcas que <span className="text-primary">Reparamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con todas las marcas del mercado. Nuestros técnicos están capacitados para reparar cualquier modelo.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isMobile ? `${Math.floor(index / 2) * 75}ms` : `${index * 50}ms` }}
            >
              <span className="font-medium text-sm">{brand}</span>
            </div>
          ))}
        </div>
        
        <p 
          className={`text-center text-muted-foreground mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          ¿No ves tu marca? <span className="text-primary font-medium">¡Contáctanos igual!</span> Trabajamos con todas las marcas.
        </p>
      </div>
    </section>
  );
};

export default Brands;
