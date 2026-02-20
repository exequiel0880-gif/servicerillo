import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useIsMobile } from "@/hooks/use-mobile";
import refrigeratorImg from "@/assets/refrigerator.png";
import washingMachineImg from "@/assets/washing-machine.png";
import wineCoolerImg from "@/assets/wine-cooler.png";
import dishwasherImg from "@/assets/dishwasher.png";

const services = [
  {
    image: refrigeratorImg,
    title: "HELADERAS",
    features: [
      "Servicio técnico en heladeras no frost, cíclicas, exhibidoras y cavas",
      "Reparación y sustitución de placas electrónicas (originales y nacionales)",
      "Reparación y reemplazo de motores",
      "Sustitución de sensores",
      "Cambio de resistencias y forzadores",
      "Carga de gas refrigerante",
      "Reemplazo de burletes",
      "Cambio de termostatos"
    ]
  },
  {
    image: wineCoolerImg,
    title: "CAVAS",
    features: [
      "Reparación de Placas",
      "Cambio de Ventilador",
      "Mantenimiento",
      "Cambios de Placas de placa"
    ]
  },
  {
    image: washingMachineImg,
    title: "LAVARROPAS",
    features: [
      "Cambio de rulemanes",
      "Reparación de placas",
      "Cambio de electroválvula",
      "Cambio de sensores",
      "Cambio de resistencia",
      "Reparación de gabinetes",
      "Cambio de bomba de desagote",
      "Reparación de cuba",
      "Cambio de correas",
      "Reparación de sistema de secado"
    ]
  },
  {
    image: dishwasherImg,
    title: "LAVAVAJILLAS",
    features: [
      "Reparación de placas",
      "Cambio de sales",
      "Cambio de bomba de desagote",
      "Cambio de motor de jabonera",
      "Pérdidas de Agua",
      "Electroválvulas"
    ]
  }
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const isMobile = useIsMobile();

  const handleWhatsApp = () => {
    window.open("https://wa.me/5491138839060?text=Hola, necesito solicitar un servicio técnico", "_blank");
  };

  return (
    <section id="servicios" className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Nota informativa */}
        <div className={`flex items-center justify-center gap-3 mb-10 px-6 py-4 bg-primary/10 border-2 border-primary/30 rounded-xl max-w-xl mx-auto shadow-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          <p className="text-base text-foreground">
            <span className="font-bold text-primary">Importante:</span> Solo realizamos servicio técnico. <span className="font-semibold">No vendemos repuestos.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl border border-border p-6 shadow-md hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isMobile ? `${index * 150}ms` : `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                {/* Image */}
                <div className="flex-shrink-0 w-32 md:w-40">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 tracking-wide">{service.title}</h3>
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-foreground mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm"
                  >
                    <WhatsAppIcon />
                    <span className="ml-2">Solicitar Service</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
