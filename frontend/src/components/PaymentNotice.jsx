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
                <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
                  <p className="text-sm font-semibold text-gray-700 w-full text-center mb-2">
                    Pay using any of these apps:
                  </p>
                  
                  {/* Google Pay */}
                  <a
                    href="upi://pay?pa=7734915253@paytm&pn=Chokho%20Safar%20Travels&cu=INR"
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" fill="#4285f4"/>
                        <path d="M33.5 28.5l-3-3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.3 1.3H21c-.6 0-1 .4-1 1s.4 1 1 1h9.4l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z" fill="white"/>
                        <path d="M14.5 19.5l3 3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L17.6 20H27c.6 0 1-.4 1-1s-.4-1-1-1h-9.4l1.3-1.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4z" fill="white"/>
                      </svg>
                      <span className="text-sm font-bold text-blue-700">Google Pay</span>
                    </div>
                  </a>

                  {/* PhonePe */}
                  <a
                    href="upi://pay?pa=7734915253@paytm&pn=Chokho%20Safar%20Travels&cu=INR"
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" fill="#5f259f"/>
                        <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="white"/>
                        <path d="M24 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="white"/>
                      </svg>
                      <span className="text-sm font-bold text-purple-700">PhonePe</span>
                    </div>
                  </a>

                  {/* Paytm */}
                  <a
                    href="upi://pay?pa=7734915253@paytm&pn=Chokho%20Safar%20Travels&cu=INR"
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" fill="#00BAF2"/>
                        <path d="M28 18h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-4 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="white"/>
                        <circle cx="24" cy="25" r="2" fill="#00BAF2"/>
                      </svg>
                      <span className="text-sm font-bold text-cyan-700">Paytm</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
