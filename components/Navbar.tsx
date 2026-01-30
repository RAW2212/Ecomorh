import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 rounded-full border ${
        isScrolled 
          ? 'top-4 w-[98%] md:w-[90%] max-w-6xl bg-white/80 backdrop-blur-xl border-stone-200/50 py-2 shadow-sm' 
          : 'top-6 w-[95%] md:w-[85%] max-w-5xl bg-white/60 backdrop-blur-lg border-stone-100/50 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo with breakout effect preserved */}
        <NavLink to="/" className="flex items-center">
          <div className="relative z-10 p-1 -my-6 md:-my-10 transition-all duration-500 group">
             <img src="https://i.postimg.cc/sfccVm1W/logo.png" 
              alt="Ecomorph Logo" 
              className="h-24 md:h-32 w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" 
              />
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-[13px] font-medium tracking-tight transition-all duration-300 ${
                    isActive 
                      ? 'text-emerald-950 bg-emerald-50' 
                      : 'text-stone-500 hover:text-emerald-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Button variant="primary" size="sm" className="hidden lg:flex">
            Partner <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-700 hover:text-emerald-800 transition-colors p-2"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-stone-100 shadow-xl overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xl font-medium tracking-tight ${
                      isActive ? 'text-emerald-900' : 'text-stone-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="h-px bg-stone-100" />
              <Button variant="primary" className="w-full">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;