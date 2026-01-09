import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Portfolio from '@/components/Portfolio';
import FutureCTA from '@/components/FutureCTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CHED LABS - From Idea to System</title>
        <meta name="description" content="Complex systems designed and built for performance." />
      </Helmet>

      <Hero />

      <SectionAnimator>
        <ServicesSection />
      </SectionAnimator>

      <SectionAnimator>
        <Portfolio />
      </SectionAnimator>

      <SectionAnimator>
        <FutureCTA />
      </SectionAnimator>
    </>
  );
};

export default Home;