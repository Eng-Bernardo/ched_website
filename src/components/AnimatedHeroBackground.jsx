import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-banner.png)',
        }}
      />

      {/* Gradient Overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/60" />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles overlay for depth */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1})`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedHeroBackground;