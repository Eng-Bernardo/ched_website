import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact');
  };

  const mainText = t.hero.mainText;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <AnimatedHeroBackground />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content (Center Aligned) */}
          <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
            {/* Animated Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-cyan-400 text-[11px] font-mono tracking-widest uppercase">
                {t.hero.tag}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #38bdf8 100%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {mainText}
              </motion.span>
              <motion.span
                className="inline-block text-cyan-400"
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-10"
            >
              {t.hero.subText}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleCTAClick}
                className="group relative px-8 py-4 bg-white text-[#0a1628] font-bold tracking-widest text-sm uppercase overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t.hero.cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Empty (Shows Background Image) */}
          <div className="hidden lg:block">
            {/* Empty to allow background image to show through */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;