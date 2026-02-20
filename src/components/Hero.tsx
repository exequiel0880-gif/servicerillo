const Hero = () => {
  return <section id="inicio" className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/03e3eac3-f7ba-40cf-abea-3745818498cd.jpg')`
    }} />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/70 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 h-full flex items-center min-h-[85vh]">
        <div className="max-w-2xl">
          {/* Text */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Servicio técnico{" "}
              <span className="text-primary">de electrodomésticos</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Heladeras, lavarropas, cavas y lavavajillas
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;