import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeaturesGrid from './sections/FeaturesGrid';
import InteractiveFlow from './sections/InteractiveFlow';
import DemoPreview from './sections/DemoPreview';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-accent-blue/30 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesGrid />
        <InteractiveFlow />
        <DemoPreview />
      </main>

      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
