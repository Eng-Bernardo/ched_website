import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'InnovateCore', description: 'Placeholder for InnovateCore' },
  { name: 'QuantumLeap', description: 'Placeholder for QuantumLeap' },
  { name: 'AuraFlow', description: 'Placeholder for AuraFlow' },
  { name: 'NexusGen', description: 'Placeholder for NexusGen' },
  { name: 'SparkSolutions', description: 'Placeholder for SparkSolutions' },
  { name: 'VortexLabs', description: 'Placeholder for VortexLabs' },
  { name: 'EchoBridge', description: 'Placeholder for EchoBridge' },
  { name: 'ZenithWorks', description: 'Placeholder for ZenithWorks' },
];

const marqueeLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless loop

const TrustedClients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2016], // Adjust as needed based on actual width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjusted for smoother loop with text
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase tracking-widest">Trusted by 150+ Companies Worldwide</p>
        <div className="relative w-full opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <motion.div className="flex items-center gap-24" variants={marqueeVariants} animate="animate">
            {[...Array(4)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex-shrink-0 flex items-center gap-24">
                <img
                  src="/assets/logos/client-logos.png"
                  alt="Client Logos"
                  className="h-28 md:h-36 object-contain"
                  style={{
                    clipPath: 'inset(0 0 72% 0)', // Refined to show only the top row more clearly
                    transform: 'scale(1.5)' // Zoom in on the logos
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;