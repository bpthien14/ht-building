"use client";

import type { Route } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { FloorPlanDataType } from '@/data/floorPlansData';

interface NavLink {
    href: Route | URL;
    label: string;
}

interface MobileNavProps {
    navLinks?: NavLink[];
    floorPlansData: FloorPlanDataType[];
}

const MobileNav = ({ floorPlansData }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="md:hidden text-FFFFFF hover:text-FFFFFF hover:bg-2F3748/80" aria-label="Open menu" disabled>
        <Menu className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-FFFFFF hover:text-FFFFFF hover:bg-2F3748/80" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-6 shadow-xl [&>button]:hidden" style={{ backgroundColor: '#323a48', color: '#f8f1e9' }}>
        <SheetTitle className="sr-only">Menu Navigation</SheetTitle>
        <SheetDescription className="sr-only">Main navigation menu for mobile devices</SheetDescription>
        <div className="flex flex-col space-y-6 h-full">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold transition-colors" style={{ color: '#f8f1e9' }}>
              H&T BUILDING
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Close menu" 
              className="hover:bg-white/10" 
              style={{ color: '#f8f1e9' }}
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-4 mt-6">
            <SheetClose asChild>
              <Link
                href="/"
                className="text-lg font-medium transition-colors py-2 hover:opacity-80"
                style={{ color: '#f8f1e9' }}
                onClick={() => setIsOpen(false)}
              >
                Trang Chủ
              </Link>
            </SheetClose>
            
            {/* Floor Plans Dropdown for Mobile */}
            <div className="border-t border-white/20 pt-4">
              <button
                onClick={() => setIsFloorPlanOpen(!isFloorPlanOpen)}
                className="flex items-center justify-between w-full text-lg font-medium py-2 hover:opacity-80 transition-colors"
                style={{ color: '#f8f1e9' }}
              >
                Mặt Bằng Cho Thuê
                {isFloorPlanOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
              
              {isFloorPlanOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {floorPlansData.map((plan) => (
                    <SheetClose asChild key={plan.tabValue}>
                      <Link
                        href={`/mat-bang/${plan.tabValue}`}
                        className="block text-base py-2 hover:opacity-80 transition-colors"
                        style={{ color: '#f8f1e9' }}
                        onClick={() => setIsOpen(false)}
                      >
                        {plan.tabLabel}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              )}
            </div>

            <SheetClose asChild>
              <Link
                href="#contact"
                className="text-lg font-medium transition-colors py-2 hover:opacity-80"
                style={{ color: '#f8f1e9' }}
                onClick={() => setIsOpen(false)}
              >
                Liên Hệ
              </Link>
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
