import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, CalendarDays, Clock3, Flame, MapPin, PartyPopper, Sparkles, Users, Wine } from 'lucide-react';

type ExperienceKey = 'atelier' | 'sip' | 'on-location';

const ExperiencesPage: React.FC = () => {
  const [active, setActive] = useState<ExperienceKey>('atelier');
  const [submitted, setSubmitted] = useState(false);

  const experiences = {
    atelier: {
      eyebrow: 'The full craft experience',
      title: 'Candle Atelier',
      subtitle: 'Slow down. Learn the craft. Make every step yours.',
      description: 'Our most hands-on workshop. Each guest works from their own station, weighs wax, melts it in an individual burner, explores the fragrance library, creates a scent blend and pours their candle into a reusable Ignea Aura rocks glass.',
      time: '2.5–3 hours',
      group: 'Best for intimate groups',
      image: '/EVENTPIC2.png',
      bullets: ['Individual burner station', 'Weigh, melt, blend and pour your own wax', 'Explore and blend from the fragrance library', 'Personalized rocks glass to take home']
    },
    sip: {
      eyebrow: 'The social experience',
      title: 'Sip & Scent',
      subtitle: 'A candle-making night with less waiting and more mingling.',
      description: 'A streamlined social format built for bars, restaurants and lively group nights. We arrive with hot wax ready in our large boiler. Guests choose a fragrance, measure their wax, blend, pour and personalize while enjoying cocktails or mocktails.',
      time: '1.5–2 hours',
      group: 'Ideal for social nights',
      image: '/EXPERIENCE SHOT.png',
      bullets: ['Hot wax prepared in our mobile boiler', 'Choose fragrance, measure, blend and pour', 'Perfect for bars, restaurants and date-night concepts', 'Fast, polished and highly social']
    },
    'on-location': {
      eyebrow: 'Mobile activations & partnerships',
      title: 'Ignea Aura On Location',
      subtitle: 'Bring the candle bar to your crowd.',
      description: 'A flexible pop-up format for festivals, hotels, corporate events, brand activations and partner venues. We tailor the setup to the crowd, from quick fragrance-and-pour stations to fuller workshop moments.',
      time: 'Custom format',
      group: 'Built for larger audiences',
      image: '/Firefly_Gemini Flash_Hyper-realistic, stylish photo of a luxury candle-making workshop. A diverse group of 746377.png',
      bullets: ['Festivals and markets', 'Corporate and brand activations', 'Hotels, restaurants and venue partnerships', 'Private celebrations and community events']
    }
  } as const;

  const current = experiences[active];

  return (
    <main className="bg-[#f7f2ec] text-black pt-14">
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#f4c6c3]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/45">Ignea Aura Experiences</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">Choose how you want to experience the flame.</h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-black/60 md:text-lg">Join one of our workshops, host a private gathering, or invite Ignea Aura into your venue, festival or brand event.</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {([
              ['atelier', 'Candle Atelier'],
              ['sip', 'Sip & Scent'],
              ['on-location', 'On Location']
            ] as [ExperienceKey, string][]).map(([key, label]) => (
              <button key={key} onClick={() => setActive(key)} className={`rounded-full border px-5 py-3 text-sm transition ${active === key ? 'border-black bg-black text-white' : 'border-black/15 bg-white/70 hover:border-black/35'}`}>{label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111] text-white shadow-[0_35px_100px_rgba(0,0,0,0.14)]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[520px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img key={current.image} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} src={current.image} alt={current.title} className="absolute inset-0 h-full w-full object-cover" />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/75">
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur"><Clock3 size={13} className="mr-1.5 inline" />{current.time}</span>
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur"><Users size={13} className="mr-1.5 inline" />{current.group}</span>
              </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f4c6c3]">{current.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">{current.title}</h2>
              <p className="mt-3 text-lg text-white/75">{current.subtitle}</p>
              <p className="mt-6 leading-7 text-white/60">{current.description}</p>

              <div className="mt-8 space-y-3">
                {current.bullets.map((item) => <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm text-white/75"><Sparkles size={16} className="mt-0.5 shrink-0 text-[#f4c6c3]" />{item}</div>)}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <button className="group flex items-center gap-2 rounded-full bg-[#f4c6c3] px-5 py-3 text-sm font-medium text-black transition hover:bg-white">Plan this experience <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button>
                <button className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:bg-white hover:text-black">Private group inquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl py-4">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">Three ways to work with us</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">From intimate tables to a festival crowd.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <PathCard icon={<Flame size={20} />} title="Attend a workshop" copy="Join a scheduled Candle Atelier or Sip & Scent experience." />
            <PathCard icon={<PartyPopper size={20} />} title="Host a private event" copy="Birthdays, bridal events, team gatherings, social clubs and private celebrations." />
            <PathCard icon={<Building2 size={20} />} title="Partner with Ignea Aura" copy="Bars, restaurants, hotels, festivals, corporate teams and brand activations." />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/65 shadow-[0_25px_80px_rgba(0,0,0,0.06)] backdrop-blur lg:grid-cols-[.9fr_1.1fr]">
          <div className="bg-[#f2d8d4] p-7 md:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black/45">Bring Ignea Aura to your event</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Have a venue, crowd or idea? Let’s build the right format.</h2>
            <p className="mt-5 leading-7 text-black/60">Tell us what you are planning and we’ll shape the setup around your guest count, timing and venue. Full workshop, express candle bar or something in between.</p>
            <div className="mt-8 space-y-4 text-sm text-black/65">
              <p><MapPin size={16} className="mr-2 inline" />Venue partnerships & pop-ups</p>
              <p><CalendarDays size={16} className="mr-2 inline" />One-night events or recurring activations</p>
              <p><Wine size={16} className="mr-2 inline" />Perfect for bars, hotels and hospitality partners</p>
            </div>
          </div>

          <div className="p-7 md:p-10 lg:p-12">
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your name" className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none focus:border-black/30" />
                <input required type="email" placeholder="Email" className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none focus:border-black/30" />
                <select className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none sm:col-span-2"><option>What are you planning?</option><option>Private workshop</option><option>Bar or restaurant event</option><option>Festival or market</option><option>Corporate or brand activation</option><option>Hotel or hospitality event</option><option>Something else</option></select>
                <input placeholder="City / venue" className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none" />
                <input placeholder="Approx. guest count" className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none" />
                <input type="date" className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none" />
                <select className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none"><option>Preferred format</option><option>Full Candle Atelier</option><option>Express Sip & Scent</option><option>Mobile candle bar</option><option>Not sure yet</option></select>
                <textarea placeholder="Tell us about your event" rows={4} className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none sm:col-span-2" />
                <button className="group flex items-center justify-between rounded-full bg-black px-6 py-4 text-white sm:col-span-2">Send event inquiry <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
                <p className="text-xs leading-5 text-black/40 sm:col-span-2">Preview form only. We’ll connect this to your real inquiry workflow before launch.</p>
              </form>
            ) : (
              <div className="flex min-h-[360px] items-center justify-center text-center"><div><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c6c3]"><Sparkles size={20} /></div><h3 className="font-serif text-3xl">Beautiful. We have the idea.</h3><p className="mt-3 max-w-md text-black/55">This is still the Website 2.0 preview, so nothing was actually sent. The final version will route inquiries to Ignea Aura.</p><button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline underline-offset-4">Back to the form</button></div></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const PathCard: React.FC<{ icon: React.ReactNode; title: string; copy: string }> = ({ icon, title, copy }) => (
  <motion.article whileHover={{ y: -5 }} className="rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.04)]">
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c6c3]/60">{icon}</div>
    <h3 className="font-serif text-2xl">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
  </motion.article>
);

export default ExperiencesPage;
