import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6">
            Architectural Motion Technology
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Static Listings Are <span className="text-red-500">Dead</span>. <br />
            Stop Letting "Good Enough" <br className="hidden md:block" />
            <span className="gradient-text">Cost You Commissions.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-10">
            We convert your existing architectural photography into high-performance cinematic video tours. <br/>
            <span className="text-white font-medium">No film crews. No scheduling conflicts. Just pure asset maximization.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" withIcon>
              Upload One Listing
            </Button>
            <button className="flex items-center gap-3 px-8 py-4 text-slate-300 hover:text-white transition-colors font-medium">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Play className="w-4 h-4 fill-current" />
              </div>
              See Examples
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-600 uppercase tracking-widest">
            Broadcast-ready assets in 24 hours
          </p>
        </motion.div>

        {/* Floating Abstract Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mt-16 mx-auto max-w-4xl"
        >
           <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-900/20 aspect-video group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/luxuryhome/1280/720" 
                alt="Cinematic Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-left">
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-cyan-400 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  REC
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl">Tribeca Penthouse II</h3>
                <p className="text-slate-300 text-sm">Converted from 12 static JPEGs</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};