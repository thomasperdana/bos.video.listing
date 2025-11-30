import React from 'react';
import { Button } from './ui/Button';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-brand-900">
         <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-brand-900"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Do not take my word for it. <br/>
          <span className="text-cyan-400">Let the asset speak for itself.</span>
        </h2>
        
        <div className="flex flex-col items-center gap-4">
            <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-cyan-500/20 animate-bounce-slow">
                Upload One Listing for a Complimentary Pilot
            </Button>
            <p className="text-slate-500 text-sm mt-4">
                Limited availability per month to ensure quality standards.
            </p>
        </div>
      </div>
    </section>
  );
};