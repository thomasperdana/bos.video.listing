import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';

const data = [
  { name: 'Static Photos', inquiries: 100 },
  { name: 'Video Listings', inquiries: 503 }, // 403% more = 100 + 403
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-4">
              <TrendingUp className="w-5 h-5" />
              <span>THE REALITY CHECK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              You know the data. <br/>
              <span className="text-slate-500">Why ignore it?</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                You are currently choosing between <span className="text-white font-semibold">efficiency</span> (uploading photos and moving on) and <span className="text-white font-semibold">effectiveness</span> (producing video).
              </p>
              <p className="border-l-4 border-cyan-500 pl-6 italic text-slate-400">
                "We eliminate the choice. We give you both."
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                    <Clock className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-white">0 hrs</div>
                    <div className="text-sm text-slate-400">On-site Supervision</div>
                 </div>
                 <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                    <Users className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-white">Zero</div>
                    <div className="text-sm text-slate-400">Scheduling Conflicts</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="relative"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <TrendingUp size={120} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inquiry Velocity</h3>
                <p className="text-slate-400 mb-8 text-sm">Average inquiries per listing type (Source: Industry Data)</p>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <XAxis type="number" hide />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        tick={{ fill: '#94a3b8', fontSize: 14 }} 
                        width={100}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                      />
                      <Bar dataKey="inquiries" radius={[0, 4, 4, 0]} barSize={40}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 1 ? 'url(#colorGradient)' : '#334155'} />
                        ))}
                      </Bar>
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="absolute top-1/2 right-8 -translate-y-1/2">
                   <div className="text-5xl font-black text-cyan-400">+403%</div>
                   <div className="text-slate-400 text-right font-medium">More Inquiries</div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};