'use client';

import React, { useState, useEffect } from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { User, FileText, MessageCircle } from 'lucide-react';

export const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = [
    { href: '/', icon: <HiOutlineHome size={18} />, label: 'Home' },
    { href: '/about', icon: <User size={18} />, label: 'About' },
    { href: '/projects', icon: <FileText size={18} />, label: 'Projects' },
    { href: '/#reach', icon: <MessageCircle size={18} />, label: 'Reach' },
  ];

  return (
    <nav
      className={`fixed top-6 sm:top-12 w-[40%] sm:w-[385px] mx-auto left-0 right-0 z-[200] transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-[300%]'
      }`}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-xl rounded-full border border-white/[0.1] shadow-[0_0_1px_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:backdrop-blur-xl before:rounded-full" />

        <div className="relative px-4 sm:px-7 py-2 sm:py-3">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-4 text-base">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white/80 transition-colors duration-200 flex items-center gap-1"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex justify-between gap-2">
              {navLinks.map((link) => (
<a
  key={link.label}
  href={link.href}
  className="relative hover:text-white/80 transition-colors duration-200 p-1"
>
  {link.icon}

</a>

              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};