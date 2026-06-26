import React, { useState } from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    // Google Ads Conversion Tracker for WhatsApp
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18193428068/zMyvCO6i48EcEOTcpuND'
      });
    }

    const message = `Hi! I read the FAQs and have a few more questions about booking a tour.`;
    const whatsappUrl = `https://wa.me/918114467319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqList = [
    {
      question: "How do I book a tour package with Chokho Safar?",
      answer: "Booking is very simple! You can click the green WhatsApp button on our website to chat with a travel expert instantly, call us directly, or fill out the inquiry form on our Contact page."
    },
    {
      question: "Are your Rajasthan tour packages customized?",
      answer: "Yes, 100%! We specialize in tailor-made itineraries. Whether you want to add an extra night in Udaipur, upgrade your hotel category, or include a desert safari in Jaisalmer, we build the trip around you."
    },
    {
      question: "What type of vehicles do you provide for sightseeing?",
      answer: "We provide clean, private AC Sedans (like Dzire/Etios) for couples, and spacious private SUVs (like Innova Crysta) or Tempo Travellers for families and larger groups."
    },
    {
      question: "Are hotel accommodations included in the package cost?",
      answer: "Yes, our standard packages include handpicked 3-star, 4-star, or heritage hotel stays with daily breakfast. If you prefer to book your own hotels, we also offer 'transport-only' packages."
    },
    {
      question: "Is 24/7 support available while I am on my trip?",
      answer: "Absolutely. From the moment your trip begins until you head home, our dedicated on-ground team is available 24/7 via phone and WhatsApp for any assistance you need."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
            Got Questions?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about planning your journey with Chokho Safar Travels.
          </p>
        </div>

        {/* FAQ Interactive Accordion */}
        <div className="space-y-4 mb-16">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card 
                key={index} 
                className={`border transition-all duration-200 cursor-pointer ${isOpen ? 'border-amber-500 shadow-md bg-amber-50/30' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                      <HelpCircle className="text-amber-600 flex-shrink-0" size={20} />
                      {faq.question}
                    </h3>
                    <div className="text-gray-500">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {isOpen && (
                    <p className="mt-4 text-gray-600 pl-8 leading-relaxed border-t pt-4 border-gray-100">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* High-Converting Bottom Banner */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-6 text-amber-100">Can't find the answer you're looking for? Talk to our friendly local team.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-6 px-8 text-md shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </Button>

            <a 
              href={`tel:${companyInfo?.phone ? companyInfo.phone[0] : '+918114467319'}`}
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-18193428068/zMyvCO6i48EcEOTcpuND'
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors bg-white text-gray-900 hover:bg-gray-100 h-10 py-6 px-8 shadow-lg"
            >
              <Phone size={18} className="mr-2 text-amber-600" />
              Call {companyInfo?.phone ? companyInfo.phone[0] : '+91 81144 67319'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};