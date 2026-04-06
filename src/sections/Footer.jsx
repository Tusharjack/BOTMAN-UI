import React from 'react';
import { Bot, Twitter, Github, Linkedin, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-12 gap-12 mb-20">
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1.5 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
              <Bot size={24} className="text-accent-blue" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">Botman</span>
          </div>
          <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
            The next generation of AI-native bot infrastructure. Build faster, scale further, and defy traditional limits.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 glass hover:bg-white/10 transition-colors"><Github size={20} /></a>
            <a href="#" className="p-2 glass hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Product</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
             <li className="hover:text-accent-blue cursor-pointer transition-colors">Visual Editor</li>
             <li className="hover:text-accent-blue cursor-pointer transition-colors">Integrations</li>
             <li className="hover:text-accent-blue cursor-pointer transition-colors">Templates</li>
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
             <li className="hover:text-accent-blue cursor-pointer transition-colors">About Us</li>
             <li className="hover:text-accent-blue cursor-pointer transition-colors">Press</li>
             <li className="hover:text-accent-blue cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Stay Updated</h4>
          <div className="bg-white/5 border border-white/10 p-1.5 rounded-xl flex">
            <input 
              type="text" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none flex-1 px-4 text-sm"
            />
            <button className="bg-accent-blue px-6 py-2 rounded-lg font-bold text-sm">Join</button>
          </div>
        </div>
      </div>

      <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-white/20">
          © 2026 Botman Labs Inc. All rights reserved. Built with AI Native passion.
        </div>
        <div className="flex gap-8 text-xs text-white/20">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        
        {/* Animated Gradient Footer Border */}
        <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent animate-pulse" />
      </div>
    </footer>
  );
}
