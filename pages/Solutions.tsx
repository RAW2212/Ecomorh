import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Wind, CheckCircle2, Recycle, ShieldCheck, Scale, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';

const Solutions: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 min-h-screen bg-stone-50">
        
        {/* Header */}
        <div className="container mx-auto px-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tighter mb-8 leading-[0.9]">
              Future-Proof <br/>
              <span className="text-emerald-800/50 italic font-normal">Strategies</span>
            </h1>
            <p className="text-stone-500 text-xl leading-relaxed max-w-2xl">
              We deliver comprehensive solutions in CSR, ESG, waste management, waste-to-energy, and circular economy development to build resilient industries.
            </p>
          </motion.div>
        </div>

        {/* Section 1: Circular Economy & Waste Management */}
        <section className="mb-24">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-emerald-900 mb-8 inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-emerald-900/5">
                  <Recycle className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-semibold text-emerald-950 mb-6 tracking-tight">Circular Economy & Waste Management</h2>
                <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                    Transforming the linear "take-make-waste" model into a closed-loop system. We optimize waste streams to recover value and minimize environmental impact.
                </p>
                <div className="space-y-4 mb-10">
                    {['Zero-waste-to-landfill strategies', 'Industrial symbiosis planning', 'Advanced material recovery analysis'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-stone-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
                            <span className="text-[15px] font-medium tracking-tight">{item}</span>
                        </div>
                    ))}
                </div>
                <Button variant="outline">Explore Circularity</Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative p-4 bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-200/30"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-video">
                    <img 
                        src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop" 
                        alt="Circular Economy" 
                        className="w-full h-full object-cover opacity-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                            <div className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">Efficiency</div>
                            <div className="text-2xl font-semibold">Resource Recovery</div>
                        </div>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Waste to Energy */}
        <section className="py-24 bg-white border-y border-stone-200/50">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
               <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative p-4 bg-stone-50 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-200/50 order-2 md:order-1"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-video">
                    <img 
                        src="https://images.unsplash.com/photo-1569002202678-757827e852d7?q=80&w=2670&auto=format&fit=crop" 
                        alt="WtE Plant" 
                        className="w-full h-full object-cover opacity-90" 
                    />
                     <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white">
                             <div className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">Technology</div>
                            <div className="text-2xl font-semibold">Waste-to-Energy</div>
                        </div>
                    </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <div className="text-emerald-900 mb-8 inline-flex items-center justify-center p-4 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100">
                  <Flame className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-semibold text-emerald-950 mb-6 tracking-tight">Waste-to-Energy (WtE)</h2>
                <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                    Advanced thermal treatment technologies that convert non-recyclable residual waste into clean electricity, heat, or advanced biofuels like Bio-CNG.
                </p>
                <div className="space-y-4 mb-10">
                    {['High-efficiency incineration', 'Carbon capture integration', 'Bio-CNG & Hydrogen production'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-stone-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
                            <span className="text-[15px] font-medium tracking-tight">{item}</span>
                        </div>
                    ))}
                </div>
                <Button variant="outline">View Technology</Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: CSR & ESG */}
        <section className="py-24">
           <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-emerald-900 mb-8 inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-emerald-900/5">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-semibold text-emerald-950 mb-6 tracking-tight">CSR & ESG Consulting</h2>
                <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                    We help organizations navigate the complex landscape of Corporate Social Responsibility (CSR) and Environmental, Social, and Governance (ESG) criteria.
                </p>
                <div className="space-y-4 mb-10">
                    {['Sustainability reporting (GRI, SASB)', 'Social impact assessment', 'Corporate governance frameworks'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-stone-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
                            <span className="text-[15px] font-medium tracking-tight">{item}</span>
                        </div>
                    ))}
                </div>
                <Button variant="outline">View Services</Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="grid gap-6"
              >
                  {/* Interactive Cards for ESG */}
                  <div className="p-8 bg-white rounded-[2rem] border border-stone-200 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                          <Globe className="text-emerald-800" size={32} />
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">Environmental</span>
                      </div>
                      <h3 className="text-xl font-semibold text-emerald-950 mb-2">Climate Action</h3>
                      <p className="text-stone-500 text-sm">Decarbonization pathways and biodiversity protection strategies.</p>
                  </div>

                  <div className="p-8 bg-emerald-900 rounded-[2rem] shadow-lg text-white">
                      <div className="flex items-start justify-between mb-4">
                          <Scale className="text-emerald-200" size={32} />
                          <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider">Governance</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Ethical Leadership</h3>
                      <p className="text-emerald-100/60 text-sm">Transparency, accountability, and fair business practices.</p>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Solutions;