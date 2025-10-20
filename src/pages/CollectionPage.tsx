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
      image: '/ignea-aura-web-pics/Products/vessel-trio-reused-drinking-glass.png',
      description: 'The ultimate Ignea Aura experience. This curated set of three Signature Vessels is presented in a reusable bamboo puzzle box.',
      features: [
        'Three hand-poured candles in reusable rocks glasses',
        'Housed in an engraved, sustainable bamboo puzzle box',
        'Choose pre-selected scent journey or mix-and-match colors',
        'A true heirloom piece, embodying the spirit of renewal'
      ],
      isLimited: true
    },
    {
      id: 1,
      name: 'Onyx Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/onyx-round-glass.png',
      description: 'Embodying strength and mystery, the Onyx vessel holds a flame that glows with quiet resilience.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 2,
      name: 'Crystal Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/clear-round-glass.png',
      description: 'The Crystal vessel captures the pure, untamed beauty of the flame.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 3,
      name: 'Blush Round Vessel',
      category: 'round',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/pink-round-glass.png',
      description: 'Soft, modern, and inviting, the Blush vessel brings a touch of warm radiance to any space.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 4,
      name: 'Onyx Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/onyx-square-glass.png',
      description: 'Where bold geometry meets sustainable design.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 5,
      name: 'Crystal Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/clear-square-glass.png',
      description: 'Clean lines and clarity define the Crystal square vessel.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 6,
      name: 'Blush Square Vessel',
      category: 'square',
      price: 450,
      priceUSD: 42,
      image: '/ignea-aura-web-pics/Products/pink-square-glass.png',
      description: 'The Blush square vessel offers a soft, contemporary edge.',
      features: [
        '300–400 ml (10–13.5 oz) reusable rocks glass',
        '~40+ hours burn time',
        'Natural coconut soy wax blend',
        'Crackling wood wick',
        'Phthalate-free fragrances'
      ]
    },
    {
      id: 7,
      name: 'Refill Drop-Ins',
      category: 'refills',
      price: 280,
      priceUSD: 26,
      image: '/ignea-aura-web-pics/Products/studio-lifestyle-shot.png',
      description: 'Coconut soy wax refills designed to drop directly into your Ignea Aura vessel.',
      features: [
        'Fits all vessels',
        'Coconut soy wax blend',
        'Crackling wood wick',
        'Seasonal fragrances',
        'Subscription from 220 NOK/month ($21)'
      ]
    },
    {
      id: 8,
      name: 'Engraving Upgrade',
      category: 'engraving',
      price: 100,
      priceUSD: 10,
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Personalize your vessel with engraving — monograms, initials, or subtle patterns.',
      features: [
        'Custom monograms & initials',
        'Subtle patterns',
        'Precision laser engraving',
        '2+ glasses: +75 NOK ($7.50) each',
        '3+ glasses: +50 NOK ($5) each'
      ]
    }
  ];

  return (
    <div>
      {/* Content display will be added later */}
    </div>
  );
};

export default CollectionPage;