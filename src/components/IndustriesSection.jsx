import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    Factory,
    ShoppingCart,
    Shield,
    PieChart,
    Pill,
    Truck,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const IndustriesSection = () => {
    const { t } = useLanguage();
    const scrollRef = useRef(null);

    const industryMetaData = [
        {
            icon: <Heart className="w-32 h-32 md:w-40 md:h-40 text-emerald-400 opacity-80" />,
            gradient: 'from-emerald-900/50 to-emerald-800/20'
        },
        {
            icon: <Factory className="w-32 h-32 md:w-40 md:h-40 text-blue-400 opacity-80" />,
            gradient: 'from-blue-900/50 to-blue-800/20'
        },
        {
            icon: <ShoppingCart className="w-32 h-32 md:w-40 md:h-40 text-teal-400 opacity-80" />,
            gradient: 'from-teal-900/50 to-teal-800/20'
        },
        {
            icon: <Shield className="w-32 h-32 md:w-40 md:h-40 text-slate-400 opacity-80" />,
            gradient: 'from-slate-800/80 to-slate-700/20'
        },
        {
            icon: <PieChart className="w-32 h-32 md:w-40 md:h-40 text-indigo-400 opacity-80" />,
            gradient: 'from-indigo-900/50 to-indigo-800/20'
        },
        {
            icon: <Pill className="w-32 h-32 md:w-40 md:h-40 text-rose-400 opacity-80" />,
            gradient: 'from-rose-900/50 to-rose-800/20'
        },
        {
            icon: <Truck className="w-32 h-32 md:w-40 md:h-40 text-orange-400 opacity-80" />,
            gradient: 'from-orange-900/50 to-orange-800/20'
        }
    ];

    const industries = t.industriesSection.items.map((item, index) => ({
        ...item,
        ...industryMetaData[index]
    }));

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 320; // Approx card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="mb-16 max-w-3xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8"
                    >
                        {t.industriesSection.tag}
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        {t.industriesSection.titlePrefix} <br />
                        <span className="bg-gradient-to-r from-blue-500 to-accent-purple bg-clip-text text-transparent">
                            {t.industriesSection.titleHighlight}
                        </span>
                    </h2>

                    {/* Navigation Arrows positioned relatively or absolute depending on design preference. 
                        User requested centered titles. Usually nav arrows in carousel are on sides or bottom. 
                        I'll keep them here but maybe center them or put them below title?
                        The original code had them in a flex row with the title. 
                        Let's put them below the title for now or keep in the flex container if appropriate.
                    */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-300 group"
                        >
                            <ChevronLeft className="text-white group-hover:text-blue-500" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-300 group"
                        >
                            <ChevronRight className="text-white group-hover:text-blue-500" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] md:min-w-[320px] h-[400px] relative group perspective-1000 snap-center"
                        >
                            {/* Card Inner */}
                            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-0">

                                {/* Front Face (Dark) - Actually, we want a fade/overlay effect rather than a flip if we follow typical modern hover styles, 
                                    but the user asked for "sliding" or "hover display". 
                                    Let's implement the specific request: "when mouse is hover, will desplay something like the third attached"
                                    which implies a complete change of content.
                                    We'll use absolute positioning for the 'hover' state on top, usually hidden.
                                */}

                                {/* Default State (Visible) */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${industry.gradient} border border-white/10 p-8 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0`}>
                                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                                    <div className="self-center transform translate-y-4 group-hover:scale-110 transition-transform duration-500">
                                        {industry.icon}
                                    </div>
                                    <div /> {/* Spacer */}
                                </div>

                                {/* Hover State (Hidden -> Visible) */}
                                <div className="absolute inset-0 rounded-3xl bg-white p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                                    <h3 className="text-2xl font-bold text-black">{industry.title}</h3>

                                    <p className="text-gray-800 text-lg leading-relaxed">
                                        {industry.description}
                                    </p>

                                    <div className="w-12 h-1 bg-black/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card (Don't see yours?) */}
                    <div className="min-w-[280px] md:min-w-[320px] h-[400px] relative snap-center">
                        <div className="w-full h-full rounded-3xl bg-[#080808] border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-bold text-emerald-400 mb-6">{t.industriesSection.cta.title}</h3>
                            <p className="text-gray-400 mb-8">
                                {t.industriesSection.cta.description}
                            </p>
                            <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 flex items-center gap-2 text-sm font-semibold tracking-wide">
                                {t.industriesSection.cta.btn} <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
