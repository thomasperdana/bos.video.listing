import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, Zap, CloudLightning } from 'lucide-react';

export const SolutionProcess: React.FC = () => {
  return (
    <section className="py-24 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">The Solution: Cinematic Motion, <span className="text-cyan-400">Zero Friction</span></h2>
            <p className="text-xl text-slate-400 max-w-3xl">
                We utilize advanced rendering technology to transform your existing listing photos into fluid, emotive short-form videos.
            </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* The Old Way */}
            <div className="p-8 rounded-3xl border border-red-900/30 bg-red-950/10 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                    <XCircle /> The Old Way
                </h3>
                <ul className="space-y-4">
                    {["Schedule a videographer", "Wait for a sunny day", "Disturb the seller", "Wait 5 days for edits", "Post late"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400">
                            <ArrowRight className="w-4 h-4 text-slate-600" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-red-900/30 text-red-300 text-sm">
                    <strong>Result:</strong> Wasted billable hours. Missed opportunities.
                </div>
            </div>

            {/* The New Way */}
            <div className="relative p-8 rounded-3xl border border-cyan-500/50 bg-gradient-to-b from-slate-900 to-cyan-950/20 shadow-2xl">
                <div className="absolute -top-4 right-8 bg-brand-accent text-brand-900 font-bold px-4 py-1 rounded-full text-sm">
                    RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <CheckCircle2 /> The New Way
                </h3>
                <ul className="space-y-4">
                    {[
                        { title: "Turnkey Efficiency", desc: "Send us the Dropbox link. We do the rest." },
                        { title: "Zero Disturbance", desc: "No film crews tracking mud into a $10M brownstone." },
                        { title: "Speed to Market", desc: "Broadcast-ready asset in 24 hours." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 bg-cyan-900/50 p-1 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                                <strong className="text-white block">{item.title}</strong>
                                <span className="text-slate-400 text-sm">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-cyan-900/50 text-cyan-200 text-sm font-medium">
                    This is not a slideshow. This is a visual narrative.
                </div>
            </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { icon: CloudLightning, title: "1. Upload", desc: "Upload your existing high-res photos to our secure portal." },
                { icon: Zap, title: "2. Transform", desc: "Our AI & editors create depth, parallax, and cinematic flow." },
                { icon: CheckCircle2, title: "3. Publish", desc: "Receive formatted video assets for IG Reels, TikTok, and Zillow." }
            ].map((step, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="text-center p-6"
                >
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                        <step.icon size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};