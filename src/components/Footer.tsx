const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/60 py-8 px-6 border-t border-primary-foreground/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display font-semibold text-primary-foreground">
          ServiceRillo
        </p>
        <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
