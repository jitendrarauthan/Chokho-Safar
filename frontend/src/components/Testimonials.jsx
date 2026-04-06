import React from 'react';
import { testimonials } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy travelers have to say about their experiences with Chokho Safar Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="absolute top-4 right-4 text-amber-200 opacity-50" size={48} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <Badge variant="outline" className="text-xs text-gray-600 border-gray-300">
                    {testimonial.date}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600">Customer Rating</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-amber-600 mb-2">98%</p>
            <p className="text-sm text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-amber-600 mb-2">5000+</p>
            <p className="text-sm text-gray-600">Tours Completed</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-amber-600 mb-2">85%</p>
            <p className="text-sm text-gray-600">Repeat Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
