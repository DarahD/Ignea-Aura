import React from 'react';
import { motion } from 'framer-motion';
import { Gem, RefreshCw, Sparkles } from 'lucide-react';
import ProductConfigurator from '../components/ProductConfigurator';

const MakeItYoursPage: React.FC = () => {
  return (
    <main className="bg-[#f8f4ef] text-black">
      <section className="relative overflow-hidden px-4 pb-14 pt-20 md:px-8 md:pb-20 md:pt-28 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#f4c6c3]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-black/50">
            Make It Yours
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            Your candle. Your glass. Your mark.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-8 max-w-3xl text-base leading-7 text-black/60 md:text-lg">
            Start with an Ignea Aura rocks glass, then choose the shape, color, finish, fragrance and personalization that make it yours.
          </motion.p>
        </div>
      </section>

      <ProductConfigurator />

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <FeatureCard icon={<Gem size={21} />} eyebrow="01 · Choose" title="Begin with the vessel" copy="Select the shape and glass color that fits your space, gift or ritual." />
          <FeatureCard icon={<Sparkles size={21} />} eyebrow="02 · Personalize" title="Add your signature" copy="Choose initials, a name, a short phrase or upload your own artwork for engraving." />
          <FeatureCard icon={<RefreshCw size={21} />} eyebrow="03 · Refill" title="Keep the glass" copy="When the candle is finished, return for a drop-in refill rather than replacing the vessel." />
        </div>
      </section>
    </main>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; eyebrow: string; title: string; copy: string }> = ({ icon, eyebrow, title, copy }) => (
  <motion.article whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="rounded-[1.75rem] border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur md:p-7">
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c6c3]/55">{icon}</div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">{eyebrow}</p>
    <h3 className="mt-2 font-serif text-2xl">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
  </motion.article>
);

export default MakeItYoursPage;