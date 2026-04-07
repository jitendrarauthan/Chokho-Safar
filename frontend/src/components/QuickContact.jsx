import React from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, Clock } from 'lucide-react';

export const QuickContact = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Have a Question */}
          <div className="text-center">
            <Phone size={40} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Have a question?</h3>
            <a 
              href={`tel:${companyInfo.phone[0]}`}
              className="text-2xl font-bold hover:text-amber-100 transition-colors"
            >
              {companyInfo.phone[0]}
            </a>
          </div>

          {/* Open Timing */}
          <div className="text-center">
            <Clock size={40} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Open Mon - Sun</h3>
            <p className="text-2xl font-bold">9:00 AM to 9:00 PM</p>
          </div>

          {/* Drop an Email */}
          <div className="text-center">
            <Mail size={40} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Drop us an email</h3>
            <a 
              href={`mailto:${companyInfo.email}`}
              className="text-2xl font-bold hover:text-amber-100 transition-colors break-all"
            >
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
