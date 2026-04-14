import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function IntroAnimation({ onComplete }) {
  const [step, setStep] = useState(-1); // Start from -1 for the text

  useEffect(() => {
    const sequence = async () => {
      // Step -1: "botman showww starts" text
      setStep(-1);
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 0: Initial show (boy holding phone)
      setStep(0);
      await new Promise(r => setTimeout(r, 1500));
      
      // Step 1: Zoom starts
      setStep(1);
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 2: Zoom completes, reveal starts
      setStep(2);
      await new Promise(r => setTimeout(r, 800));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-intro-gradient flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div
            key="intro-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-accent-blue/10 rounded-2xl border border-accent-blue/20">
                <Bot size={40} className="text-accent-blue" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                botman <span className="text-gradient">showww</span> starts
              </h1>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent"
            />
          </motion.div>
        )}

        {step >= 0 && step < 2 && (
          <motion.div
            key="intro-scene"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: step === 1 ? 12 : 1, 
              opacity: 1, 
              y: step === 1 ? -200 : 0 
            }}
            transition={{ 
              duration: step === 1 ? 2.5 : 1, 
              ease: step === 1 ? [0.7, 0, 0.3, 1] : "easeOut" 
            }}
            className="relative flex flex-col items-center"
          >
            {/* Stylized Boy Illustration (SVG) */}
            <div className="relative w-64 h-96 flex items-center justify-center">
              {/* Head */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-0 w-20 h-20 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm" 
              />
              {/* Body */}
              <div className="absolute top-24 w-32 h-40 bg-white/5 rounded-3xl border border-white/10" />
              
              {/* Arms holding the phone */}
              <div className="absolute top-36 -left-10 w-24 h-8 bg-white/10 rounded-full rotate-[-45deg] border border-white/20" />
              <div className="absolute top-36 -right-10 w-24 h-8 bg-white/10 rounded-full rotate-[45deg] border border-white/20" />

              {/* The Phone */}
              <motion.div 
                className="absolute top-32 w-48 h-80 bg-[#0a0a0a] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Phone Screen Content */}
                <div className="absolute inset-0 bg-accent-blue/5 flex flex-col items-center justify-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="p-4 bg-accent-blue/10 rounded-2xl border border-accent-blue/20"
                  >
                    <Bot size={48} className="text-accent-blue" />
                  </motion.div>
                  <div className="text-center px-4">
                    <h2 className="text-white text-xl font-display font-bold mb-1">Botman</h2>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Initializing AI Protocol...</p>
                  </div>
                  
                  {/* Miniature Landing Page Elements */}
                  <div className="mt-8 w-3/4 space-y-2">
                    <div className="h-1 bg-white/10 rounded-full w-full" />
                    <div className="h-1 bg-white/10 rounded-full w-2/3" />
                    <div className="h-4 bg-accent-blue/20 rounded-lg w-1/2 mx-auto mt-4" />
                  </div>
                </div>

                {/* Reflection/Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />
                <div className="absolute -inset-20 bg-accent-blue/20 blur-[60px] rounded-full pointer-events-none opacity-50" />
              </motion.div>
            </div>

            {/* Boy's simple shadow */}
            <div className="w-40 h-4 bg-black/40 blur-md rounded-full mt-8" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reveal Flash */}
      <AnimatePresence>
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="absolute inset-0 bg-white z-[110] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
