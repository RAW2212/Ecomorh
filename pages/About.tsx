import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, ArrowUpRight, Leaf, Eye, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-50">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden">
           {/* Background Image & Overlays */}
           <div className="absolute inset-0 z-0">
             <img 
              src="https://i.postimg.cc/FR5t0Ld7/pexels-felix-mittermeier-957024.jpg" 
              alt="Starry Background" 
              className="w-full h-full object-cover blur-[1px] scale-100"
             />
             <div className="absolute inset-0 bg-stone-50/20" />
             <div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/40 to-stone-50" />
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-emerald-200/50 text-emerald-900 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Who We Are
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tighter mb-8 leading-[0.9]">
                Architects of <br/>
                <span className="text-emerald-800/50 italic font-normal">Resilience</span>
              </h1>
              <p className="text-emerald-900/80 text-xl leading-relaxed max-w-2xl">
                We are a collective of environmental engineers, data scientists, and strategists dedicated to reshaping how industry interacts with the natural world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-stone-50 border-t border-stone-200/50">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-semibold text-emerald-950 mb-8 tracking-tight">What We Do</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  Ecomorph bridges the gap between ambitious sustainability goals and actionable industrial reality. We don't just advise; we engineer systems that turn waste streams into revenue and compliance into competitive advantage.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  From auditing complex supply chains to designing closed-loop energy systems, our work is grounded in data and elevated by design.
                </p>
                <Button variant="outline">View Our Projects <ArrowUpRight size={16} className="ml-2" /></Button>
              </motion.div>

              <div className="grid gap-6">
                 {[
                    { icon: Layers, title: "Systemic Integration", desc: "We embed sustainability into the core operational DNA of your business." },
                    { icon: Leaf, title: "Resource Optimization", desc: "Maximizing yield from raw materials and minimizing environmental leakage." },
                    { icon: Lightbulb, title: "Innovation Strategy", desc: "Future-proofing business models against climate risk and regulation." }
                 ].map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex gap-6 p-6 rounded-2xl bg-white/50 border border-stone-200/60 hover:border-emerald-100 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 transition-all"
                   >
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-900">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-950 mb-2">{item.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 relative overflow-hidden bg-white border-t border-stone-100">
           {/* Background decorative blob */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />

           <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20 h-20 mx-auto bg-emerald-950 rounded-3xl flex items-center justify-center text-emerald-50 mb-10 shadow-xl shadow-emerald-900/20 rotate-3">
                  <Eye size={40} />
                </div>
                
                <h2 className="text-5xl md:text-6xl font-semibold text-emerald-950 tracking-tighter mb-10">Our Vision</h2>
                
                <p className="text-2xl md:text-3xl text-stone-600 font-light leading-relaxed mb-12">
                  "To cultivate a world where industrial progress replenishes rather than depletes. We envision an economy that functions like an ecosystem—regenerative, circular, and infinitely sustainable."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-stone-200/60">
                    <div>
                        <div className="text-4xl font-bold text-emerald-900 mb-2">2030</div>
                        <p className="text-stone-500 text-sm uppercase tracking-widest">Net Zero Operations</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-900 mb-2">100%</div>
                        <p className="text-stone-500 text-sm uppercase tracking-widest">Circular Supply Chain</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-900 mb-2">10M+</div>
                        <p className="text-stone-500 text-sm uppercase tracking-widest">Tons Carbon Offset</p>
                    </div>
                </div>
              </motion.div>
           </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;