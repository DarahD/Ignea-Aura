import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ImagePlus, RotateCcw, Upload, X } from 'lucide-react';

type Shape = 'round' | 'square';
type Color = 'crystal' | 'blush' | 'onyx';
type Finish = 'polished' | 'frosted';
type ProductType = 'candle' | 'refill';
type Engraving = 'none' | 'initials' | 'name' | 'artwork';

const RAW = 'https://raw.githubusercontent.com/DarahD/Ignea-Aura/website-2.0/public/ignea-aura-web-pics/%20Products';
const vesselImages: Record<Shape, Record<Color, string>> = {
  round: {
    crystal: `${RAW}/clear-round-glass.png`,
    blush: `${RAW}/pink-round-glass.png`,
    onyx: `${RAW}/onyx-round-glass.png`,
  },
  square: {
    crystal: `${RAW}/clear-square-glass.png`,
    blush: `${RAW}/pink-square-glass.png`,
    onyx: `${RAW}/Onyx-Square-glass.png`,
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
  const engravingLabel = useMemo(() => engraving === 'none' ? 'No engraving' : engraving === 'initials' ? 'Initials' : engraving === 'name' ? 'Name or phrase' : 'Custom artwork', [engraving]);

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
    setRotation({ x: y * -7, y: x * 13 });
  };

  return (
    <section className="bg-[#f7f1eb] px-4 pb-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,.08)]">
        <div className="grid lg:grid-cols-[1.12fr_.88fr]">
          <div className="relative min-h-[680px] overflow-hidden bg-[#efe5dc] p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(255,255,255,.95),transparent_30%),linear-gradient(135deg,#efe5dc_0%,#faf6f1_45%,#e2d5ca_100%)]" />
            <div className="relative z-10 max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/45">Your vision. Our craft.</p>
              <h2 className="mt-3 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">Make It Yours.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-black/60">Choose a luxury rocks glass, then shape the finish, fragrance and personalization around you.</p>
            </div>

            <div ref={previewRef} onPointerMove={handlePointerMove} onPointerLeave={() => setRotation({ x: 0, y: 0 })} className="relative z-10 mx-auto mt-2 flex min-h-[460px] max-w-[650px] cursor-grab items-center justify-center [perspective:1200px] active:cursor-grabbing md:-mt-14 md:ml-auto md:w-[72%]">
              <AnimatePresence mode="wait">
                <motion.div key={`${shape}-${color}-${finish}`} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1, rotateX: rotation.x, rotateY: rotation.y }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .4 }} className="relative w-full [transform-style:preserve-3d]">
                  <div className="absolute inset-x-[20%] bottom-[7%] h-12 rounded-[50%] bg-black/20 blur-2xl" />
                  <img src={vesselImages[shape][color]} alt={`${color} ${shape} Ignea Aura rocks glass`} className={`relative mx-auto max-h-[470px] w-full object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,.18)] transition-all duration-500 ${finish === 'frosted' ? 'brightness-110 saturate-50 contrast-75 opacity-80' : ''}`} />
                  {finish === 'frosted' && <div className="pointer-events-none absolute inset-[14%] rounded-[2rem] bg-white/10 backdrop-blur-[1.2px]" />}
                  {engraving !== 'none' && engraving !== 'artwork' && personalization && <div className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 text-xl font-medium tracking-[0.18em] text-white mix-blend-difference md:text-2xl">{personalization}</div>}
                  {engraving === 'artwork' && artworkPreview && <img src={artworkPreview} alt="Artwork preview" className="pointer-events-none absolute left-1/2 top-[51%] h-20 w-20 -translate-x-1/2 object-contain opacity-60 grayscale mix-blend-difference" />}
                </motion.div>
              </AnimatePresence>
              <button onClick={() => setRotation({ x: 0, y: 0 })} className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs text-black/60 backdrop-blur"><RotateCcw size={14} /> Move to explore</button>
            </div>
          </div>

          <div className="bg-[#111] p-6 text-white md:p-8 lg:p-9">
            <div className="mb-7 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Customize your candle</p><span className="text-xs text-white/35">Live preview</span></div>
            <div className="space-y-6">
              <Option number="01" title="Vessel shape"><Segmented options={[['round','Round'],['square','Square']]} value={shape} onChange={(v)=>setShape(v as Shape)} /></Option>
              <Option number="02" title="Glass color"><div className="grid grid-cols-3 gap-2">{(['crystal','blush','onyx'] as Color[]).map(item => <button key={item} onClick={()=>setColor(item)} className={`rounded-xl border px-3 py-3 text-left transition ${color===item?'border-white bg-white text-black':'border-white/15 bg-white/[.04] hover:border-white/35'}`}><span className={`mb-2 block h-7 w-7 rounded-full border ${item==='blush'?'border-[#f4c6c3] bg-[#f4c6c3]':item==='crystal'?'border-white/70 bg-white/20':'border-white/20 bg-[#181818]'}`} /><span className="text-xs">{item==='crystal'?'Clear':item==='blush'?'Blush Pink':'Onyx Black'}</span></button>)}</div></Option>
              <Option number="03" title="Glass finish"><Segmented options={[['polished','Polished'],['frosted','Frosted']]} value={finish} onChange={(v)=>setFinish(v as Finish)} />{finish==='frosted' && <p className="mt-2 text-xs leading-5 text-white/40">Frosted is a visual preview until factory availability is confirmed.</p>}</Option>
              <Option number="04" title="Candle or refill"><Segmented options={[['candle','Complete Candle'],['refill','Refill Only']]} value={productType} onChange={(v)=>setProductType(v as ProductType)} /></Option>
              {productType==='candle' && <Option number="05" title="Fragrance"><select value={scent} onChange={e=>setScent(e.target.value)} className="w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3.5 text-sm outline-none">{scents.map(item=><option key={item} className="bg-black">{item}</option>)}</select></Option>}
              <Option number={productType==='candle'?'06':'05'} title="Personalization">
                <div className="grid grid-cols-2 gap-2">{([['none','None'],['initials','Initials'],['name','Name / Phrase'],['artwork','Upload Artwork']] as [Engraving,string][]).map(([key,label])=><button key={key} onClick={()=>setEngraving(key)} className={`rounded-xl border px-3 py-3 text-left text-xs transition ${engraving===key?'border-[#f4c6c3] bg-[#f4c6c3] text-black':'border-white/15 bg-white/[.04] hover:border-white/35'}`}><span className="flex items-center justify-between">{label}{engraving===key&&<Check size={14}/>}</span></button>)}</div>
                {(engraving==='initials'||engraving==='name') && <input value={personalization} onChange={e=>setPersonalization(e.target.value.slice(0,engraving==='initials'?5:24))} placeholder={engraving==='initials'?'Enter initials':'Enter name or short phrase'} className="mt-3 w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3.5 text-sm outline-none placeholder:text-white/35" />}
                {engraving==='artwork' && (!artworkName ? <label className="mt-3 flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-white/25 bg-white/[.04] px-4 py-4"><span className="flex items-center gap-3 text-sm text-white/75"><ImagePlus size={18}/> Upload logo or artwork</span><Upload size={17}/><input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="hidden" onChange={handleArtwork}/></label> : <div className="mt-3 flex items-center justify-between rounded-xl border border-white/15 bg-white/[.06] px-4 py-3"><span className="max-w-[220px] truncate text-sm text-white/75">{artworkName}</span><button onClick={()=>{setArtworkName('');setArtworkPreview(null);}}><X size={17}/></button></div>)}
              </Option>
              <div className="border-t border-white/15 pt-6"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.22em] text-white/35">Your configuration</p><p className="mt-1 text-sm text-white/65">{shape} · {color} · {finish} · {engravingLabel}</p></div><div className="text-right"><p className="text-3xl font-semibold">{total} NOK</p><p className="text-xs text-white/40">≈ ${usd} USD</p></div></div><button className="group flex w-full items-center justify-between rounded-full bg-[#f4c6c3] px-6 py-4 font-medium text-black transition hover:bg-white"><span>Continue to purchase</span><ChevronRight size={19}/></button><p className="mt-3 text-center text-xs leading-5 text-white/30">Preview only. Checkout is not connected yet.</p></div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 bg-[#faf7f3] px-6 py-8 md:px-10">
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[.28em] text-black/45">Available finishes & colors</p><h3 className="mt-2 text-3xl font-semibold tracking-[-.03em]">The vessel, your way.</h3></div><p className="hidden text-xs uppercase tracking-[.18em] text-black/35 md:block">Round and square styles</p></div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4"><FinishCard label="Clear" image={vesselImages.round.crystal}/><FinishCard label="Frosted Clear" image={vesselImages.round.crystal} frosted/><FinishCard label="Blush Pink" image={vesselImages.round.blush}/><FinishCard label="Onyx Black" image={vesselImages.round.onyx}/></div>
        </div>
      </div>
    </section>
  );
};

const Option: React.FC<{number:string;title:string;children:React.ReactNode}> = ({number,title,children}) => <div><div className="mb-3 flex items-center gap-3"><span className="text-[10px] font-semibold tracking-[.18em] text-[#f4c6c3]">{number}</span><h3 className="text-sm font-medium text-white/90">{title}</h3></div>{children}</div>;

const Segmented: React.FC<{options:[string,string][];value:string;onChange:(v:string)=>void}> = ({options,value,onChange}) => <div className="grid grid-cols-2 rounded-xl border border-white/15 bg-white/[.04] p-1">{options.map(([key,label])=><button key={key} onClick={()=>onChange(key)} className={`rounded-lg px-3 py-2.5 text-sm transition ${value===key?'bg-white text-black':'text-white/65 hover:text-white'}`}>{label}</button>)}</div>;

const FinishCard: React.FC<{label:string;image:string;frosted?:boolean}> = ({label,image,frosted}) => <div className="rounded-2xl border border-black/10 bg-white p-3 text-center"><div className="flex h-36 items-center justify-center"><img src={image} alt={label} className={`max-h-32 w-full object-contain ${frosted?'brightness-110 saturate-50 contrast-75 opacity-80':''}`}/></div><p className="mt-2 text-xs font-semibold uppercase tracking-[.14em]">{label}</p></div>;

export default ProductConfigurator;