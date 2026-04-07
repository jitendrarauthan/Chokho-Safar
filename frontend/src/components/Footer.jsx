import React from 'react';
import { companyInfo } from '../data/mock';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Google Map Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Our Location</h3>
            <p className="text-gray-300">Find us at our office in Jaipur</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Map */}
            <div className="md:col-span-2">
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
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
            </div>

            {/* Location Info */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl p-8 flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">Office Address</h4>
                  <p className="text-white/90 text-lg leading-relaxed">{companyInfo.address}</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=135+Rajapark+Tilak+Nagar+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              {companyInfo.name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Established in {companyInfo.established}, we've been creating unforgettable travel experiences across Rajasthan and beyond.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('destinations')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Popular Destinations</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Jaipur - The Pink City</li>
              <li className="text-gray-400">Udaipur - City of Lakes</li>
              <li className="text-gray-400">Jaisalmer - Golden City</li>
              <li className="text-gray-400">Jodhpur - Blue City</li>
              <li className="text-gray-400">Delhi & Agra</li>
              <li className="text-gray-400">Ranthambore Safari</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href={`tel:${companyInfo.phone[0]}`} className="hover:text-amber-400 transition-colors block">
                    {companyInfo.phone[0]}
                  </a>
                  <a href={`tel:${companyInfo.phone[1]}`} className="hover:text-amber-400 transition-colors block">
                    {companyInfo.phone[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
