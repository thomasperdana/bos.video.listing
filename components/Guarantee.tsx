import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700">
          <div className="bg-brand-950 rounded-[22px] p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background seal effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            
            <ShieldCheck className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Zero-Risk Mandate
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              In this industry, results are the only metric that matters. I do not ask for a retainer; I ask for performance.
            </p>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-8">
              <h3 className="text-cyan-400 font-bold tracking-wide uppercase text-sm mb-3">My Promise</h3>
              <p className="text-white text-lg font-medium italic">
                "If our video assets do not generate a minimum 10% Return on Investment (measured by increased engagement, lead velocity, or marketing cost reduction), <span className="text-cyan-400 underline decoration-cyan-400/30">you do not pay</span>."
              </p>
            </div>
            
            <p className="text-slate-500 text-sm">
              I absorb the risk because I know the asset works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};