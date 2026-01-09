import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [{
  id: 1,
  slug: 'abaco',
  title: 'Abaco Finance',
  description: 'Enterprise-grade financial dashboard processing millions in transactions.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop' // Financial dashboard look
}, {
  id: 2,
  slug: 'logistics-control',
  title: 'Logistics Command',
  description: 'Real-time fleet tracking and supply chain management system.',
  image: '/images/logistics-command.png' // Local uploaded image
}, {
  id: 3,
  slug: 'enterprise-analytics',
  title: 'Enterprise Analytics',
  description: 'AI-driven data analysis and visualization suite for big data.',
  image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop' // Tech/Data look
}];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = slug => {
    // For now, since we removed project pages, maybe just scroll or do nothing?
    // Or we keep the Abaco page if it exists.
    // The user said "Abaco Finance must be only in the gallery".
    if (slug === 'abaco') {
      // We could link to a detailed view if we kept it.
      // For simplicity as requested "Max 4 sections", maybe just a modal or static.
      // But the previous code linked to /project/:slug.
      // I will keep the navigation but ensure the route exists or just link to home for now if pages were deleted.
      // Wait, I didn't delete Project.jsx, so it should work.
      navigate(`/project/${slug}`);
    }
  };

  return (
    <section id="work" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase tracking-wider text-gray-300">
              Selected Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight uppercase">
              Systems by <span className="text-accent-purple">Shadow Lab.</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400 leading-relaxed">
              We don't just design websites. We engineer complex, high-performance systems and dashboards that power businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project.slug)}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                alt={project.title}
                src={project.image}
              />
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full group-hover:bg-accent-purple transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;