import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Extra ₹200 Off",
      subtitle: "On Selected Range",
      bgColor: "bg-gradient-to-r from-gray-800 to-gray-900",
      textColor: "text-white",
      image: null
    },
    {
      id: 2,
      title: "Premium Supplements",
      subtitle: "Up to 50% Off",
      bgColor: "bg-gradient-to-r from-blue-800 to-blue-900",
      textColor: "text-white",
      image: null
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "On Orders Above ₹999",
      bgColor: "bg-gradient-to-r from-green-800 to-green-900",
      textColor: "text-white",
      image: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 mb-12">
      <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
              </div>
              
              <div className="text-center relative z-10 px-8">
                <h2 className={`text-6xl md:text-7xl font-bold mb-6 ${slide.textColor} leading-tight`}>
                  {slide.title}
                </h2>
                <p className={`text-2xl md:text-3xl ${slide.textColor} opacity-90 mb-8 font-medium`}>
                  {slide.subtitle}
                </p>
                <div className="mt-12">
                  <span className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                    EXCITING FREEBIES 🎁
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="h-8 w-8 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="h-8 w-8 text-gray-800" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? 'bg-white shadow-lg' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;

