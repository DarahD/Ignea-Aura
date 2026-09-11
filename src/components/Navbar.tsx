import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO = 'https://raw.githubusercontent.com/DarahD/Ignea-Aura/website-2.0/public/ignea-aura-web-pics/Logo/IGNEA-AURA-Logo-Trans%20.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/bio' },
    { name: 'Collection', path: '/collection' },
    { name: 'Make It Yours', path: '/make-it-yours' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="group flex items-center">
            <img src={LOGO} alt="Ignea Aura" className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`relative text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-pink-400' : 'text-gray-700 hover:text-pink-400'}`}>
                {item.name}
                {location.pathname === item.path && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-400" />}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 transition-colors hover:text-pink-400 md:hidden" aria-label="Toggle navigation">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden md:hidden">
          <div className="space-y-2 bg-white py-4">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-pink-50 text-pink-400' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-400'}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;