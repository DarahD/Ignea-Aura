import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wine, Palette, MapPin, Clock, Calendar } from 'lucide-react';

const ExperiencesPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const experiences = [
    {
      icon: Palette,
      title: 'Design & Engrave',
      description: 'Create your personalized Ignea Aura vessel with custom engravings'
    },
    {
      icon: Wine,
      title: 'Craft Cocktails',
      description: 'Learn mixology from Oslo\'s finest bartenders'
    },
    {
      icon: Users,
      title: 'Connect & Create',
      description: 'Share the experience with fellow creators in intimate settings'
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
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/Product-Collection IA (2).png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ignite Your Senses
            </h1>
            <h2 className="text-xl md:text-2xl text-pink-400 mb-8 font-light">
              Choose Your Experience
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              From casual fun to premium craft, Ignea Aura offers two unique ways to make your mark.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Premium Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  src="/EVENTPIC2.png"
                  alt="Premium candle and cocktail class"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Candle & Cocktail Class</h3>
              <p className="text-pink-400 font-medium mb-4">Premium Experience</p>
              <p className="text-gray-600 mb-6">
                Our premium experience combines artisanal candle-making with professional mixology. 
                Learn, sip, and create something unforgettable.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <Palette className="h-4 w-4 text-pink-400 mr-3" />
                  Hands-on candle-making in a reusable Ignea Aura vessel
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Wine className="h-4 w-4 text-pink-400 mr-3" />
                  Cocktail-making session led by a professional mixologist
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 text-pink-400 mr-3" />
                  Take-home engraved vessel
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 text-pink-400 mr-3" />
                  2.5–3 hours duration
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-bold mb-2">950–1,200 NOK ($95–$120) per person</p>
                <p className="text-sm text-gray-600">Group discount: 900 NOK ($90) per person (3+ attendees)</p>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Reserve Your Premium Experience
              </button>
            </motion.div>

            {/* Mid-Tier Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  src="/EXPERIENCE SHOT.png"
                  alt="Sip & Scent workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sip & Scent</h3>
              <p className="text-pink-400 font-medium mb-4">Social Experience</p>
              <p className="text-gray-600 mb-6">
                A relaxed, social experience. Craft your own candle, enjoy a cocktail or mocktail, 
                and take home your personalized vessel.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <Palette className="h-4 w-4 text-pink-400 mr-3" />
                  Candle-making session in a reusable vessel
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Wine className="h-4 w-4 text-pink-400 mr-3" />
                  Sip a curated cocktail or mocktail during class
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 text-pink-400 mr-3" />
                  Take-home engraved vessel
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 text-pink-400 mr-3" />
                  1.5–2 hours duration
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-bold mb-2">650 NOK ($65) per person</p>
                <p className="text-sm text-gray-600">Group discount: 600 NOK ($60) per person (3+ attendees)</p>
              </div>
              
              <button className="w-full bg-pink-400 text-black py-3 rounded-lg hover:bg-pink-300 transition-colors font-medium">
                Join the Sip & Scent Waitlist
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Duration</h4>
                    <p className="text-gray-600">1.5–3 hours depending on experience level</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">Premium venues and cozy spaces across Oslo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Group Size</h4>
                    <p className="text-gray-600">Intimate groups with personalized attention</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Schedule</h4>
                    <p className="text-gray-600">Weekend sessions, private bookings available</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src="/Firefly_Gemini Flash_Hyper-realistic, stylish photo of a luxury candle-making workshop. A diverse group of 746377.png"
                alt="Workshop in progress"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Create?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Be among the first to experience our workshops when we launch in Oslo
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-pink-400 text-black px-6 py-3 rounded-lg hover:bg-pink-300 transition-colors font-medium whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="text-green-500 mb-4 text-4xl">✓</div>
                <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                <p className="text-gray-600">We'll notify you when workshops open in Oslo.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperiencesPage;