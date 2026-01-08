import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionAnimator from '@/components/SectionAnimator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Layers, Share2, Globe, Box, Database, CheckCircle, Shield, Cpu, Zap, Lock } from 'lucide-react';

const Expertise = () => {
    const { t } = useLanguage();

    const areaIcons = [
        <Code size={40} className="text-blue-400" />,
        <Layers size={40} className="text-purple-400" />,
        <Share2 size={40} className="text-emerald-400" />,
        <Globe size={40} className="text-cyan-400" />,
        <Box size={40} className="text-orange-400" />,
        <Database size={40} className="text-rose-400" />
    ];

    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent-purple/30 selection:text-white pb-20">
            <Helmet>
                <title>{t.expertisePage.meta.title}</title>
                <meta name="description" content={t.expertisePage.meta.description} />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-3 py-1 mb-8 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400 text-[10px] font-mono tracking-widest uppercase"
                        >
                            // {t.expertisePage.hero.subtitle}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                        >
                            {t.expertisePage.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                        >
                            {t.expertisePage.hero.intro}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Areas Section */}
            <SectionAnimator>
                <section className="py-20 bg-[#050505]">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{t.expertisePage.coreAreas.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.expertisePage.coreAreas.items.map((item, index) => (
                                <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                                    <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-105 transition-transform">
                                        {areaIcons[index]}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Approach Section */}
            <SectionAnimator>
                <section className="py-20 bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="container px-4 md:px-6 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{t.expertisePage.approach.title}</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {t.expertisePage.approach.items.map((item, index) => (
                                <div key={index} className="bg-[#0C0D0D] border border-white/10 rounded-full px-8 py-4 flex items-center gap-3 hover:border-purple-500/50 transition-colors">
                                    <CheckCircle size={20} className="text-blue-500" />
                                    <div>
                                        <span className="block text-white font-bold text-sm tracking-wide">{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center max-w-3xl mx-auto">
                            <p className="text-gray-400 italic">
                                "{t.expertisePage.approach.items.map(item => item.desc).join(' ')}"
                            </p>
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Why It Matters */}
            <SectionAnimator>
                <section className="py-24">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-12 md:p-20 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">{t.expertisePage.whyMatters.title}</h2>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-0 relative z-10">
                                {t.expertisePage.whyMatters.desc}
                            </p>
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Final Statement */}
            <SectionAnimator>
                <section className="py-20 bg-black">
                    <div className="container px-4 md:px-6 text-center">
                        <blockquote className="text-2xl md:text-3xl font-serif text-white/90 max-w-5xl mx-auto leading-normal">
                            "{t.expertisePage.final.text}"
                        </blockquote>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-12 rounded-full"></div>
                    </div>
                </section>
            </SectionAnimator>
        </div>
    );
};

export default Expertise;
