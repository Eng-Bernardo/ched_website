import React from 'react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    // Handle decimal values for stats like ratings
    const isDecimal = to % 1 !== 0;
    const increment = isDecimal ? to / steps : Math.ceil(to / steps);

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.ceil(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Stats = ({ customStats }) => {
  const { t } = useLanguage();

  const defaultStats = [
    {
      value: 50,
      suffix: '+',
      label: t.stats.systems.label,
      description: t.stats.systems.desc,
    },
    {
      value: 99.9,
      suffix: '%',
      label: t.stats.uptime.label,
      description: t.stats.uptime.desc,
    },
    {
      value: 12,
      suffix: '',
      label: t.stats.ventures.label,
      description: t.stats.ventures.desc,
    },
    {
      value: 10,
      suffix: 'M+',
      label: t.stats.users.label,
      description: t.stats.users.desc,
    },
  ];

  const stats = customStats || defaultStats;

  return (
    <section id="stats-section" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-8 border-l border-white/10 hover:border-blue-500 transition-all duration-500 bg-transparent h-full flex flex-col justify-start"
            >
              <div className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <h3 className="text-sm font-black text-blue-500 mb-4 tracking-[0.2em] uppercase">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;