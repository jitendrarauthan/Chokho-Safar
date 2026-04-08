import React, { useState } from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Inquiry Sent Successfully!",
      description: "We'll get back to you within 24 hours. Thank you for choosing Chokho Safar Travels!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in booking a tour with Chokho Safar Travels.`;
    const whatsappUrl = `https://wa.me/919829692122?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to embark on your Rajasthan adventure? Get in touch with us today and let's plan your perfect journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start Planning Your Journey
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a family vacation, honeymoon, or a solo adventure, our team is here to create the perfect itinerary for you. Contact us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                      <a href={`tel:${companyInfo.phone[0]}`} className="text-amber-600 hover:text-amber-700 font-medium block">
                        {companyInfo.phone[0]}
                      </a>
                      <a href={`tel:${companyInfo.phone[1]}`} className="text-amber-600 hover:text-amber-700 font-medium block">
                        {companyInfo.phone[1]}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                      <a href={`mailto:${companyInfo.email}`} className="text-amber-600 hover:text-amber-700 font-medium">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Visit Our Office</h4>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                      <p className="text-gray-600">Mon - Sun: 9:00 AM - 9:00 PM</p>
                      <p className="text-sm text-gray-500 mt-1">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick WhatsApp */}
            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="destination">Interested Destination</Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Golden Triangle, Rajasthan Heritage"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans, preferred dates, number of travelers, etc."
                    required
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white py-6 text-lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
