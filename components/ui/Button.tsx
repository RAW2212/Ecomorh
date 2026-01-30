import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-emerald-950 text-white border border-emerald-950 hover:bg-emerald-900 shadow-sm hover:shadow-[0_8px_30px_rgb(6,78,59,0.15)]",
    outline: "bg-transparent text-emerald-950 border border-emerald-950/20 hover:border-emerald-950 hover:bg-emerald-50/50",
    ghost: "bg-transparent text-earth-800 hover:text-emerald-950 hover:bg-stone-100",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default Button;