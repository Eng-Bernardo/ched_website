import { Facebook, Instagram, Linkedin, Twitter, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        if (href.startsWith('/')) {
            navigate(href);
            window.scrollTo(0, 0);
        }
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
    ];

    const socialLinks = [
        { icon: <Facebook size={18} />, name: 'Facebook' },
        { icon: <Instagram size={18} />, name: 'Instagram' },
        { icon: <Linkedin size={18} />, name: 'Linkedin' },
        { icon: <Twitter size={18} />, name: 'Twitter' },
    ];

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Logo & Socials (4 courses) */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 border border-blue-500/30 bg-blue-500/10 flex items-center justify-center rounded">
                                    <Code className="text-blue-400" size={20} />
                                </div>
                                <span className="text-xl font-bold text-white tracking-wide">CHED LABS</span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
                                {t.footer.tagline}
                            </p>

                            <p className="text-white font-bold italic text-lg max-w-sm mb-8">
                                "{t.footer.sloganPrefix} <span className="text-blue-500 relative inline-block">
                                    {t.footer.sloganHighlight}
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                                </span>"
                            </p>

                            <div className="flex gap-4 mb-8">
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
                    </div>

                    {/* Column 2: Addresses (3 cols) */}
                    <div className="lg:col-span-3 space-y-8">
                        {t.footer.offices && Object.values(t.footer.offices).map((office, idx) => (
                            <div key={idx}>
                                <h4 className="text-white font-bold text-sm mb-2">{office.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{office.address}</p>
                            </div>
                        ))}
                    </div>

                    {/* Column 3: Links (2 cols) */}
                    <div className="lg:col-span-2">
                        {footerSections.map((section) => (
                            <div key={section.title} className="mb-8 last:mb-0">
                                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
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

                    {/* Column 4: Contact & Brands (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col justify-start">
                        <div className="mb-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                                {t.footer.cols.connect}
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">{t.footer.contactData?.general} | {t.footer.contactData?.newBusiness}</p>
                                    <a href={`mailto:${t.footer.contactData?.email}`} className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors">
                                        {t.footer.contactData?.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm mb-4">{t.footer.brandsLabel}</p>
                            <div className="flex items-center gap-6">
                                {/* Brand Placeholders */}
                                <div className="text-white font-bold text-xl tracking-tight">
                                    Abaco<span className="text-blue-500">.Finance</span>
                                </div>
                                {/* Add more brands here if needed */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Ched Labs. All rights reserved.
                    </p>
                    <div className="text-gray-500 text-sm flex items-center gap-2">
                        {t.footer.followUs}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;