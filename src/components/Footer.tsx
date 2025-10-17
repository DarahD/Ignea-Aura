import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-bold">Ignea Aura</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Rooted in Love, Rising in Fire. Hand-crafted candles in reusable glass vessels,
              designed to live beyond the flame.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/bio" className="text-gray-400 hover:text-white transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-gray-400 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Be the first to know about refills, events, and launches.
            </p>
            <button className="bg-pink-400 text-black px-4 py-2 rounded-lg hover:bg-pink-300 transition-colors text-sm font-medium">
              Join Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Ignea Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;