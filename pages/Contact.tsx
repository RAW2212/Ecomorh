import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
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
      <div className="pt-40 pb-32 min-h-screen relative bg-stone-50 overflow-hidden flex items-center">
        
        {/* Background blobs - Earthy Tones */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tighter mb-10 leading-[0.9]">
                Get in <br />
                <span className="text-emerald-800/50 italic font-normal">Touch</span>
              </h1>
              <p className="text-stone-500 text-xl mb-16 leading-relaxed max-w-md">
                Send us your project details. We have sustainability experts ready to help globally.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-emerald-950 font-semibold mb-1 tracking-tight">Office</h3>
                    <p className="text-stone-500 text-sm">Tech District, London<br />Building A1</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-emerald-950 font-semibold mb-1 tracking-tight">Email</h3>
                    <p className="text-stone-500 text-sm">hello@ecomorph.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-emerald-950 font-semibold mb-1 tracking-tight">Phone</h3>
                    <p className="text-stone-500 text-sm">+44 (0) 20 8000 9000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-emerald-900 group-hover:bg-emerald-50 transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-emerald-950 font-semibold mb-1 tracking-tight">Social</h3>
                    <a href="#" className="text-stone-500 text-sm hover:text-emerald-800 transition-colors">@ecomorph</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section - Clean White Frosted Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl border border-stone-200 p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-stone-200/40 relative overflow-hidden group">
                <div className="space-y-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="peer w-full bg-stone-50 border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                      placeholder="Name"
                    />
                    <label 
                      htmlFor="name"
                      className={labelClasses}
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="peer w-full bg-stone-50 border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email"
                      className={labelClasses}
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="peer w-full bg-stone-50 border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight"
                      placeholder="Phone Number"
                    />
                    <label 
                      htmlFor="phone"
                      className={labelClasses}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="peer w-full bg-stone-50 border-b border-stone-200 py-4 text-emerald-950 placeholder-transparent focus:outline-none focus:border-emerald-900 transition-all text-lg font-medium tracking-tight resize-none"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="message"
                      className={labelClasses}
                    >
                      Message
                    </label>
                  </div>

                  <Button type="submit" className="w-full flex justify-center py-5">
                    Send Message <Send size={16} className="ml-2" />
                  </Button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;