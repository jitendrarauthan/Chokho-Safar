import React from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { QrCode, Phone, MessageCircle, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  // QR Code URLs for WhatsApp and Phone
  const whatsappQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://wa.me/919829692253?text=Hi! I'm interested in booking a tour with Chokho Safar Travels.`)}`;
  const phoneQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`tel:+919829692253`)}`;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - QR Codes */}
          <div>
            <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
              Quick Connect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scan & Connect
            </h2>
            <p className="text-gray-600 mb-8">
              Scan the QR codes below to instantly connect with us via WhatsApp or make a call.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* WhatsApp QR */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">WhatsApp</h3>
                  <div className="bg-white p-3 rounded-lg inline-block">
                    <img 
                      src={whatsappQR} 
                      alt="WhatsApp QR Code" 
                      className="w-40 h-40"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Scan to chat on WhatsApp</p>
                </CardContent>
              </Card>

              {/* Call QR */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-amber-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Call Us</h3>
                  <div className="bg-white p-3 rounded-lg inline-block">
                    <img 
                      src={phoneQR} 
                      alt="Phone QR Code" 
                      className="w-40 h-40"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Scan to make a call</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right - Google Map */}
          <div>
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1">
              Visit Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <p className="text-gray-600 mb-6">
              Find us at our office in Jaipur. We're here to help plan your perfect Rajasthan journey.
            </p>

            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                {/* Google Map Embed */}
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0979076442234!2d75.78874631504427!3d26.912434883139784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db42e7e5f10f7%3A0x8c1c8e9f8d8f8e9f!2sRaja%20Park%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chokho Safar Travels Location"
                  ></iframe>
                </div>
                
                {/* Address Info */}
                <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-700">{companyInfo.address}</p>
                      <a 
                        href="https://maps.google.com/?q=135+Rajapark+Tilak+Nagar+Jaipur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
