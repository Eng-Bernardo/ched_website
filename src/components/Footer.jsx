import React from 'react';
import { Github, Twitter, Linkedin, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        // Basic navigation handling logic
        console.log(`Navigating to ${href}`);
    };

    const footerSections = [
        {
            title: t.footer.cols.lab,
            links: [
                { name: t.footer.links.manifesto, href: '#' },
                { name: t.footer.links.methodology, href: '#' },
                { name: t.footer.links.careers, href: '#' },
            ],
        },
        {
            title: t.footer.cols.ecosystem,
            links: [
                { name: t.footer.links.abaco, href: '#' },
                { name: t.footer.links.ventures, href: '#' },
                { name: t.footer.links.openSource, href: '#' },
            ],
        },
        {
            title: t.footer.cols.connect,
            links: [
                { name: t.footer.links.contact, href: '/contact' },
                { name: t.footer.links.partnerships, href: '#' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Github size={18} />, name: 'Github' },
        { icon: <Twitter size={18} />, name: 'Twitter' },
        { icon: <Linkedin size={18} />, name: 'Linkedin' },
    ];

    return (
        <footer className="bg-[#050505] border-t border-white/5 py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                    {/* Logo & Description Section - Spans 3 cols */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 border border-blue-500/30 bg-blue-500/10 flex items-center justify-center rounded">
                                <Code className="text-blue-400" size={20} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">CHED LABS</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                            {t.footer.tagline}
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <button
                                    key={social.name}
                                    className="w-10 h-10 rounded-full bg-[#1A1A1D] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="lg:col-span-1">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;