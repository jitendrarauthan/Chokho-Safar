import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { Button } from './ui/button';
import { Logo } from './Logo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href={`tel:${companyInfo.phone[0]}`} className="flex items-center gap-1 hover:text-amber-100 transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">{companyInfo.phone[0]}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1 hover:text-amber-100 transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">{companyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <MapPin size={14} />
            <span className="hidden lg:inline">{companyInfo.address}</span>
            <span className="lg:hidden">Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('destinations')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Destinations
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="flex flex-col p-4 gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('destinations')} className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Destinations
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white mt-2"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
