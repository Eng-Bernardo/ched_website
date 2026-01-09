import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Shield, Zap, Globe, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Layout className="w-8 h-8" />,
            title: "Digital Products",
            description: "End-to-end product design and development for web and mobile."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "System Architecture",
            description: "Scalable backend infrastructure designed for high-load applications."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Cyber Security",
            description: "Implementation of robust security protocols and compliance standards."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Deployment",
            description: "Cloud-native solutions optimized for worldwide availability."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI Integration",
            description: "Smart automation and machine learning model integration."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Performance Tuning",
            description: "Optimization of existing systems for maximum speed and efficiency."
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#0C0D0D] relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-6 inline-block">
                        {t.servicesSection.tag}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
                        {t.servicesSection.titlePrefix} <span className="text-blue-500">{t.servicesSection.titleHighlight}</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t.servicesSection.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-purple/50 hover:bg-white/[0.07] transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-accent-purple/10 rounded-xl w-fit text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
