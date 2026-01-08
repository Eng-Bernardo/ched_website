import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, Target, Users, Globe } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
    const { t } = useLanguage();

    const cardMetaData = [
        {
            icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
            colSpan: "lg:col-span-1"
        },
        {
            icon: <Compass className="w-8 h-8 text-blue-400" />,
            colSpan: "lg:col-span-1"
        },
        {
            icon: <Target className="w-8 h-8 text-purple-400" />,
            colSpan: "lg:col-span-1"
        },
        {
            icon: <Users className="w-8 h-8 text-orange-400" />,
            colSpan: "lg:col-span-3 xl:col-span-1"
        },
        {
            icon: <Globe className="w-8 h-8 text-cyan-400" />,
            colSpan: "lg:col-span-3 xl:col-span-1"
        }
    ];

    const cards = t.whyChooseUs.items.map((item, index) => ({
        ...item,
        ...cardMetaData[index]
    }));

    // Refined approach for 3-2 split using flex or grid
    // Grid with 6 columns.
    // Top 3 items: col-span-2
    // Bottom 2 items: col-span-3

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
                        {t.whyChooseUs.tag}
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        {t.whyChooseUs.titlePrefix} <span className="bg-gradient-to-r from-blue-500 to-accent-purple bg-clip-text text-transparent">{t.whyChooseUs.titleHighlight}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {/* First 3 cards - span 2 (1/3 width on large screens) */}
                    {cards.slice(0, 3).map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="lg:col-span-2 bg-[#080808] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-blue-500/10 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Last 2 cards - span 3 (1/2 width on large screens) */}
                    {cards.slice(3, 5).map((card, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                            className="lg:col-span-3 bg-[#080808] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-blue-500/10 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
