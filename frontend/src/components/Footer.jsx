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
                <button onClick={() => scrollToSection('packages')} className="text-gray-400 hover:text-amber-400 transition-colors">
                  Tour Packages
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
                <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {companyInfo.address}
                </span>
              </li>
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
