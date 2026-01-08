import React from 'react';
import {
    Smartphone,
    Globe,
    Bot,
    RefreshCw,
    ShoppingBag,
    Building2,
    Zap,
    ShieldCheck,
    Share2
} from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
    const { t } = useLanguage();

    const icons = [
        <Smartphone className="w-8 h-8 text-accent-purple" />,
        <Globe className="w-8 h-8 text-accent-purple" />,
        <Bot className="w-8 h-8 text-accent-purple" />,
        <RefreshCw className="w-8 h-8 text-accent-purple" />,
        <ShoppingBag className="w-8 h-8 text-accent-purple" />,
        <Building2 className="w-8 h-8 text-accent-purple" />,
        <Zap className="w-8 h-8 text-accent-purple" />,
        <ShieldCheck className="w-8 h-8 text-accent-purple" />,
        <Share2 className="w-8 h-8 text-accent-purple" />
    ];

    const services = t.servicesSection.items.map((item, index) => ({
        ...item,
        icon: icons[index]
    }));

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-accent-purple/50 transition-colors duration-300"
                        >
                            <div className="mb-6 p-3 bg-accent-purple/10 rounded-xl w-fit group-hover:bg-accent-purple/20 transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent-purple transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-sm">
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
