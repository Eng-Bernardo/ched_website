import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionAnimator from '@/components/SectionAnimator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight, Zap, Combine, Box, Network } from 'lucide-react';

const Ventures = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent-purple/30 selection:text-white pb-20">
            <Helmet>
                <title>{t.venturesPage.meta.title}</title>
                <meta name="description" content={t.venturesPage.meta.description} />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-3 py-1 mb-8 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase"
                        >
                            // {t.venturesPage.hero.subtitle}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                        >
                            {t.venturesPage.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                        >
                            {t.venturesPage.hero.intro}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <SectionAnimator>
                <section className="py-20 bg-[#050505]">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.venturesPage.philosophy.title}</h2>
                            <p className="text-gray-400 leading-relaxed">{t.venturesPage.philosophy.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.venturesPage.philosophy.cards.map((card, index) => (
                                <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 group">
                                    <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors">
                                        {[<Zap key={0} />, <Combine key={1} />, <Box key={2} />, <Network key={3} />][index]}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-400 text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Process Section */}
            <SectionAnimator>
                <section className="py-20 relative">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{t.venturesPage.process.title}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.venturesPage.process.steps.map((step, index) => (
                                <div key={index} className="relative pl-8 border-l border-white/10 md:border-none md:pl-0">
                                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold mb-6 mx-auto">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 md:text-center">{step.title}</h3>
                                    <p className="text-gray-400 text-sm md:text-center">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Collaboration Models */}
            <SectionAnimator>
                <section className="py-20 bg-white/5">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{t.venturesPage.collaboration.title}</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Partners */}
                            <div className="bg-[#080808] p-8 rounded-3xl border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                                    CHED LABS collaborates with:
                                </h3>
                                <div className="space-y-4">
                                    {t.venturesPage.collaboration.partnersChecklist.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="p-1 bg-green-500/10 rounded-full mt-1">
                                                <Check size={16} className="text-green-500" />
                                            </div>
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Offers */}
                            <div className="bg-[#080808] p-8 rounded-3xl border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                                    We offer:
                                </h3>
                                <div className="space-y-4">
                                    {t.venturesPage.collaboration.offersChecklist.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="p-1 bg-purple-500/10 rounded-full mt-1">
                                                <Check size={16} className="text-purple-500" />
                                            </div>
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Featured Ventures */}
            <SectionAnimator>
                <section className="py-20">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{t.venturesPage.featured.title}</h2>

                        <div className="space-y-8">
                            {t.venturesPage.featured.ventures.map((venture, index) => (
                                <div key={index} className="group relative bg-[#080808] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-4">
                                        <span className={`px-4 py-1 rounded-full text-xs font-bold tracking-widest ${venture.status === 'LIVE' || venture.status === 'NO AR' || venture.status === 'EN VIVO' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-gray-400'}`}>
                                            {venture.status}
                                        </span>
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-bold text-white mb-4">{venture.name}</h3>
                                        <p className="text-gray-400 text-lg max-w-2xl mb-8">{venture.desc}</p>
                                        <button className="flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all">
                                            {t.hero.cta} <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionAnimator>

            {/* Why Us & CTA */}
            <section className="py-20 bg-gradient-to-b from-[#080808] to-blue-900/10">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{t.venturesPage.whyUs.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {t.venturesPage.whyUs.points.map((point, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <p className="text-white font-medium">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{t.venturesPage.cta.title}</h2>
                            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
                                {t.venturesPage.cta.description}
                            </p>
                            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                {t.venturesPage.cta.btn}
                            </button>
                            <p className="mt-8 text-blue-200 text-sm font-mono tracking-widest uppercase opacity-70">
                                {t.venturesPage.cta.tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ventures;
