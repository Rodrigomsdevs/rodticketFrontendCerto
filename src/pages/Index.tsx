import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import FeaturesPreview from '@/components/home/FeaturesPreview';
import PricingPreview from '@/components/home/PricingPreview';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import AgendamentoPreview from '@/components/home/AgendamentoPreview';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#054640] text-gray-900 dark:text-[#bbbbbb] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesPreview />
        <AgendamentoPreview />
        <PricingPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
