import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-white font-display tracking-tight">
          Service<span className="text-primary">Rillo</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Servicios
          </a>
          <a href="#contacto" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Contacto
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5491138839060&text=Hola%2C+necesito+solicitar+un+servicio+t%C3%A9cnico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-lg px-3 py-2 text-white transition-all hover:scale-[1.02]"
            style={{ backgroundColor: "#25D366" }}
          >
            <Phone className="h-4 w-4" />
            +54 9 11 3883-9060
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground border-t border-white/10 px-6 py-4 space-y-4">
          <a href="#servicios" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white text-sm font-medium">
            Servicios
          </a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white text-sm font-medium">
            Contacto
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5491138839060&text=Hola%2C+necesito+solicitar+un+servicio+t%C3%A9cnico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full text-sm font-semibold rounded-lg px-3 py-2 text-white transition-all"
            style={{ backgroundColor: "#25D366" }}
          >
            <Phone className="h-4 w-4" />
            +54 9 11 3883-9060
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
