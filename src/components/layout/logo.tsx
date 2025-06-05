import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-[#f8f1e9] hover:text-[#f8f1e9]/90 transition-colors" aria-label="H&T BUILDING Home" style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '.2em' }}>
      H&T  BUILDING
    </Link>
  );
};

export default Logo;
