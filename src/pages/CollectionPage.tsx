import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const CollectionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 0,
      name: 'The Keepsake Collection - Limited Edition Trilogy',
      category: 'keepsake',
      price: 1800,
      priceUSD: 170,
      image: '/Firefly_GPT_I like this image can you please make it where the puzzle box is the main focus of th 401813 copy.png',
      description: 'The ultimate Ignea Aura experience. This curated set of three Signature Vessels is presented in a reusable bamboo puzzle box, inspired by Japanese Himitsu-bako craftsmanship. The box itself is a keepsake, designed for a lifetime of use.',
      features: ['Three hand-poured candles in reusable rocks glasses', 'Housed in an engraved, sustainable bamboo puzzle box', 'Choose pre-selected scent journey or mix-and-match colors', 'A true heirloom piece, embodying the spirit of renewal'],
      isLimited: true
    },
    {
      id: 1,
      name: 'Onyx Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/pp_matte_round_blk copy copy copy.png',
      description: 'Embodying strength and mystery, the Onyx vessel holds a flame that glows with quiet resilience. This piece makes a bold statement, perfect for grounding scents like dark amber, vetiver, and smoked oak.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal a sophisticated black rocks glass.'
    },
    {
      id: 2,
      name: 'Crystal Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/pp_round_clear.png',
      description: 'The Crystal vessel captures the pure, untamed beauty of the flame. Versatile and luminous, it is the perfect canvas for bright, uplifting scents like citrus grove, ocean breeze, and white tea.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal a classic clear rocks glass.'
    },
    {
      id: 3,
      name: 'Blush Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/pink_whiskey_rocks_feminine  copy.png',
      description: 'Soft, modern, and inviting, the Blush vessel brings a touch of warm radiance to any space. Ideal for pairing with comforting and floral scents like peony, vanilla blossom, and rose quartz.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal an elegant pink rocks glass.'
    },
    {
      id: 4,
      name: 'Onyx Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/pp_square_mat_blk.png',
      description: 'Where bold geometry meets sustainable design. The square Onyx vessel is a study in modern strength, ideal for deep, complex fragrances.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal a sophisticated black rocks glass.'
    },
    {
      id: 5,
      name: 'Crystal Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/pp_clear_square copy.png',
      description: 'Clean lines and clarity define the Crystal square vessel. A modern classic that complements any decor with its transparent elegance.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal a classic clear rocks glass.'
    },
    {
      id: 6,
      name: 'Blush Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/pp_square_pink.png',
      description: 'The Blush square vessel offers a soft, contemporary edge. Its gentle hue brings a modern warmth to minimalist spaces.',
      features: ['300–400 ml (10–13.5 oz) reusable rocks glass', '~40+ hours burn time', 'Natural coconut soy wax blend', 'Crackling wood wick', 'Phthalate-free fragrances'],
      bundlePricing: '2 for 850 NOK | 3 for 1200 NOK',
      afterBurn: 'After the burn, wash to reveal an elegant pink rocks glass.'
    },
    {
      id: 7,
      name: 'Refill Drop-Ins',
      category: 'refills',
      price: 280,
      priceUSD: 26,
      image: '/Firefly_Imagen_Editorial product photo of circular and square coconut soy wax refill drops-ins with  746377 copy.png',
      description: 'Coconut soy wax refills designed to drop directly into your Ignea Aura vessel. Choose seasonal fragrances and keep your vessel glowing endlessly.',
      features: ['Fits all vessels', 'Coconut soy wax blend', 'Crackling wood wick', 'Seasonal fragrances', 'Subscription from 220 NOK/month ($21)']
    },
    {
      id: 8,
      name: 'Engraving Upgrade',
      category: 'engraving',
      price: 100,
      priceUSD: 10,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Personalize your vessel with engraving — monograms, initials, or subtle patterns. Pricing decreases with multiple engravings to encourage sets.',
      features: ['Custom monograms & initials', 'Subtle patterns', 'Precision laser engraving', '2+ glasses: +75 NOK ($7.50) each', '3+ glasses: +50 NOK ($5) each']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Vessels' },
    { id: 'keepsake', name: 'Keepsake Collection' },
    { id: 'round', name: 'Round' },
    { id: 'square', name: 'Square' },
    { id: 'refills', name: 'Refills' },
    { id: 'engraving', name: 'Engraving' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Signature Vessel Collection
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hand-crafted candles in reusable glass vessels. Each piece is designed to light your space, 
              then live on as a cherished keepsake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`pb-2 px-1 font-medium transition-colors relative ${
                    selectedCategory === category.id
                      ? 'text-pink-400'
                      : 'text-gray-600 hover:text-pink-400'
                  }`}
                >
                  {category.name}
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {product.isLimited && (
                  <div className="absolute top-4 left-4 z-10 bg-pink-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    Limited Edition
                  </div>
                )}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold">{product.price} NOK</span>
                      {product.priceUSD && (
                        <div className="text-sm text-gray-500">(~${product.priceUSD})</div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {product.bundlePricing && (
                    <div className="mb-4 p-3 bg-pink-50 rounded-lg">
                      <p className="text-sm text-pink-600 font-medium">Bundle Pricing:</p>
                      <p className="text-sm text-gray-700">{product.bundlePricing}</p>
                    </div>
                  )}
                  
                  {product.afterBurn && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{product.afterBurn}</p>
                    </div>
                  )}
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 text-pink-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engraving Upgrade */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Make It Yours</h2>
              <h3 className="text-xl text-pink-400 mb-4">Custom Engraving</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Transform your vessel into a truly personal keepsake with custom monograms, 
                dates, or intricate patterns. Each engraving is crafted with precision laser technology.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Star className="h-4 w-4 text-pink-400 mr-3" />
                  Personal monograms and dates
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-4 w-4 text-pink-400 mr-3" />
                  Custom patterns and designs
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-4 w-4 text-pink-400 mr-3" />
                  Corporate gifting options
                </li>
              </ul>
              <button className="inline-flex items-center bg-pink-400 text-black px-6 py-3 rounded-lg hover:bg-pink-300 transition-colors font-medium">
                Customize Your Vessel
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src="/u6858746491_httpss.mj.runLdUX-cZs22Y_Close-up_hyper-realistic_cc223209-444e-4c7d-8ab9-13cc45f5b334_2 copy copy.png"
                alt="Custom engraving process"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CollectionPage;