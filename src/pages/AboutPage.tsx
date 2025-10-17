import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Package, Globe } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  const sustainabilityPoints = [
    {
      icon: Recycle,
      title: 'The Vessel',
      description: 'Designed for a second life — each glass transforms into a lasting whiskey rocks glass.',
      image: '/Firefly_Gemini Flash_An ultra-luxury editorial photograph that embodies the story of Ignea Aura. A poetic  401813.png'
    },
    {
      icon: Leaf,
      title: 'The Refill System',
      description: 'Reuse, refill, relight. Drop-in refills keep your glass in use forever.',
      image: '/Firefly_GPT_This was amazing. I love the photo, but the wicks need to be a bit more thinner the w 516164 copy.png'
    },
    {
      icon: Package,
      title: 'The Packaging',
      description: 'Japanese puzzle boxes — engraved, beautiful, reusable storage for memories.',
    },
    {
      icon: Globe,
      title: 'The Ingredients',
      description: '100% coconut soy wax, phthalate-free fragrances, and crackling wood wicks for a clean, eco-friendly burn.',
      image: '/Firefly_GPT_I like this image can you please make it where the puzzle box is the main focus of th 401813 copy.png'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Circular Promise
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Sustainability isn't just a buzzword — it's woven into every fiber of what we create. 
              From the glass we blow to the packaging we design, every element serves a purpose beyond the candle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {sustainabilityPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <point.icon className="h-12 w-12 text-pink-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">{point.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
                
                <div className={`aspect-square overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Making a Difference</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every vessel sold contributes to a more sustainable future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '100%', label: 'Reusable Vessels', description: 'Every glass designed for a second life' },
              { number: '0', label: 'Waste Packaging', description: 'Beautiful boxes become storage solutions' },
              { number: '40+', label: 'Hours of Light', description: 'Extended burn time for lasting value' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SustainabilityPage;