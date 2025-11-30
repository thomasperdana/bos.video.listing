import React from 'react';
import { Hero } from './components/Hero';
import { ProblemBlindness } from './components/ProblemBlindness';
import { StatsSection } from './components/StatsSection';
import { SolutionProcess } from './components/SolutionProcess';
import { Guarantee } from './components/Guarantee';
import { FooterCTA } from './components/FooterCTA';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-900 text-slate-200 selection:bg-brand-accent selection:text-brand-900">
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <StatsSection />
        <ProblemBlindness />
        <SolutionProcess />
        <Guarantee />
        <FooterCTA />
      </main>
      
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Cinematic Listings. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;