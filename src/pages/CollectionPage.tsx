import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gem, RefreshCw, Sparkles } from 'lucide-react';
import ProductConfigurator from '../components/ProductConfigurator';

const CollectionPage: React.FC = () => {
  return (
    <main className="bg-[#f8f4ef] text-black">
      <section className="relative overflow-hidden px-4 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#f4c6c3]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-black/50"
          >
            The Ignea Aura Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl"
          >
            Designed to burn beautifully. Made to live beyond the flame.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex max-w-3xl flex-col gap-4 text-base leading-7 text-black/60 md:text-lg"
          >
            <p>Choose a reusable rocks glass, personalize it, then return for a drop-in refill when the candle is finished.</p>
          </motion.div>
        </div>
      </section>

      <ProductConfigurator />

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Gem size={21} />}
            eyebrow="01 · Keep"
            title="A vessel, not packaging"
            copy="Heavyweight rocks glass designed to remain part of your home after the final burn."
          />
          <FeatureCard
            icon={<RefreshCw size={21} />}
            eyebrow="02 · Refill"
            title="Keep the glass. Refill the Aura."
            copy="Drop-in refills make the next candle simpler while reducing unnecessary vessel waste."
          />
          <FeatureCard
            icon={<Sparkles size={21} />}
            eyebrow="03 · Personalize"
            title="Make the object yours"
            copy="Initials, names and custom artwork turn an Ignea Aura vessel into a keepsake or gift."
          />
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111] px-6 py-10 text-white md:px-10 md:py-14">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#f4c6c3]">The Keepsake Collection</p>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">Three candles. One Japanese-inspired puzzle box. Designed to be kept.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/60">The Trilogy pairs three reusable rocks glasses with an engravable bamboo keepsake box for gifting, collecting and reuse.</p>
            </div>
            <button className="group flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm transition hover:bg-white hover:text-black">
              Explore Trilogy <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; eyebrow: string; title: string; copy: string }> = ({ icon, eyebrow, title, copy }) => (
  <motion.article
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    className="rounded-[1.75rem] border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur md:p-7"
  >
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c6c3]/55">{icon}</div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">{eyebrow}</p>
    <h3 className="mt-2 font-serif text-2xl">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
  </motion.article>
);

export default CollectionPage;
