import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Recycle, BarChart3, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent. We will get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Base label classes for floating state
  const labelClasses = "absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-800 pointer-events-none";

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image & Overlays - Kept as requested */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://i.postimg.cc/FR5t0Ld7/pexels-felix-mittermeier-957024.jpg" 
            alt="Starry Background" 
            className="w-full h-full object-cover blur-[1px] scale-100"
           />
           {/* Modernized Overlay: White fade instead of dark slate */}
           <div className="absolute inset-0 bg-stone-50/20" />
           <div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/40 to-stone-50" />
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-emerald-900/10 text-emerald-950 text-[11px] font-semibold tracking-[0.15em] mb-10 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            SUSTAINABILITY & INDUSTRY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-6xl md:text-8xl lg:text-9xl font-semibold text-emerald-950 tracking-tighter leading-[0.9] mb-12"
          >
            Nature <br />
            <span className="italic font-normal serif tracking-normal text-emerald-800/80">
              By Design.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-emerald-900/60 text-lg md:text-2xl max-w-xl mx-auto mb-12 leading-relaxed tracking-tight"
          >
            We help companies turn waste into energy and resources. Advanced recycling for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" onClick={() => navigate('/solutions')}>
              View Solutions
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="!border-emerald-900/10 hover:!bg-white"
            >
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-stone-50 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-emerald-950 tracking-tighter mb-4">Our Impact</h2>
            <p className="text-emerald-900/40 text-lg">Real-time data from our recycling networks.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Eco-Modernist Bento Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-stone-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="p-4 bg-stone-50 rounded-2xl w-fit text-emerald-900 mb-10">
                <Globe size={28} />
              </div>
              <div>
                <div className="text-6xl font-semibold text-emerald-950 mb-2 tracking-tighter">54.2k</div>
                <h3 className="text-xl font-medium text-emerald-900 mb-2">Tons Diverted</h3>
                <p className="text-stone-500 text-sm max-w-sm">Waste saved from landfills across 14 European locations.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-900 text-stone-50 rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div className="p-4 bg-emerald-800 rounded-2xl w-fit mb-10">
                <Zap size={28} />
              </div>
              <div>
                <div className="text-5xl font-semibold mb-2 tracking-tighter">98%</div>
                <h3 className="text-lg font-medium text-emerald-100 mb-1">Grid Efficiency</h3>
                <p className="text-emerald-100/40 text-xs">Advanced heat recovery systems.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-stone-200/30 rounded-[2rem] p-10 border border-stone-200/50 flex flex-col justify-between group"
            >
              <div className="p-4 bg-white rounded-2xl w-fit text-emerald-900 mb-10 group-hover:bg-emerald-950 group-hover:text-white transition-colors duration-500">
                <Recycle size={28} />
              </div>
              <div>
                <div className="text-4xl font-semibold text-emerald-950 mb-2 tracking-tighter">Circular</div>
                <p className="text-stone-500 text-sm">Full lifecycle tracking.</p>
              </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-stone-200/50 flex items-center justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
                <div className="max-w-xs">
                    <h3 className="text-2xl font-semibold text-emerald-950 mb-2 tracking-tighter">Smart Audits</h3>
                    <p className="text-stone-500 text-sm">Automated reporting that identifies waste in real-time.</p>
                </div>
                <div className="p-6 bg-emerald-50 rounded-full text-emerald-900">
                    <BarChart3 size={40} />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft CTA with Form */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-stone-200 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-stone-200/40">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-semibold text-emerald-950 tracking-tighter mb-4">Ready to Start?</h2>
                <p className="text-emerald-900/60 text-lg">Send us a message and transform your business today.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="grid md:grid-cols-2 gap-8">
                     {/* Name */}
                     <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          id="home-name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="peer w-full bg-transparent border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                          placeholder="Name"
                        />
                        <label 
                          htmlFor="home-name"
                          className={labelClasses}
                        >
                          Name
                        </label>
                     </div>
                     {/* Email */}
                     <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          id="home-email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="peer w-full bg-transparent border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                          placeholder="Email"
                        />
                        <label 
                          htmlFor="home-email"
                          className={labelClasses}
                        >
                          Email Address
                        </label>
                     </div>
                </div>
                 {/* Phone */}
                 <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      id="home-phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                      placeholder="Phone Number"
                    />
                    <label 
                      htmlFor="home-phone"
                      className={labelClasses}
                    >
                      Phone Number
                    </label>
                 </div>
                 {/* Message */}
                 <div className="relative group">
                    <textarea
                      name="message"
                      id="home-message"
                      rows={3}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight resize-none"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="home-message"
                      className={labelClasses}
                    >
                      Message
                    </label>
                 </div>
                 
                 <div className="text-center pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto min-w-[240px]">
                        Send Message <Send size={16} className="ml-2" />
                    </Button>
                 </div>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;