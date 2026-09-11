import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RAW = 'https://raw.githubusercontent.com/DarahD/Ignea-Aura/website-2.0/public/ignea-aura-web-pics/%20Products';

const products = [
  { name: 'Onyx Round Vessel', price: 450, image: `${RAW}/onyx-round-glass.png`, note: 'Round rocks glass · Onyx' },
  { name: 'Crystal Round Vessel', price: 450, image: `${RAW}/clear-round-glass.png`, note: 'Round rocks glass · Clear' },
  { name: 'Blush Round Vessel', price: 450, image: `${RAW}/pink-round-glass.png`, note: 'Round rocks glass · Blush' },
  { name: 'Onyx Square Vessel', price: 450, image: `${RAW}/Onyx-Square-glass.png`, note: 'Square rocks glass · Onyx' },
  { name: 'Crystal Square Vessel', price: 450, image: `${RAW}/clear-square-glass.png`, note: 'Square rocks glass · Clear' },
  { name: 'Blush Square Vessel', price: 450, image: `${RAW}/pink-square-glass.png`, note: 'Square rocks glass · Blush' },
];

const CollectionPage: React.FC = () => (
  <main className="bg-[#faf7f3] pt-14 text-black">
    <section className="px-4 pb-14 pt-20 md:px-8 md:pb-20 md:pt-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[.3em] text-black/45">The Ignea Aura Collection</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] md:text-7xl lg:text-8xl">Designed to burn beautifully. Made to live beyond the flame.</h1>
        <p className="mt-7 max-w-3xl text-base leading-7 text-black/60 md:text-lg">Luxury rocks glasses, hand-poured candles, drop-in refills and personalization designed around reuse.</p>
        <div className="mt-9"><Link to="/make-it-yours" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white">Make It Yours <ArrowRight size={16}/></Link></div>
      </div>
    </section>

    <section className="px-4 pb-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-black/45">Core vessels</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.03em] md:text-4xl">Round or square. Clear, blush or onyx.</h2></div><p className="hidden text-sm text-black/45 md:block">Frosted preview is available in Make It Yours.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index)=><motion.article key={product.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}} className="group overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,.04)]"><div className="flex h-[360px] items-center justify-center bg-[#f4efe9] p-8"><img src={product.image} alt={product.name} className="max-h-[300px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"/></div><div className="p-6"><p className="text-xs uppercase tracking-[.18em] text-black/40">{product.note}</p><div className="mt-2 flex items-end justify-between gap-4"><h3 className="text-xl font-semibold tracking-[-.02em]">{product.name}</h3><p className="whitespace-nowrap text-sm font-semibold">{product.price} NOK</p></div><p className="mt-3 text-sm leading-6 text-black/55">Reusable heavyweight rocks glass with coconut-soy wax and wood wick.</p></div></motion.article>)}
        </div>
      </div>
    </section>

    <section className="px-4 pb-24 md:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#111] text-white md:grid-cols-2"><div className="min-h-[420px]"><img src={`${RAW}/vessel-trio-reused-drinking-glass.png`} alt="Ignea Aura vessels reused as drinking glasses" className="h-full w-full object-cover"/></div><div className="flex items-center p-8 md:p-12"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#f4c6c3]">Legacy over landfill</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] md:text-5xl">A candle first. A rocks glass next.</h2><p className="mt-5 max-w-xl leading-7 text-white/60">When the candle is finished, refill it or return the vessel to the bar cart. The glass is meant to stay with you.</p></div></div></div></section>
  </main>
);

export default CollectionPage;