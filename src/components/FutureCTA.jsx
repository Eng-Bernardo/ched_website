import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FutureCTA = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Image / Ambient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10"></div>
                <div className="absolute inset-0 bg-[#050505]/70 z-10"></div>
                {/* Placeholder for the user's generated image - assuming it is placed in assets */}
                <img
                    src="/assets/team-coding.png"
                    alt="Team coding"
                    className="w-full h-full object-cover opacity-60 grayscale-[20%]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="mb-8">
                        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase">
                            {t.futureCTA.tag}
                        </div>
                    </div>

                    {/* Main Title - Mimicking the reference style */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-[90px] font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase"
                    >
                        {t.futureCTA.titlePrefix} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{t.futureCTA.titleHighlight}</span> <br className="hidden md:block" />
                        <span className="text-transparent hover:text-blue-500 transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px #3b82f6' }}>{t.futureCTA.titleSuffix}</span>
                    </motion.h2>

                    {/* Central Visual - The Image Cutout effect (simulated with masking/borders for now as we have a full rect image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12 group"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img
                            src="/assets/team-coding.png"
                            alt="Engineers working"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* "Made with love" style badge in the image area */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0C0D0D]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 z-20">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-white tracking-widest uppercase">Ched Labs Systems</span>
                        </div>
                    </motion.div>

                    {/* Description and CTA */}
                    <div className="max-w-2xl mx-auto flex flex-col items-center">
                        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
                            {t.futureCTA.description}
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                {t.futureCTA.btnPrimary}
                                <ArrowRight size={16} />
                            </button>

                            <button className="px-10 py-5 bg-transparent border-b border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:border-white transition-all duration-300">
                                {t.futureCTA.btnSecondary}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureCTA;
