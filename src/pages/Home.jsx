import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import FlagshipProduct from '@/components/FlagshipProduct';
import CoreExpertise from '@/components/CoreExpertise';
import TheLab from '@/components/TheLab';
import Stats from '@/components/Stats';
import FutureCTA from '@/components/FutureCTA';
import SectionAnimator from '@/components/SectionAnimator';
import ServicesSection from '@/components/ServicesSection';

import IndustriesSection from '@/components/IndustriesSection';

import WhyChooseUs from '@/components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CHED LABS - Innovating Flagship Solutions</title>
        <meta name="description" content="CHED LABS specializes in transforming innovative concepts into robust, high-performing systems. Explore our flagship product, Abaco Finance." />
      </Helmet>
      <Hero />
      <SectionAnimator>
        <CoreExpertise />
      </SectionAnimator>
      <SectionAnimator delay={0.2}>
        <ServicesSection />
      </SectionAnimator>
      <SectionAnimator delay={0.3}>
        <IndustriesSection />
      </SectionAnimator>
      <SectionAnimator>
        <FlagshipProduct />
      </SectionAnimator>
      <SectionAnimator>
        <TheLab />
      </SectionAnimator>
      <SectionAnimator>
        <Stats />
      </SectionAnimator>
      <SectionAnimator>
        <WhyChooseUs />
      </SectionAnimator>
      <SectionAnimator>
        <FutureCTA />
      </SectionAnimator>
    </>
  );
};

export default Home;