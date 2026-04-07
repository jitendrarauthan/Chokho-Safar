import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Destinations } from './components/Destinations';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { Gallery } from './components/Gallery';
import { QuickContact } from './components/QuickContact';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactInfo } from './components/ContactInfo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Fleet />
      <Gallery />
      <QuickContact />
      <Testimonials />
      <FAQ />
      <ContactInfo />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
