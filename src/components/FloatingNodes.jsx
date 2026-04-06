import React, { useMemo } from 'react';
import { motion, useTransform, useScroll, useSpring, useMotionValue } from 'framer-motion';

const Node = ({ x, y, size, color, delay, mouseX, mouseY }) => {
  const moveX = useTransform(mouseX, [-1000, 1000], [-30, 30]);
  const moveY = useTransform(mouseY, [-1000, 1000], [-30, 30]);
  
  const springX = useSpring(moveX, { stiffness: 50, damping: 20 });
  const springY = useSpring(moveY, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3], 
        scale: [1, 1.05, 1],
        y: [y, y - 20, y]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        delay,
        opacity: { duration: 4, repeat: Infinity },
        y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ 
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        x: springX,
        y: springY
      }}
      className={`rounded-2xl border border-white/10 glass shadow-2xl flex items-center justify-center`}
    >
      <div className={`w-1/2 h-1/2 rounded-full blur-xl opacity-20`} style={{ background: color }} />
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-white/20" />
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-white/20" />
      <div className="absolute right-0 top-1/2 w-1 h-2 bg-white/20 rounded-l" />
      <div className="absolute left-0 top-1/2 w-1 h-2 bg-white/20 rounded-r" />
    </motion.div>
  );
};

export default function FloatingNodes({ mouseX, mouseY }) {
  const nodes = useMemo(() => [
    { x: '10%', y: '15%', size: 80, color: '#3B82F6', delay: 0 },
    { x: '80%', y: '20%', size: 100, color: '#8B5CF6', delay: 2 },
    { x: '15%', y: '70%', size: 120, color: '#3B82F6', delay: 1.5 },
    { x: '85%', y: '65%', size: 90, color: '#8B5CF6', delay: 3 },
    { x: '50%', y: '30%', size: 60, color: '#3B82F6', delay: 0.5 },
    { x: '45%', y: '80%', size: 70, color: '#8B5CF6', delay: 2.5 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 mask-fade">
      {nodes.map((node, i) => (
        <Node key={i} {...node} mouseX={mouseX} mouseY={mouseY} />
      ))}
      {/* Dynamic connection lines simulation */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
