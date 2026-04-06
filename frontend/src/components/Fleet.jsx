import React from 'react';
import { vehicles } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Users, Phone } from 'lucide-react';

export const Fleet = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919829692253';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1">
            Our Fleet
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comfortable Vehicles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Travel in comfort and style with our well-maintained fleet of vehicles. All cars are equipped with modern amenities and driven by experienced professionals.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white">
                  {vehicle.type}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm font-medium">{vehicle.capacity} Seater</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-600">{vehicle.pricePerKm}</p>
                    <p className="text-xs text-gray-500">per km</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white"
                >
                  <Phone size={16} className="mr-2" />
                  Call to Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                All Vehicles Include
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Experienced & Licensed Drivers</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Well-Maintained & Clean Vehicles</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Air Conditioning & Music System</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>On-Time Pickup & Drop Services</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Transparent Pricing - No Hidden Charges</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-600 mb-6">
                Need help choosing the right vehicle for your journey? Our team is here to assist you!
              </p>
              <Button 
                size="lg"
                onClick={handleCall}
                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-6 text-lg"
              >
                <Phone size={20} className="mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
