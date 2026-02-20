const SectionDivider = () => {
  return (
    <div className="relative h-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default SectionDivider;
