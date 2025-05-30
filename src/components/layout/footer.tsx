import Link from 'next/link';
import Logo from './logo'; // Will display "H&T BUILDING" from updated logo component

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <div className="inline-block mb-6">
             {/* Using Link for SPA behavior if Logo contains one, otherwise just render Logo */}
            <Link href="/" aria-label="H&T BUILDING Home">
                <span className="text-3xl font-bold text-primary-foreground hover:text-primary-foreground/90 transition-colors">
                    H&amp;T BUILDING
                </span>
            </Link>
          </div>
          <p className="text-md text-primary-foreground/80 mb-2">
            Địa chỉ: 204 - 204A Trần Hưng Đạo, TP Long Xuyên, An Giang
          </p>
          <p className="text-md text-primary-foreground/80">
            Email: htbuilding@gmail.com | SĐT: 0919 999 939
          </p>
        </div>
        <div className="mt-10 border-t border-primary-foreground/30 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">&copy; {new Date().getFullYear()} H&T Building. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
