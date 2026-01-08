import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Workflow, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LabCard = ({ icon: Icon, tag, title, description, linkText, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="group relative bg-[#0D0D0F] border border-white/5 rounded-2xl p-8 hover:border-accent-purple/30 transition-all duration-500"
        >
            {/* Icon Box */}
            <div className="mb-10 w-24 h-24 bg-white/5 border border-white/10 rounded-lg flex flex-col p-3 relative overflow-hidden group-hover:border-accent-purple/20">
                <span className="text-[10px] font-mono text-gray-500 mb-2">{tag}</span>
                <div className="flex-1 flex items-center justify-center">
                    <Icon className="text-gray-400 group-hover:text-accent-purple transition-colors duration-500" size={32} />
                </div>
                {/* Subtle dot in corners to match image detail */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-600 rounded-full opacity-40"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors duration-500">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                {description}
            </p>

            <button className="flex items-center gap-2 text-white font-bold text-sm tracking-widest group/btn hover:text-accent-purple transition-colors duration-300">
                <span className="uppercase">{linkText}</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const TheLab = () => {
    const { t } = useLanguage();

    const cards = [
        {
            icon: Feather,
            tag: "LAB_01",
            title: t.theLab.cards.manifesto.title,
            description: t.theLab.cards.manifesto.desc,
            linkText: t.theLab.cards.manifesto.link
        },
        {
            icon: Workflow,
            tag: "LAB_02",
            title: t.theLab.cards.methodology.title,
            description: t.theLab.cards.methodology.desc,
            linkText: t.theLab.cards.methodology.link
        },
        {
            icon: Users,
            tag: "LAB_03",
            title: t.theLab.cards.careers.title,
            description: t.theLab.cards.careers.desc,
            linkText: t.theLab.cards.careers.link
        }
    ];

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Subtle Background Grain/Noise or Gradient to match image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header - Centered as requested */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8"
                    >
                        {t.theLab.tag}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold text-white max-w-4xl"
                    >
                        {t.theLab.titlePrefix} <span className="italic text-accent-purple">{t.theLab.titleHighlight}</span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <LabCard key={index} {...card} delay={index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheLab;
