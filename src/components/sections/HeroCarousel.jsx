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
    <div className="relative h-96 overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center`}>
            <div className="text-center">
              <h2 className={`text-5xl font-bold mb-4 ${slide.textColor}`}>
                {slide.title}
              </h2>
              <p className={`text-xl ${slide.textColor} opacity-90`}>
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

