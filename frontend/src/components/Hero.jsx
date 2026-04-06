import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1746106328500-8edb0a404d68",
    title: "Discover the Pink City",
    subtitle: "Experience the Royal Heritage of Jaipur"
  },
  {
    url: "https://images.unsplash.com/photo-1715628256203-6f8a5c9adaac",
    title: "Romance of Udaipur",
    subtitle: "The Venice of the East Awaits You"
  },
  {
    url: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679",
    title: "Golden Sands of Jaisalmer",
    subtitle: "Adventure in the Thar Desert"
  },
  {
    url: "https://images.unsplash.com/photo-1769718460805-97642006a6bc",
    title: "Eternal Love at Taj Mahal",
    subtitle: "Witness the Wonder of the World"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-white space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                  {image.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-amber-200 font-light">
                  {image.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Book Your Tour Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      const element = document.getElementById('packages');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    Explore Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-amber-600" size={32} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Coverage</p>
                <p className="font-semibold text-gray-800">8+ Destinations</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="text-amber-600" size={32} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Established</p>
                <p className="font-semibold text-gray-800">Since 2014</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="text-amber-600" size={32} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Happy Travelers</p>
                <p className="font-semibold text-gray-800">5000+ Tourists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
