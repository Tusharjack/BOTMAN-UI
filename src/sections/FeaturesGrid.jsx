import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import { Layers, Zap, Globe, MessageSquare, Cpu, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Visual Flow Builder",
    description: "Build complex bot logic with a drag-and-drop interface inspired by modern dev tools.",
    icon: Layers,
    class: "col-span-12 md:col-span-8",
    color: "#3B82F6"
  },
  {
    title: "AI Native Roots",
    description: "Deeply integrated with GPT-4, Claude & Llama models out of the box.",
    icon: Cpu,
    class: "col-span-12 md:col-span-4",
    color: "#8B5CF6"
  },
  {
    title: "One-Click Deploy",
    description: "Host your bots on our distributed edge network for zero latency.",
    icon: Zap,
    class: "col-span-12 md:col-span-4",
    color: "#3B82F6"
  },
  {
    title: "Omnichannel Support",
    description: "Connect to WhatsApp, Discord, Slack or your own website in seconds.",
    icon: MessageSquare,
    class: "col-span-12 md:col-span-8",
    color: "#8B5CF6"
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <motion.p
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="text-accent-blue font-bold uppercase tracking-widest text-sm mb-4"
        >
          Capabilities
        </motion.p>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-4xl md:text-5xl font-display font-bold"
        >
          Powering the next <span className="text-gradient">generation</span> of AI apps.
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {features.map((feature, i) => (
          <AnimatedCard 
            key={i} 
            className={`flex flex-col justify-between ${feature.class}`}
          >
            <div className="mb-12">
               <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit mb-6 group-hover:border-white/20 transition-colors">
                 <feature.icon size={28} className="text-white" />
               </div>
               <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
               <p className="text-white/50 text-lg leading-relaxed">{feature.description}</p>
            </div>
            
            <div className="flex items-center gap-1 group-hover:gap-2 transition-all text-white/40 hover:text-white cursor-pointer font-semibold">
              Explore Feature <Globe size={16} />
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
