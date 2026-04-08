import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

const heroImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_explore-journeys-14/artifacts/f6v2ap8o_c3.png",
    title: "Chokho Safar Fleet at Hawa Mahal",
    subtitle: "Your Trusted Travel Partner in Rajasthan"
  },
  {
    url: "https://images.unsplash.com/photo-1770791366104-a795083e82ea",
    title: "Amber Fort Tours",
    subtitle: "Comfortable Vehicles to Jaipur's Iconic Fort"
  },
  {
    url: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    title: "Explore Hawa Mahal",
    subtitle: "Experience Pink City Heritage with Our Fleet"
  },
  {
    url: "https://images.unsplash.com/photo-1746106328500-8edb0a404d68",
    title: "Discover Jaipur's Pink Beauty",
    subtitle: "Experience Royal Heritage with Comfortable Travel"
  },
  {
    url: "https://images.unsplash.com/photo-1737560878183-10791f96d957",
    title: "Visit the Iconic Taj Mahal",
    subtitle: "Comfortable Journey to the Wonder of the World"
  },
  {
    url: "https://images.unsplash.com/photo-1715628256203-6f8a5c9adaac",
    title: "Romantic Udaipur Awaits",
    subtitle: "Luxury Travel to the City of Lakes"
  },
  {
    url: "https://images.unsplash.com/photo-1588584468549-802aa6d9c1c8",
    title: "Desert Safari Adventures",
    subtitle: "SUV Tours to Rajasthan's Golden Dunes"
  },
  {
    url: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679",
    title: "Golden Sands of Jaisalmer",
    subtitle: "Explore the Desert City in Comfort"
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
                      const element = document.getElementById('destinations');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    Explore Destinations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden */}
      <button 
        onClick={prevSlide}
        className="hidden absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators - Hidden */}
      <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Quick Action Icons - Fixed on Hero */}
      <div className="absolute bottom-24 right-4 md:right-8 z-20 flex gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919829692122?text=Hi!%20I'm%20interested%20in%20booking%20a%20tour%20with%20Chokho%20Safar%20Travels."
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
            <MessageCircle className="text-white" size={28} />
          </div>
          <p className="text-xs font-semibold text-center mt-1 text-white bg-black/50 px-2 py-1 rounded">WhatsApp</p>
        </a>

        {/* Call */}
        <a
          href="tel:+919829692122"
          className="group"
        >
          <div className="w-14 h-14 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
            <Phone className="text-white" size={28} />
          </div>
          <p className="text-xs font-semibold text-center mt-1 text-white bg-black/50 px-2 py-1 rounded">Call Us</p>
        </a>

        {/* Payment - Google Pay */}
        <a
          href="gpay://upi/pay?pa=7734915253@paytm&pn=Chokho%20Safar%20Travels&cu=INR"
          className="group"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#4285f4"/>
              <path d="M33.5 28.5l-3-3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.3 1.3H21c-.6 0-1 .4-1 1s.4 1 1 1h9.4l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z" fill="white"/>
              <path d="M14.5 19.5l3 3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L17.6 20H27c.6 0 1-.4 1-1s-.4-1-1-1h-9.4l1.3-1.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4z" fill="white"/>
            </svg>
          </div>
          <p className="text-xs font-semibold text-center mt-1 text-white bg-black/50 px-2 py-1 rounded">Google Pay</p>
        </a>
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
