import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Sparkles } from 'lucide-react';

export default function DemoPreview() {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Help me build a customer support bot.' }
  ]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fullResponse = "Starting build process... Analyzing your request. Found 3 templates. I'll initialize a 'Standard Support' bot for you now.";
  const refinedResponse = "Initializing 'Ultra-Fast Support' bot. Applying custom knowledge base... Done. Deployment ready.";

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Wait and then type first response
      await new Promise(r => setTimeout(r, 1000));
      setIsTyping(true);
      
      let current = "";
      for (const char of fullResponse) {
        current += char;
        setCurrentTyping(current);
        await new Promise(r => setTimeout(r, 30));
      }
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: fullResponse }]);
      setCurrentTyping("");

      // Step 2: Delete and re-type faster (simulation)
      await new Promise(r => setTimeout(r, 2000));
      setMessages(prev => prev.slice(0, 1));
      setIsTyping(true);
      
      current = "";
      for (const char of refinedResponse) {
        current += char;
        setCurrentTyping(current);
        await new Promise(r => setTimeout(r, 15)); // Faster
      }
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: refinedResponse }]);
      setCurrentTyping("");
    };

    sequence();
  }, []);

  return (
    <section id="demo" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for <span className="text-gradient">Real Impact</span>.</h2>
        <p className="text-white/50">Watch Botman's AI refine its own logic in real-time.</p>
      </div>

      <div className="glass-morphism rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30">
            <Sparkles size={12} />
            Live Preview
          </div>
        </div>

        <div className="h-[400px] p-6 overflow-y-auto flex flex-col gap-6">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}
              >
                {msg.role === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center border border-accent-blue/30 shrink-0">
                    <Bot size={16} className="text-accent-blue" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-accent-blue text-white' : 'bg-white/5 border border-white/10 text-white/90'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                    <User size={16} />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center border border-accent-blue/30 shrink-0">
                    <Bot size={16} className="text-accent-blue animate-pulse" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-white/90 px-4 py-2.5 rounded-2xl text-sm italic">
                    {currentTyping}
                    <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-1.5 h-4 bg-accent-blue ml-1 translate-y-1" />
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 bg-white/[0.02] border-t border-white/5 flex gap-4">
          <div className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/30 italic">
            Describe your bot features...
          </div>
          <button className="bg-accent-blue p-3 rounded-xl hover:bg-accent-blue/80 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
