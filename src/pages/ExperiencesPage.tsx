import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, CalendarDays, Clock3, Flame, MapPin, PartyPopper, Sparkles, Users, Wine } from 'lucide-react';

type ExperienceKey = 'atelier' | 'sip' | 'on-location';
const EVENT_RAW = 'https://raw.githubusercontent.com/DarahD/Ignea-Aura/website-2.0/public/ignea-aura-web-pics/Events';

const ExperiencesPage: React.FC = () => {
  const [active, setActive] = useState<ExperienceKey>('atelier');
  const [submitted, setSubmitted] = useState(false);

  const experiences = {
    atelier: {
      eyebrow: 'The full craft experience',
      title: 'Candle Atelier',
      subtitle: 'Slow down. Learn the craft. Make every step yours.',
      description: 'Our most hands-on workshop. Each guest works at their own station, weighs wax, melts it in an individual burner, explores the fragrance library, creates a scent blend and pours into a reusable Ignea Aura rocks glass.',
      time: '2.5–3 hours',
      group: 'Best for intimate groups',
      image: `${EVENT_RAW}/workshop-scene.png`,
      bullets: ['Individual burner station', 'Weigh, melt, blend and pour your own wax', 'Explore and blend from the fragrance library', 'Personalized rocks glass to take home']
    },
    sip: {
      eyebrow: 'The social experience',
      title: 'Sip & Scent',
      subtitle: 'Less waiting. More mingling.',
      description: 'A streamlined format for bars, restaurants and lively group nights. We arrive with hot wax ready in the large boiler. Guests choose a fragrance, measure their wax, blend, pour and personalize while enjoying cocktails or mocktails.',
      time: '1.5–2 hours',
      group: 'Ideal for social nights',
      image: `${EVENT_RAW}/event-group-Scent-%26-Sip.png`,
      bullets: ['Hot wax prepared in our mobile boiler', 'Choose fragrance, measure, blend and pour', 'Perfect for bars, restaurants and date-night concepts', 'Fast, polished and highly social']
    },
    'on-location': {
      eyebrow: 'Mobile activations & partnerships',
      title: 'Ignea Aura On Location',
      subtitle: 'Bring the candle bar to your crowd.',
      description: 'A flexible pop-up format for festivals, hotels, corporate events, brand activations and partner venues. We tailor the setup to the crowd, from quick fragrance-and-pour stations to fuller workshop moments.',
      time: 'Custom format',
      group: 'Built for larger audiences',
      image: `${EVENT_RAW}/cocktail-candle.png`,
      bullets: ['Festivals and markets', 'Corporate and brand activations', 'Hotels, restaurants and venue partnerships', 'Private celebrations and community events']
    }
  } as const;

  const current = experiences[active];

  return (
    <main className="bg-[#f7f2ec] pt-14 text-black">
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#f4c6c3]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.3em] text-black/45">Ignea Aura Experiences</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] md:text-7xl lg:text-8xl">Choose how you want to experience the flame.</h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-black/60 md:text-lg">Join a workshop, host a private gathering, or invite Ignea Aura into your venue, festival or brand event.</p>
          <div className="mt-10 flex flex-wrap gap-3">{([['atelier','Candle Atelier'],['sip','Sip & Scent'],['on-location','On Location']] as [ExperienceKey,string][]).map(([key,label])=><button key={key} onClick={()=>setActive(key)} className={`rounded-full border px-5 py-3 text-sm font-medium transition ${active===key?'border-black bg-black text-white':'border-black/15 bg-white/70 hover:border-black/35'}`}>{label}</button>)}</div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111] text-white shadow-[0_35px_100px_rgba(0,0,0,.14)]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[520px] overflow-hidden">
              <AnimatePresence mode="wait"><motion.img key={current.image} initial={{opacity:0,scale:1.03}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.45}} src={current.image} alt={current.title} className="absolute inset-0 h-full w-full object-cover" /></AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-3 text-xs uppercase tracking-[.18em] text-white/80"><span className="rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur"><Clock3 size={13} className="mr-1.5 inline" />{current.time}</span><span className="rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur"><Users size={13} className="mr-1.5 inline" />{current.group}</span></div>
            </div>
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#f4c6c3]">{current.eyebrow}</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] md:text-5xl">{current.title}</h2><p className="mt-3 text-lg text-white/75">{current.subtitle}</p><p className="mt-6 leading-7 text-white/60">{current.description}</p>
              <div className="mt-8 space-y-3">{current.bullets.map(item=><div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm text-white/75"><Sparkles size={16} className="mt-0.5 shrink-0 text-[#f4c6c3]" />{item}</div>)}</div>
              <div className="mt-9 flex flex-wrap gap-3"><button className="group flex items-center gap-2 rounded-full bg-[#f4c6c3] px-5 py-3 text-sm font-medium text-black transition hover:bg-white">Plan this experience <ArrowRight size={16}/></button><button className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:bg-white hover:text-black">Private group inquiry</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.28em] text-black/45">Three ways to work with us</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-.035em] md:text-5xl">From intimate tables to a festival crowd.</h2><div className="mt-9 grid gap-4 md:grid-cols-3"><PathCard icon={<Flame size={20}/>} title="Attend a workshop" copy="Join a scheduled Candle Atelier or Sip & Scent experience."/><PathCard icon={<PartyPopper size={20}/>} title="Host a private event" copy="Birthdays, bridal events, teams, social clubs and private celebrations."/><PathCard icon={<Building2 size={20}/>} title="Partner with Ignea Aura" copy="Bars, restaurants, hotels, festivals, companies and brand activations."/></div></div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,.06)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden bg-[#f2d8d4] p-7 md:p-10 lg:p-12"><img src={`${EVENT_RAW}/event-engraving-close-up.png`} alt="Ignea Aura event engraving" className="absolute inset-0 h-full w-full object-cover opacity-20"/><div className="relative"><p className="text-xs font-semibold uppercase tracking-[.26em] text-black/50">Bring Ignea Aura to your event</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.035em] md:text-5xl">Have a venue, crowd or idea? Let’s build the right format.</h2><p className="mt-5 leading-7 text-black/65">Tell us what you are planning and we’ll shape the setup around your guest count, timing and venue.</p><div className="mt-8 space-y-4 text-sm text-black/70"><p><MapPin size={16} className="mr-2 inline"/>Venue partnerships & pop-ups</p><p><CalendarDays size={16} className="mr-2 inline"/>One-night or recurring activations</p><p><Wine size={16} className="mr-2 inline"/>Bars, hotels and hospitality partners</p></div></div></div>
          <div className="p-7 md:p-10 lg:p-12">{!submitted?<form onSubmit={e=>{e.preventDefault();setSubmitted(true);}} className="grid gap-4 sm:grid-cols-2"><input required placeholder="Your name" className="rounded-xl border border-black/10 px-4 py-3.5 outline-none"/><input required type="email" placeholder="Email" className="rounded-xl border border-black/10 px-4 py-3.5 outline-none"/><select className="rounded-xl border border-black/10 px-4 py-3.5 sm:col-span-2"><option>What are you planning?</option><option>Private workshop</option><option>Bar or restaurant event</option><option>Festival or market</option><option>Corporate or brand activation</option><option>Hotel or hospitality event</option></select><input placeholder="City / venue" className="rounded-xl border border-black/10 px-4 py-3.5"/><input placeholder="Approx. guest count" className="rounded-xl border border-black/10 px-4 py-3.5"/><input type="date" className="rounded-xl border border-black/10 px-4 py-3.5"/><select className="rounded-xl border border-black/10 px-4 py-3.5"><option>Preferred format</option><option>Full Candle Atelier</option><option>Express Sip & Scent</option><option>Mobile candle bar</option><option>Not sure yet</option></select><textarea placeholder="Tell us about your event" rows={4} className="rounded-xl border border-black/10 px-4 py-3.5 sm:col-span-2"/><button className="flex items-center justify-between rounded-full bg-black px-6 py-4 text-white sm:col-span-2">Send event inquiry <ArrowRight size={17}/></button><p className="text-xs text-black/40 sm:col-span-2">Preview only. The live inquiry connection comes before launch.</p></form>:<div className="flex min-h-[360px] items-center justify-center text-center"><div><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c6c3]"><Sparkles size={20}/></div><h3 className="text-3xl font-semibold">We have the idea.</h3><p className="mt-3 max-w-md text-black/55">Nothing was sent because this is still Website 2.0 preview.</p><button onClick={()=>setSubmitted(false)} className="mt-6 text-sm underline underline-offset-4">Back to the form</button></div></div>}</div>
        </div>
      </section>
    </main>
  );
};

const PathCard: React.FC<{icon:React.ReactNode;title:string;copy:string}> = ({icon,title,copy}) => <motion.article whileHover={{y:-5}} className="rounded-[1.7rem] border border-black/10 bg-white/75 p-6 shadow-[0_18px_55px_rgba(0,0,0,.04)]"><div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c6c3]/60">{icon}</div><h3 className="text-2xl font-semibold tracking-[-.025em]">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{copy}</p></motion.article>;

export default ExperiencesPage;