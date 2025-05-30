import Link from 'next/link';
import Logo from './logo';
import MobileNav from './mobile-nav';
// import { Button } from '@/components/ui/button'; // Removed as per design

const NavLinks = [
  { href: '/', label: 'Trang Chủ' },
  { href: '#floor-plan', label: 'Mặt Bằng Cho Thuê' },
  { href: '#contact', label: 'Liên Hệ' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#323a48]/40 bg-[#323a48] text-[#f8f1e9] shadow-md">
      <div className="container mx-auto flex flex-col items-center gap-6 py-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-16">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#f8f1e9]/90 hover:text-[#f8f1e9] transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {link.label}
            </Link>
          ))}
          {/* Buttons removed as per design
          <Button variant="outline" size="sm" className="transition-colors hover:bg-accent/10 hover:border-accent text-primary-foreground border-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground">
            Sign In
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-all hover:shadow-lg">
            Get Started
          </Button>
          */}
        </nav>
        <div className="md:hidden">
          <MobileNav navLinks={NavLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
