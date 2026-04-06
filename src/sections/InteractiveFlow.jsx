import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Cpu, Rocket } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center gap-6 text-center relative z-10 w-full md:w-1/3"
  >
    <div className="w-20 h-20 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center relative group">
      <div className="absolute inset-0 bg-accent-blue opacity-5 blur-xl group-hover:opacity-20 transition-opacity" />
      <Icon size={32} className="text-accent-blue" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 font-display uppercase tracking-widest">{title}</h3>
      <p className="text-white/50 text-sm">{desc}</p>
    </div>
  </motion.div>
);

export default function InteractiveFlow() {
  return (
    <section id="workflow" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for <span className="text-gradient">Developers</span>.</h2>
        <p className="text-white/50">Experience the world's most intuitive AI workflow. Go from idea to prod in under 2 minutes.</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-32">
        {/* Animated Connecting Line */}
        <div className="hidden md:block absolute top-10 left-10 right-10 h-1 z-0">
          <svg width="100%" height="80" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
            <path 
              d="M 50 40 Q 500 40 1000 40" 
              fill="transparent" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              strokeOpacity="0.1" 
            />
            {/* Traveling Data Packet */}
            <motion.circle 
              r="4" 
              fill="#3B82F6" 
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 50 40 Q 500 40 1000 40')", filter: "drop-shadow(0 0 8px #3B82F6)" }}
            />
          </svg>
        </div>

        <Step icon={MousePointer2} title="1. Define" desc="Visual logic mapping" delay={0.2} />
        <Step icon={Cpu} title="2. Train" desc="Contextual AI injection" delay={0.4} />
        <Step icon={Rocket} title="3. Deploy" desc="Instant API generation" delay={0.6} />
      </div>
    </section>
  );
}
