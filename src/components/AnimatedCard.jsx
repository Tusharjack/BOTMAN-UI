import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedCard({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)",
      }}
      className={`glass group p-8 relative overflow-hidden transition-all hover:bg-white/[0.06] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
