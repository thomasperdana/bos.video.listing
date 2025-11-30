import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, AlertTriangle } from 'lucide-react';

export const ProblemBlindness: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-500 font-bold mb-4 bg-red-500/10 px-4 py-1 rounded-full border border-red-500/20">
            <AlertTriangle className="w-4 h-4" />
            <span>THE PROBLEM</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The "StreetEasy Blindness"
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The New York luxury market is saturated. If your listing is static, it is invisible.
          </p>
        </div>

        <div className="relative">
          {/* Simulation of a feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 blur-[1px] scale-95 origin-center">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="aspect-[4/5] bg-slate-800 rounded-lg overflow-hidden border border-slate-700 grayscale">
                 <img src={`https://picsum.photos/seed/${i + 10}/400/500`} alt="Static" className="w-full h-full object-cover" />
                 <div className="p-3">
                   <div className="h-3 w-3/4 bg-slate-600 rounded mb-2"></div>
                   <div className="h-3 w-1/2 bg-slate-600 rounded"></div>
                 </div>
               </div>
             ))}
          </div>
          
          {/* The Hero Card Breaking Out */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-96"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.4)] border-2 border-cyan-400 transform hover:scale-105 transition-transform duration-300">
               <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse z-10">
                 LIVE
               </div>
               <img src="https://picsum.photos/seed/luxuryvideo/600/800" alt="Video Listing" className="w-full h-[120%] object-cover animate-pan-y" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-6">
                 <h3 className="text-2xl font-bold text-white mb-1">Stops The Scroll.</h3>
                 <p className="text-cyan-300 font-medium">Motion arrests attention immediately.</p>
               </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
           <h3 className="text-2xl font-semibold text-white mb-4">High-net-worth buyers are doom-scrolling.</h3>
           <p className="text-slate-400">
             They see hundreds of static images of marble countertops and floor-to-ceiling windows. Even the best photography blends into the noise. 
             <span className="text-white block mt-2 font-bold">We create depth, parallax, and motion that breaks the pattern.</span>
           </p>
        </div>
      </div>
      
      <style>{`
        @keyframes pan-y {
          0% { object-position: center top; }
          50% { object-position: center bottom; }
          100% { object-position: center top; }
        }
        .animate-pan-y {
          animation: pan-y 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};