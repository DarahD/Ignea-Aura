import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ImagePlus, Sparkles, Upload, X } from 'lucide-react';

type Shape = 'round' | 'square';
type Color = 'onyx' | 'crystal' | 'blush';
type Finish = 'polished' | 'frosted';
type ProductType = 'candle' | 'refill';
type Engraving = 'none' | 'initials' | 'name' | 'artwork';

const vesselImages: Record<Shape, Record<Color, string>> = {
  round: {
    onyx: '/ignea-aura-web-pics/%20Products/onyx-round-glass.png',
    crystal: '/ignea-aura-web-pics/%20Products/clear-round-glass.png',
    blush: '/ignea-aura-web-pics/%20Products/pink-round-glass.png',
  },
  square: {
    onyx: '/ignea-aura-web-pics/%20Products/Onyx-Square-glass.png',
    crystal: '/ignea-aura-web-pics/%20Products/clear-square-glass.png',
    blush: '/ignea-aura-web-pics/%20Products/pink-square-glass.png',
  },
};

const scents = ['Signature Aura', 'Soft Woods', 'Clean Linen', 'Unscented'];

const engravingPricing: Record<Engraving, number> = {
  none: 0,
  initials: 100,
  name: 120,
  artwork: 150,
};

const ProductConfigurator: React.FC = () => {
  const [shape, setShape] = useState<Shape>('round');
  const [color, setColor] = useState<Color>('blush');
  const [finish, setFinish] = useState<Finish>('polished');
  const [productType, setProductType] = useState<ProductType>('candle');
  const [scent, setScent] = useState(scents[0]);
  const [engraving, setEngraving] = useState<Engraving>('none');
  const [personalization, setPersonalization] = useState('');
  const [artworkName, setArtworkName] = useState('');
  const [artworkPreview, setArtworkPreview] = useState<string | null>(null);

  const basePrice = productType === 'candle' ? 450 : 280;
  const total = basePrice + engravingPricing[engraving];
  const usd = Math.round(total * 0.093);

  const engravingLabel = useMemo(() => {
    if (engraving === 'none') return 'No engraving';
    if (engraving === 'initials') return 'Initials';
    if (engraving === 'name') return 'Name or short phrase';
    return 'Custom artwork';
  }, [engraving]);

  const handleArtwork = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setArtworkName(file.name);
    const reader = new FileReader();
    reader.onload = () => setArtworkPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearArtwork = () => {
    setArtworkName('');
    setArtworkPreview(null);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f4ef] px-4 py-14 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f4c6c3]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
            <Sparkles size={15} /> Build Your Aura
          </div>
          <h2 className="font-serif text-4xl leading-tight text-black md:text-6xl">Make it unmistakably yours.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/65 md:text-lg">
            Choose your vessel, finish, candle or refill, fragrance and engraving. The experience updates as you build it.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur md:p-10">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/65 backdrop-blur">
              Interactive preview
            </div>

            <div className="flex h-full min-h-[470px] items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${shape}-${color}-${finish}-${productType}`}
                  initial={{ opacity: 0, y: 20, scale: 0.96, rotateY: -10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative w-full max-w-[520px]"
                >
                  <motion.img
                    src={vesselImages[shape][color]}
                    alt={`${color} ${shape} Ignea Aura vessel`}
                    className={`mx-auto max-h-[430px] w-full object-contain drop-shadow-[0_28px_22px_rgba(0,0,0,0.18)] ${finish === 'frosted' ? 'opacity-80 saturate-75 brightness-110 contrast-75' : ''}`}
                    whileHover={{ scale: 1.025, rotate: shape === 'round' ? 1.2 : -0.7 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                  />

                  {finish === 'frosted' && (
                    <div className="pointer-events-none absolute inset-[12%] rounded-[2rem] bg-white/10 backdrop-blur-[1px]" />
                  )}

                  {engraving !== 'none' && personalization && engraving !== 'artwork' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.72 }} className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 text-center font-serif text-sm tracking-[0.16em] text-white mix-blend-difference md:text-base">
                      {personalization}
                    </motion.div>
                  )}

                  {engraving === 'artwork' && artworkPreview && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} className="absolute left-1/2 top-[57%] h-16 w-16 -translate-x-1/2 overflow-hidden rounded-lg">
                      <img src={artworkPreview} alt="Uploaded artwork preview" className="h-full w-full object-contain grayscale" />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-black/10 pt-5 text-sm text-black/55">
              <span>{shape === 'round' ? 'Round rocks glass' : 'Square rocks glass'} · {color} · {finish}</span>
              <span>{productType === 'candle' ? 'Coconut-soy candle' : 'Drop-in refill'}</span>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.14)] md:p-8">
            <div className="space-y-7">
              <OptionGroup number="01" title="Vessel shape">
                <Segmented options={[['round', 'Round'], ['square', 'Square']]} value={shape} onChange={(v) => setShape(v as Shape)} />
              </OptionGroup>

              <OptionGroup number="02" title="Glass color">
                <div className="grid grid-cols-3 gap-2">
                  {(['blush', 'crystal', 'onyx'] as Color[]).map((item) => (
                    <button key={item} onClick={() => setColor(item)} className={`group rounded-2xl border px-3 py-4 text-left transition ${color === item ? 'border-white bg-white text-black' : 'border-white/15 bg-white/[0.04] text-white hover:border-white/35'}`}>
                      <span className={`mb-3 block h-7 w-7 rounded-full border ${item === 'blush' ? 'border-[#f4c6c3] bg-[#f4c6c3]' : item === 'crystal' ? 'border-white/60 bg-white/20' : 'border-white/20 bg-[#202020]'}`} />
                      <span className="text-sm capitalize">{item}</span>
                    </button>
                  ))}
                </div>
              </OptionGroup>

              <OptionGroup number="03" title="Glass finish">
                <Segmented options={[['polished', 'Polished'], ['frosted', 'Frosted']]} value={finish} onChange={(v) => setFinish(v as Finish)} />
                {finish === 'frosted' && <p className="mt-2 text-xs leading-5 text-white/40">Frosted is shown as a visual preview while final factory availability is being confirmed.</p>}
              </OptionGroup>

              <OptionGroup number="04" title="What are you buying?">
                <Segmented options={[['candle', 'Complete candle'], ['refill', 'Refill only']]} value={productType} onChange={(v) => setProductType(v as ProductType)} />
              </OptionGroup>

              {productType === 'candle' && (
                <OptionGroup number="05" title="Fragrance">
                  <select value={scent} onChange={(e) => setScent(e.target.value)} className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm outline-none focus:border-white/40">
                    {scents.map((item) => <option key={item} className="bg-black">{item}</option>)}
                  </select>
                </OptionGroup>
              )}

              <OptionGroup number={productType === 'candle' ? '06' : '05'} title="Personalization">
                <div className="grid grid-cols-2 gap-2">
                  {([['none', 'None'], ['initials', 'Initials'], ['name', 'Name / phrase'], ['artwork', 'Upload artwork']] as [Engraving, string][]).map(([key, label]) => (
                    <button key={key} onClick={() => setEngraving(key)} className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${engraving === key ? 'border-[#f4c6c3] bg-[#f4c6c3] text-black' : 'border-white/15 bg-white/[0.04] hover:border-white/35'}`}>
                      <span className="flex items-center justify-between gap-2">{label}{engraving === key && <Check size={15} />}</span>
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {(engraving === 'initials' || engraving === 'name') && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <input value={personalization} onChange={(e) => setPersonalization(e.target.value.slice(0, engraving === 'initials' ? 4 : 24))} placeholder={engraving === 'initials' ? 'Enter initials' : 'Enter name or short phrase'} className="mt-3 w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm outline-none placeholder:text-white/35 focus:border-white/40" />
                    </motion.div>
                  )}

                  {engraving === 'artwork' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {!artworkName ? (
                        <label className="mt-3 flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-white/25 bg-white/[0.04] px-4 py-4 transition hover:border-white/50">
                          <span className="flex items-center gap-3 text-sm text-white/75"><ImagePlus size={18} /> Upload logo or artwork</span>
                          <Upload size={17} />
                          <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="hidden" onChange={handleArtwork} />
                        </label>
                      ) : (
                        <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3">
                          <span className="max-w-[240px] truncate text-sm text-white/75">{artworkName}</span>
                          <button onClick={clearArtwork} aria-label="Remove uploaded artwork"><X size={17} /></button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </OptionGroup>

              <div className="border-t border-white/15 pt-6">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Your configuration</p>
                    <p className="mt-1 text-sm text-white/70">{engravingLabel}{engraving !== 'none' ? ' included' : ''}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl">{total} NOK</p>
                    <p className="text-xs text-white/45">≈ ${usd} USD</p>
                  </div>
                </div>

                <button className="group flex w-full items-center justify-between rounded-full bg-[#f4c6c3] px-6 py-4 font-medium text-black transition hover:bg-white">
                  <span>Continue to purchase</span>
                  <ChevronRight size={19} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-3 text-center text-xs leading-5 text-white/35">Checkout connection comes next. This preview does not charge customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OptionGroup: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div>
    <div className="mb-3 flex items-center gap-3">
      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#f4c6c3]">{number}</span>
      <h3 className="text-sm font-medium tracking-wide text-white/90">{title}</h3>
    </div>
    {children}
  </div>
);

const Segmented: React.FC<{ options: [string, string][]; value: string; onChange: (value: string) => void }> = ({ options, value, onChange }) => (
  <div className="grid grid-cols-2 rounded-2xl border border-white/15 bg-white/[0.04] p-1">
    {options.map(([key, label]) => (
      <button key={key} onClick={() => onChange(key)} className={`rounded-xl px-3 py-2.5 text-sm transition ${value === key ? 'bg-white text-black shadow-sm' : 'text-white/65 hover:text-white'}`}>
        {label}
      </button>
    ))}
  </div>
);

export default ProductConfigurator;