const SkillCategory = ({
  icon,
  title,
  count,
  className = "",
  animationDelay,
}) => (
  <div
    className={`group rounded-2xl p-6 border border-transparent hover:border-timecoin-100 transition-all duration-300 animate-fade-up animation-delay-${animationDelay} ${className}`}
  >
    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{count} active exchanges</p>
  </div>
);

export default SkillCategory;
