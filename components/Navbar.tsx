import React, { useState, useEffect } from 'react';
import { Film } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <Film className="w-6 h-6 text-brand-accent" />
          <span>CINEMATIC<span className="text-brand-accent">.IO</span></span>
        </div>
        
        <div className="hidden md:block">
          <Button variant="primary" className="px-6 py-2 text-sm">
            Pilot Program
          </Button>
        </div>
      </div>
    </nav>
  );
};