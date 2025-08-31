const PromotionalBanner = ({ 
  title, 
  subtitle, 
  offer, 
  bgColor = "bg-gradient-to-r from-amber-800 to-amber-900",
  textColor = "text-white"
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className={`${bgColor} rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl`}>
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-50"></div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor} leading-tight`}>
                {title}
              </h2>
              <p className={`text-xl md:text-2xl ${textColor} opacity-90 font-medium`}>
                {subtitle}
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="text-center lg:text-left space-y-3">
                <p className={`text-lg ${textColor} opacity-90 font-medium`}>Boosts Stamina</p>
                <p className={`text-lg ${textColor} opacity-90 font-medium`}>Boosts Energy & Endurance</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-white bg-opacity-15 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <span className={`text-6xl ${textColor}`}>🏋️</span>
                </div>
              </div>
              
              <div className="bg-yellow-400 text-black px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                <div className="text-xl font-bold mb-1">BUY ONE</div>
                <div className="text-xl font-bold mb-1">GET ONE</div>
                <div className="text-3xl font-bold text-red-600">FREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;

