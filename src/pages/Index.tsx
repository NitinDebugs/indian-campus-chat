
import React, { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { AboutMission } from '@/components/AboutMission';
import { FeaturedColleges } from '@/components/FeaturedColleges';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Navigation />
      <Hero scrollY={scrollY} />
      <HowItWorks />
      <AboutMission />
      <FeaturedColleges />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
