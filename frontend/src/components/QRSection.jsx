import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MessageCircle, Phone } from 'lucide-react';

export const QRSection = () => {
  // QR Code URLs for WhatsApp and Phone
  const whatsappQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://wa.me/919829692253?text=Hi! I'm interested in booking a tour with Chokho Safar Travels.`)}`;
  const phoneQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`tel:+919829692253`)}`;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
            Quick Connect
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scan & Connect Instantly
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scan the QR codes below to instantly connect with us via WhatsApp or make a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* WhatsApp QR */}
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
              <div className="bg-white p-4 rounded-xl inline-block shadow-inner">
                <img 
                  src={whatsappQR} 
                  alt="WhatsApp QR Code" 
                  className="w-48 h-48"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 font-medium">Scan to chat on WhatsApp</p>
              <p className="text-xs text-gray-500 mt-2">Quick responses guaranteed</p>
            </CardContent>
          </Card>

          {/* Call QR */}
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-amber-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <div className="bg-white p-4 rounded-xl inline-block shadow-inner">
                <img 
                  src={phoneQR} 
                  alt="Phone QR Code" 
                  className="w-48 h-48"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 font-medium">Scan to make a call</p>
              <p className="text-xs text-gray-500 mt-2">Talk to our travel experts</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
