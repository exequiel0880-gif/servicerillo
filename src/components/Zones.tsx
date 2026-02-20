import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useIsMobile } from "@/hooks/use-mobile";

const zones = [
  {
    area: "Capital Federal",
    neighborhoods: ["Palermo", "Belgrano", "Recoleta", "Caballito", "Villa Crespo", "Núñez", "Colegiales", "Villa Urquiza", "Devoto", "Flores"]
  },
  {
    area: "Zona Norte",
    neighborhoods: ["Vicente López", "San Isidro", "Martínez", "Olivos", "San Fernando", "Tigre", "Don Torcuato", "Pacheco"]
  },
  {
    area: "Zona Oeste",
    neighborhoods: ["Morón", "Haedo", "Ramos Mejía", "Ituzaingó", "Castelar", "Merlo", "Moreno", "San Justo", "La Matanza"]
  },
  {
    area: "Zona Sur",
    neighborhoods: ["Avellaneda", "Lanús", "Lomas de Zamora", "Quilmes", "Berazategui", "Florencio Varela", "Almirante Brown"]
  }
];

const Zones = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const isMobile = useIsMobile();

  return (
    <section id="zonas" className="py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zonas de <span className="text-primary">Cobertura</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Brindamos servicio técnico a domicilio en Capital Federal y Gran Buenos Aires.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isMobile ? `${index * 150}ms` : `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{zone.area}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {zone.neighborhoods.map((neighborhood, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center mt-10 p-6 bg-card border border-border rounded-2xl shadow-sm max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-muted-foreground">
            ¿Estás en otra zona? <span className="text-foreground font-medium">Consultanos</span>, podemos coordinar igualmente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Zones;
