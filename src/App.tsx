/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Curriculum from './components/Curriculum';
import StudentShowcase from './components/StudentShowcase';
import LevelQuiz from './components/LevelQuiz';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Methodology />
        <Curriculum />
        <StudentShowcase />
        <LevelQuiz />
        <Testimonials />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
