import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from './Link';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Brand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="#" onClick={() => setIsContactFormVisible(true)}>Contact</Link>
            <Link href="/login" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Login / Sign Up
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}        
        {isContactFormVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Submit</button>
              </form>
              <button onClick={() => setIsContactFormVisible(false)} className="mt-4 text-red-600">Close</button>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block">Home</Link>
              <Link href="/about" className="block">About</Link>
              <Link href="/services" className="block">Services</Link>
              <Link href="/contact" className="block">Contact</Link>
              <Link href="/auth" className="block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Login / Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
