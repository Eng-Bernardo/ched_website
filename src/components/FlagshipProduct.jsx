import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, LineChart, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FlagshipProduct = () => {
    const { t } = useLanguage();

    const features = [
        "Real-time Analytics",
        "AI-Powered Insights",
        "Enterprise Security",
        "Seamless Integration"
    ];

    return (
        <section className="py-32 bg-[#0C0D0D] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8"
                    >
                        {t.flagship.tag}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        {t.flagship.titlePrefix} <span className="text-accent-purple">{t.flagship.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl leading-relaxed mx-auto"
                    >
                        {t.flagship.description}
                    </motion.p>
                </div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image Side */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src="/assets/abaco-mockup.png"
                                alt="Abaco Finance App Mockup"
                                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                            />
                        </div>

                        {/* Right Content Side */}
                        <div className="flex flex-col">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full mb-8 self-start">
                                <Activity size={16} className="text-accent-purple" />
                                <span className="text-xs font-bold text-[#c5b8ff] uppercase tracking-wider">FINTECH PLATFORM</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Advanced Financial Analytics
                            </h3>

                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Abaco empowers investors with real-time data processing, predictive
                                modeling, and automated portfolio management. Built on a
                                microservices architecture for unmatched reliability.
                            </p>

                            <ul className="space-y-6 mb-12">
                                {[
                                    { icon: ShieldCheck, text: 'Enterprise-grade Security' },
                                    { icon: Activity, text: 'High-frequency Data Processing' },
                                    { icon: LineChart, text: 'AI-Driven Insights' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-white font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-3 text-white font-bold group hover:text-accent-purple transition-colors">
                                VIEW PRODUCT DETAILS
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-purple/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full"></div>
        </section>
    );
};

export default FlagshipProduct;
