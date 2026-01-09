import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Globe, Cpu } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const ExpertiseCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative h-full"
        >
            {/* Background/Border Container */}
            <div className="h-full bg-transparent border-l-2 border-white/10 group-hover:border-accent-purple p-8 transition-all duration-300 relative overflow-hidden">
                {/* Triangle Tip (Top Right) */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}>
                </div>

                <div className="mb-6">
                    <Icon className="text-blue-400 group-hover:text-accent-purple transition-colors duration-300" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-accent-purple transition-colors duration-300">
                    {title}
                </h3>

                <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:bg-accent-purple/30 transition-colors duration-300"></div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const CoreExpertise = () => {
    const { t } = useLanguage();

    const expertise = [
        {
            icon: Layers,
            title: t.coreExpertise.cards.architecture.title,
            description: t.coreExpertise.cards.architecture.desc
        },
        {
            icon: Server,
            title: t.coreExpertise.cards.systems.title,
            description: t.coreExpertise.cards.systems.desc
        },
        {
            icon: Globe,
            title: t.coreExpertise.cards.platforms.title,
            description: t.coreExpertise.cards.platforms.desc
        },
        {
            icon: Cpu,
            title: t.coreExpertise.cards.engineering.title,
            description: t.coreExpertise.cards.engineering.desc
        }
    ];

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 max-w-3xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8"
                    >
                        {t.coreExpertise.tag}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black mb-6 text-center"
                    >
                        <span className="text-white uppercase">{t.coreExpertise.titleCore}</span>{" "}
                        <span className="text-blue-500 uppercase">
                            {t.coreExpertise.titleExpertise}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg leading-relaxed text-center"
                    >
                        {t.coreExpertise.description}
                    </motion.p>

                    <div className="w-48 h-[2px] bg-gradient-to-r from-blue-500 to-accent-purple mt-8 hidden md:block opacity-30 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {expertise.map((item, index) => (
                        <ExpertiseCard key={index} {...item} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreExpertise;
