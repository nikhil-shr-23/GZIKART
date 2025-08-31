const PromotionalBanner = ({ 
  title, 
  subtitle, 
  offer, 
  bgColor = "bg-gradient-to-r from-amber-800 to-amber-900",
  textColor = "text-white"
}) => {
  return (
    <section className="py-8">
      <div className={`${bgColor} rounded-lg p-8 text-center relative overflow-hidden`}>
        <div className="relative z-10">
          <div className="mb-4">
            <h2 className={`text-3xl font-bold mb-2 ${textColor}`}>
              {title}
            </h2>
            <p className={`text-lg ${textColor} opacity-90`}>
              {subtitle}
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-left">
              <p className={`text-sm ${textColor} opacity-80 mb-1`}>Boosts Stamina</p>
              <p className={`text-sm ${textColor} opacity-80`}>Boosts Energy & Endurance</p>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                <span className={`text-4xl ${textColor}`}>🏋️</span>
              </div>
            </div>
            
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
              <div className="text-lg font-bold">BUY ONE</div>
              <div className="text-lg font-bold">GET ONE</div>
              <div className="text-2xl font-bold">FREE</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </section>
  );
};

export default PromotionalBanner;

