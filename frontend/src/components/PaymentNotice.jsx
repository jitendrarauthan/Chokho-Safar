import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { AlertCircle, CreditCard } from 'lucide-react';

export const PaymentNotice = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-4 border-amber-300 bg-white shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-red-600 text-white text-sm px-4 py-1.5 hover:bg-red-700">
                    IMPORTANT NOTICE
                  </Badge>
                  <CreditCard className="text-amber-600" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Payment Policy / भुगतान नीति
                </h3>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-300">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 text-center leading-relaxed">
                    📍 LOCAL के लिए ₹500 या OUTSTATION के लिए 20% ADVANCE होगा
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-gray-700 text-center mt-3 leading-relaxed">
                    ₹500 advance for Local | 20% advance for Outstation
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Google Pay</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">PhonePe</span>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Paytm</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
