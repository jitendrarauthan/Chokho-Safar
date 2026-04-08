import React from 'react';
import { tourPackages } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, MapPin, Star, BadgeIndianRupee } from 'lucide-react';

export const TourPackages = () => {
  const handleBooking = (packageName) => {
    const message = `Hi! I'm interested in booking the ${packageName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919829692122?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1">
            Popular Tours
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated tour packages designed to give you the best experience of Rajasthan's rich heritage and culture.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white px-3 py-1">
                  {pkg.route}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-amber-200">
                    <Clock size={16} />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Itinerary */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={18} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Route</p>
                      <p className="text-sm text-gray-600">{pkg.itinerary}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Package Highlights</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="text-xs border-amber-300 text-amber-700 bg-amber-50"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Starting from</p>
                    <div className="flex items-center gap-1">
                      <BadgeIndianRupee size={20} className="text-green-600" />
                      <span className="text-2xl font-bold text-gray-900">{pkg.price.replace('₹', '')}</span>
                      <span className="text-sm text-gray-500">per person</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleBooking(pkg.name)}
                    className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-6"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We specialize in creating personalized itineraries tailored to your preferences, budget, and travel dates. Let us design your perfect Rajasthan experience.
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-6 text-lg"
          >
            Contact Us for Custom Tour
          </Button>
        </div>
      </div>
    </section>
  );
};
