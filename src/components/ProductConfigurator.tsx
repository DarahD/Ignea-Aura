import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Diamond, Gift, ImagePlus, Leaf, RotateCcw, Upload, X } from 'lucide-react';

type Shape = 'round' | 'square';
type Color = 'crystal' | 'blush' | 'onyx';
type Finish = 'polished' | 'frosted';
type ProductType = 'candle' | 'refill';
type Engraving = 'none' | 'initials' | 'name' | 'artwork';

const vesselImages: Record<Shape, Record<Color, string>> = {
  round: {
    crystal: '/ignea-aura-web-pics/%20Products/clear-round-glass.png',
    blush: '/ignea-aura-web-pics/%20Products/pink-round-glass.png',
    onyx: '/ignea-aura-web-pics/%20Products/onyx-round-glass.png',
  },
  square: {
    crystal: '/ignea-aura-web-pics/%20Products/clear-square-glass.png',
    blush: '/ignea-aura-web-pics/%20Products/pink-square-glass.png',
    onyx: '/ignea-aura-web-pics/%20Products/Onyx-Square-glass.png',
  },
};

const scents = ['Signature Aura', 'Soft Woods', 'Clean Linen', 'Unscented'];
const engravingPricing: Record<Engraving, number> = { none: 0, initials: 100, name: 120, artwork: 150 };

const ProductConfigurator: React.FC = () => {
  const [shape, setShape] = useState<Shape>('round');
  const [color, setColor] = useState<Color>('blush');
  const [finish, setFinish] = useState<Finish>('polished');
  const [productType, setProductType] = useState<ProductType>('candle');
  const [scent, setScent] = useState(scents[0]);
  const [engraving, setEngraving] = useState<Engraving>('none');
  const [personalization, setPersonalization] = useState('A | R');
  const [artworkName, setArtworkName] = useState('');
  const [artworkPreview, setArtworkPreview] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

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

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!previewRef.current) return;
    const rect = previewRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -8, y: x * 14 });
  };

  return (
    <section className="bg-[#f5efe8] px-4 pb-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#eee4da] shadow-[0_35px_100px_rgba(0,0,0,0.10)]">
        <div className="grid lg:grid-cols-[1.16fr_.84fr]">
          <div className="relative min-h-[720px] overflow-hidden p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.95),transparent_34%),linear-gradient(135deg,#efe4d9_0%,#f7f1eb_42%,#ddd0c3_100%)]" />
            <div className="pointer-events-none absolute right-[-6%] top-[5%] h-72 w-72 rounded-full bg-black/10 blur-3xl" />

            <div className="relative z-10 max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/45">Your vision. Our craft.</p>
              <h2 className="mt-3 font-serif text-5xl leading-[0.9] md:text-7xl">Make It<br />Yours.</h2>
              <p className="mt-5 max-w-xs text-sm leading-6 text-black/60">Choose your vessel, finish, fragrance and a personal touch. Build a candle designed to live beyond the flame.</p>

              <div className="mt-8 space-y-5 text-sm text-black/65">
                <MiniFeature icon={<Diamond size={17} />} title="Premium craftsmanship" copy="Heavy rocks glass designed to be reused." />
                <MiniFeature icon={<Leaf size={17} />} title="A more thoughtful tomorrow" copy="Refill. Reuse. Repeat." />
                <MiniFeature icon={<Gift size={17} />} title="A meaningful gift" copy="Personalized for the moments that matter." />
              </div>
            </div>

            <div ref={previewRef} onPointerMove={handlePointerMove} onPointerLeave={() => setRotation({ x: 0, y: 0 })} className="relative z-10 mx-auto mt-4 flex min-h-[390px] max-w-[620px] cursor-grab items-center justify-center [perspective:1200px] active:cursor-grabbing md:-mt-20 md:ml-auto md:w-[68%]">
              <AnimatePresence mode="wait">
                <motion.div key={`${shape}-${color}-${finish}-${productType}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1, rotateX: rotation.x, rotateY: rotation.y }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="relative w-full [transform-style:preserve-3d]">
                  <div className="absolute inset-x-[18%] bottom-[5%] h-14 rounded-[50%] bg-black/25 blur-2xl" />
                  <img src={vesselImages[shape][color]} alt={`${color} ${shape} Ignea Aura rocks glass`} className={`relative mx-auto max-h-[430px] w-full object-contain drop-shadow-[0_30px_24px_rgba(0,0,0,0.18)] transition-all duration-500 ${finish === 'frosted' ? 'brightness-110 saturate-50 contrast-75 opacity-80' : ''}`} />
                  {finish === 'frosted' && <div className="pointer-events-none absolute inset-[14%] rounded-[2rem] bg-white/10 backdrop-blur-[1.2px]" />}
                  {engraving !== 'none' && engraving !== 'artwork' && personalization && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} className="pointer-events-none absolute left-1/2 top-[53%] -translate-x-1/2 font-serif text-xl tracking-[0.18em] text-white mix-blend-difference md:text-2xl">{personalization}</motion.div>}
                  {engraving === 'artwork' && artworkPreview && <img src={artworkPreview} alt="Artwork preview" className="pointer-events-none absolute left-1/2 top-[50%] h-20 w-20 -translate-x-1/2 object-contain opacity-60 grayscale mix-blend-difference" />}
                </motion.div>
              </AnimatePresence>
              <button onClick={() => setRotation({ x: 0, y: 0 })} className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs text-black/55 backdrop-blur"><RotateCcw size={14} /> Drag to explore</button>
            </div>

            <p className="relative z-10 mt-2 text-center font-serif text-xl italic text-black/65">More than a candle. A lasting expression.</p>
          </div>

          <div className="bg-[#111] p-6 text-white md:p-8 lg:p-9">
            <div className="mb-6 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Customize your candle</p><p className="text-xs text-white/40">Live preview</p></div>
            <div className="space-y-6">
              <OptionGroup number="01" title="Select shape"><Segmented options={[['round', 'Round'], ['square', 'Square']]} value={shape} onChange={(v) => setShape(v as Shape)} /></OptionGroup>
              <OptionGroup number="02" title="Select color"><div className="grid grid-cols-3 gap-2">{(['crystal', 'blush', 'onyx'] as Color[]).map((item) => <button key={item} onClick={() => setColor(item)} className={`rounded-2xl border px-3 py-3 text-left transition ${color === item ? 'border-white bg-white text-black' : 'border-white/15 bg-white/[0.04] hover:border-white/35'}`}><span className={`mb-2 block h-7 w-7 rounded-full border ${item === 'blush' ? 'border-[#f4c6c3] bg-[#f4c6c3]' : item === 'crystal' ? 'border-white/60 bg-white/20' : 'border-white/20 bg-[#181818]'}`} /><span className="text-xs">{item === 'crystal' ? 'Clear' : item === 'blush' ? 'Blush Pink' : 'Onyx Black'}</span></button>)}</div></OptionGroup>
              <OptionGroup number="03" title="Select finish"><Segmented options={[['polished', 'Polished'], ['frosted', 'Frosted']]} value={finish} onChange={(v) => setFinish(v as Finish)} />{finish === 'frosted' && <p className="mt-2 text-xs leading-5 text-white/40">Frosted clear is represented in this preview while final factory availability is confirmed.</p>}</OptionGroup>
              <OptionGroup number="04" title="Choose candle or refill"><Segmented options={[['candle', 'Complete Candle'], ['refill', 'Refill Only']]} value={productType} onChange={(v) => setProductType(v as ProductType)} /></OptionGroup>
              {productType === 'candle' && <OptionGroup number="05" title="Select fragrance"><select value={scent} onChange={(e) => setScent(e.target.value)} className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm outline-none">{scents.map((item) => <option key={item} className="bg-black">{item}</option>)}</select></OptionGroup>}
              <OptionGroup number={productType === 'candle' ? '06' : '05'} title="Personalization"><div className="grid grid-cols-2 gap-2">{([['none', 'None'], ['initials', 'Initials'], ['name', 'Name / Phrase'], ['artwork', 'Upload Artwork']] as [Engraving, string][]).map(([key, label]) => <button key={key} onClick={() => setEngraving(key)} className={`rounded-2xl border px-3 py-3 text-left text-xs transition ${engraving === key ? 'border-[#f4c6c3] bg-[#f4c6c3] text-black' : 'border-white/15 bg-white/[0.04] hover:border-white/35'}`}><span className="flex items-center justify-between gap-2">{label}{engraving === key && <Check size={14} />}</span></button>)}</div>
                <AnimatePresence>{(engraving === 'initials' || engraving === 'name') && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><input value={personalization} onChange={(e) => setPersonalization(e.target.value.slice(0, engraving === 'initials' ? 5 : 24))} placeholder={engraving === 'initials' ? 'Enter initials' : 'Enter name or short phrase'} className="mt-3 w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm outline-none placeholder:text-white/35" /></motion.div>}{engraving === 'artwork' && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">{!artworkName ? <label className="mt-3 flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-white/25 bg-white/[0.04] px-4 py-4"><span className="flex items-center gap-3 text-sm text-white/75"><ImagePlus size={18} /> Upload logo or artwork</span><Upload size={17} /><input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="hidden" onChange={handleArtwork} /></label> : <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3"><span className="max-w-[240px] truncate text-sm text-white/75">{artworkName}</span><button onClick={() => { setArtworkName(''); setArtworkPreview(null); }} aria-label="Remove uploaded artwork"><X size={17} /></button></div>}</motion.div>}</AnimatePresence>
              </OptionGroup>
              <div className="border-t border-white/15 pt-6"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Your configuration</p><p className="mt-1 text-sm text-white/65">{shape} · {color} · {finish} · {engravingLabel}</p></div><div className="text-right"><p className="font-serif text-3xl">{total} NOK</p><p className="text-xs text-white/40">≈ ${usd} USD</p></div></div><button className="group flex w-full items-center justify-between rounded-full bg-[#f4c6c3] px-6 py-4 font-medium text-black transition hover:bg-white"><span>Continue to purchase</span><ChevronRight size={19} className="transition-transform group-hover:translate-x-1" /></button><p className="mt-3 text-center text-xs leading-5 text-white/30">Preview only. Checkout will be connected before launch.</p></div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 bg-[#f8f4ef] px-6 py-8 md:px-10"><div className="mb-5 flex items-end justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">Available finishes & colors</p><h3 className="mt-2 font-serif text-3xl">The vessel, your way.</h3></div><p className="hidden text-xs uppercase tracking-[0.18em] text-black/35 md:block">Round and square styles</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4"><FinishCard label="Clear" image="/ignea-aura-web-pics/%20Products/clear-round-glass.png" /><FinishCard label="Frosted Clear" image="/ignea-aura-web-pics/%20Products/clear-round-glass.png" frosted /><FinishCard label="Blush Pink" image="/ignea-aura-web-pics/%20Products/pink-round-glass.png" /><FinishCard label="Onyx Black" image="/ignea-aura-web-pics/%20Products/onyx-round-glass.png" /></div><p className="mt-7 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">Designed for luxury. Made to be reused.</p></div>
      </div>
    </section>
  );
};

const MiniFeature: React.FC<{ icon: React.ReactNode; title: string; copy: string }> = ({ icon, title, copy }) => <div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-sm">{icon}</div><div><p className="text-xs font-semibold uppercase tracking-[0.08em]">{title}</p><p className="mt-1 text-xs leading-5 text-black/50">{copy}</p></div></div>;
const OptionGroup: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => <div><div className="mb-3 flex items-center gap-3"><span className="text-[10px] font-semibold tracking-[0.18em] text-[#f4c6c3]">{number}</span><h3 className="text-sm font-medium tracking-wide text-white/90">{title}</h3></div>{children}</div>;
const Segmented: React.FC<{ options: [string, string][]; value: string; onChange: (value: string) => void }> = ({ options, value, onChange }) => <div className="grid grid-cols-2 rounded-2xl border border-white/15 bg-white/[0.04] p-1">{options.map(([key, label]) => <button key={key} onClick={() => onChange(key)} className={`rounded-xl px-3 py-2.5 text-sm transition ${value === key ? 'bg-white text-black shadow-sm' : 'text-white/65 hover:text-white'}`}>{label}</button>)}</div>;
const FinishCard: React.FC<{ label: string; image: string; frosted?: boolean }> = ({ label, image, frosted }) => <div className="rounded-2xl bg-white p-3 text-center shadow-sm"><div className="flex h-36 items-center justify-center overflow-hidden"><img src={image} alt={label} className={`h-full w-full object-contain ${frosted ? 'brightness-110 saturate-40 contrast-75 opacity-80' : ''}`} /></div><p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em]">{label}</p></div>;

export default ProductConfigurator;
