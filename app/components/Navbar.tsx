'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#therapeutic-areas", label: "Therapeutic Areas" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/zychor_logo.jpeg"
              alt="Zychor Biologicals Logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex gap-8 text-secondary dark:text-tertiary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition font-medium text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary dark:text-tertiary hover:text-primary transition font-medium px-2 py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
