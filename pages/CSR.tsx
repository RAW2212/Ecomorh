import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users2, Sprout } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const CSR: React.FC = () => {
  const milestones = [
    { year: '2019', title: 'The Start', description: 'Defined our core sustainability rules.' },
    { year: '2021', title: 'Recycling Hubs', description: 'Established the first cooperative energy networks in Scandinavia.' },
    { year: '2023', title: 'Transparency', description: 'Made all our emissions data public via real-time feeds.' },
    { year: '2025', title: 'Net Positive', description: 'Giving back more resources than we use on all projects.' },
  ];

  return (
    <PageTransition>
      <div className="pt-40 pb-32 min-h-screen bg-stone-50">
        
        {/* Header */}
        <div className="container mx-auto px-8 mb-32 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tighter mb-8"
          >
            Responsible <span className="text-emerald-800/50 italic font-normal">Business</span>
          </motion.h1>
          <p className="text-stone-500 text-xl leading-relaxed">
            We believe that business and nature go hand in hand. Our social framework ensures no community is left behind.
          </p>
        </div>

        {/* Pillars Grid - Refined Modernism */}
        <div className="container mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'Accurate reporting.' },
              { icon: Users2, title: 'Fairness', desc: 'Fair wages for all staff.' },
              { icon: Heart, title: 'Well-being', desc: 'Focus on clean air in cities.' },
              { icon: Sprout, title: 'Restoration', desc: 'Converting landfills to forests.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-emerald-950 font-semibold text-xl mb-3 tracking-tight">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Softened Design */}
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-semibold text-emerald-950 mb-20 text-center tracking-tighter">Our History</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line - Soft Beige */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 md:-translate-x-1/2 ml-4 md:ml-0" />

            <div className="space-y-24">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex items-center gap-12 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Marker */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 flex items-center justify-center bg-white border border-stone-200 rounded-full z-10 md:-translate-x-1/2 ml-[2px] md:ml-0 shadow-sm">
                    <div className="w-2 h-2 bg-emerald-800 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${
                    idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'
                  }`}>
                    <div className="text-emerald-800 font-bold text-lg mb-2 tracking-widest">{milestone.year}</div>
                    <h3 className="text-emerald-950 text-2xl font-semibold mb-3 tracking-tight">{milestone.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default CSR;