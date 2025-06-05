"use client";

import Link from 'next/link';
import Logo from './logo';
import MobileNav from './mobile-nav';
import { floorPlansData } from '@/data/floorPlansData';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#323a48]/40 bg-[#323a48] text-[#f8f1e9] shadow-md">
      {/* Desktop Layout - Center aligned */}
      <div className="hidden md:block">
        <div className="container mx-auto flex flex-col items-center gap-4 py-6 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Large Logo */}
          <Link href="/" className="text-4xl lg:text-5xl font-bold text-[#f8f1e9] hover:text-[#f8f1e9]/90 transition-colors" aria-label="H&T BUILDING Home" style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '.32em' }}>
            H&T  BUILDING
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-base font-medium text-[#f8f1e9]/90 hover:text-[#f8f1e9] transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Trang Chủ
            </Link>
            
            {/* Dropdown for Mặt Bằng Cho Thuê */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="#floor-plan"
                className="text-base font-medium text-[#f8f1e9]/90 hover:text-[#f8f1e9] transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Mặt Bằng Cho Thuê
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {isDropdownOpen && (
                <>
                  {/* Invisible bridge area */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 h-2 bg-transparent"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#323a48] border-none rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {floorPlansData.map((plan) => (
                        <Link
                          key={plan.tabValue}
                          href={`/mat-bang/${plan.tabValue}`}
                          className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                          style={{ color: '#f8f1e9' }}
                        >
                          {plan.tabLabel} - {plan.status}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              href="#contact"
              className="text-base font-medium text-[#f8f1e9]/90 hover:text-[#f8f1e9] transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Liên Hệ
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Layout - Logo left, hamburger right */}
      <div className="md:hidden">
        <div className="container mx-auto flex flex-row items-center justify-between py-4 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Logo />
          <MobileNav floorPlansData={floorPlansData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
