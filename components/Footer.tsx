import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white py-20 relative overflow-hidden">
        {/* Subtle organic shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
             <NavLink to="/" className="inline-block">
                <img src="https://i.postimg.cc/sfccVm1W/logo.png" 
                  alt="Ecomorph Logo" 
                  className="h-24 md:h-32 w-auto brightness-0 invert" 
                />
            </NavLink>
            <p className="text-emerald-100/60 text-sm leading-relaxed max-w-xs">
              Bridging industry and nature with advanced sustainable technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-tight">Navigation</h4>
            <ul className="space-y-3 text-sm text-emerald-100/40">
              <li><NavLink to="/" className="hover:text-emerald-300 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-emerald-300 transition-colors">About</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-emerald-300 transition-colors">Solutions</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-emerald-300 transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 tracking-tight">Legal</h4>
            <ul className="space-y-3 text-sm text-emerald-100/40">
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Annual Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 tracking-tight">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-emerald-900 flex items-center justify-center text-emerald-100/40 hover:bg-emerald-800 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-emerald-900 flex items-center justify-center text-emerald-100/40 hover:bg-emerald-800 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-emerald-900 flex items-center justify-center text-emerald-100/40 hover:bg-emerald-800 hover:text-white transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-10 text-center text-emerald-100/20 text-[10px] tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} ECOMORPH CONSULTANCY. SUSTAINABLE INDUSTRY.
        </div>
      </div>
    </footer>
  );
};

export default Footer;