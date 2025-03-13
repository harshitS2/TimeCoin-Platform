const Card = ({ icon, title, description, className = "", animationDelay }) => (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-${animationDelay} ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-timecoin-50 flex items-center justify-center text-timecoin-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );


export default Card;