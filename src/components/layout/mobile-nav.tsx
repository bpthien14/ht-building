"use client";

import type { Route } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface NavLink {
    href: Route | URL;
    label: string;
}

interface MobileNavProps {
    navLinks: NavLink[];
}

const MobileNav = ({ navLinks }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <SheetContent side="left" className="w-full max-w-xs bg-FFFFFF p-6 shadow-xl">
        <div className="flex flex-col space-y-6 h-full">
          <div className="flex justify-between items-center">
            <SheetClose asChild>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-2F3748 hover:text-2F3748/90 transition-colors">
                  H&T BUILDING
                </Link>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>
          <nav className="flex flex-col space-y-4 mt-6">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href.toString()}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-2F3748 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
          {/* Removed Sign In / Get Started Buttons
          <div className="mt-auto space-y-4">
            <SheetClose asChild>
                <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>Sign In</Button>
            </SheetClose>
            <SheetClose asChild>
                <Button className="w-full bg-465A80 hover:bg-accent/90 text-FFFFFF" onClick={() => setIsOpen(false)}>
                 Get Started
                </Button>
            </SheetClose>
          </div>
          */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
