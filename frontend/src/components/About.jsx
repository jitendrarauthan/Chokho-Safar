import React from 'react';
import { companyInfo } from '../data/mock';
import { Badge } from './ui/badge';
import { Award, Users, Shield, ThumbsUp } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Company Info */}
          <div>
            <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
              Welcome to
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {companyInfo.name}
            </h2>
            <div className="mb-6">
              <p className="text-xl text-amber-600 font-semibold mb-2">
                {companyInfo.tagline}
              </p>
              <p className="text-lg text-gray-600">
                Serving since <span className="font-bold text-amber-600">{companyInfo.established}</span>
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We introduce ourselves as a premier provider of exclusive and quality tour and travel services in and around Rajasthan. With over a decade of experience, we have earned the trust of thousands of travelers seeking authentic Rajasthan experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are fully devoted to our business and have achieved outstanding positive responses from tourists, travel agencies, and corporate clients. Our commitment to excellence has made us one of the most trusted names in Rajasthan tourism.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From comfortable transportation to customized tour packages, we ensure every journey with us becomes a cherished memory. Our experienced drivers and well-maintained vehicles guarantee a safe and pleasant travel experience.
              </p>
            </div>
          </div>

          {/* Right - Why Choose Us Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
              <p className="text-gray-600 font-medium">Happy Tourists</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Safe & Secure</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
