import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Heart, Globe, Sparkles } from 'lucide-react';

const BioPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Flame className="h-12 w-12 text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Founder's Story
            </h1>
            <p className="text-xl text-pink-400 mb-8 font-light">
              From Ashes to Aura. A Journey of Resilience and Renewal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story with Photo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none lg:col-span-2"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                My journey to Ignea Aura began in the ashes of endings. Like the phoenix that inspires this brand, 
                I have known the burn of becoming nothing, the emptiness that follows loss and leaves you feeling 
                hollowed, and reduced to ash. Yet in those moments, I discovered resilience is written in my soul. 
                There is a fire within that still burns even in the darkest of times.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The tattoos on my skin are not just ink; they are reminders of my promise to myself, etched into 
                my spirit, never to forget that I have the power to always rise. Others often saw what I couldn't: 
                my aura. Friends, strangers, even my mother, would tell me, "You have light. You carry something rare." 
                That reminder became my philosophy: from ashes to aura, from nothing to radiant renewal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Around the World */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Globe className="h-10 w-10 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">A Global Journey</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-center"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Born and raised in America, my path carried me across the world. I studied in Tokyo, lived and 
              worked in London for nearly a decade, built a life in Manhattan, and now call Scandinavia home. 
              Each place shaped Ignea Aura: the resilience of New York, the global perspective of London, 
              the artistry of Japan, and the sustainable ethos of Scandinavia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { place: 'America', influence: 'Roots & Resilience' },
              { place: 'Tokyo', influence: 'Artistry & Precision' },
              { place: 'London', influence: 'Global Perspective' },
              { place: 'Scandinavia', influence: 'Sustainable Living' }
            ].map((location, index) => (
              <motion.div
                key={location.place}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="font-semibold text-pink-400 mb-2">{location.place}</div>
                <div className="text-sm text-gray-600">{location.influence}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mother's Influence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Heart className="h-10 w-10 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">The First Light</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Me&Mom copy.png"
                  alt="Darah with her mother"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Behind every flame I've lit stands the woman who lit the first one for me, my mother. 
              Her meticulous eye, her order, and her unwavering belief in me gave me the courage to dream, 
              travel, and build. Without her, Ignea Aura would not exist.
            </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-10 w-10 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">Soul's Work</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              This brand is my soul's work, my love letter to second chances. Every candle is a reminder 
              that no matter how dark it gets, light will return, that we can all rise from the ashes, 
              radiant and new.
            </p>
            
            <div className="text-center mt-12">
              <p className="text-lg font-medium text-gray-800 mb-2">With love and fire,</p>
              <p className="text-2xl font-bold text-pink-400">Darah</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Rise?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join the journey from ashes to aura. Let your space tell a story of renewal.
            </p>
            <button className="bg-pink-400 text-black px-8 py-3 rounded-lg hover:bg-pink-300 transition-colors font-medium">
              Explore Our Collection
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BioPage;