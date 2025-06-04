import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative text-[#161616] overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="H&T Building exterior backdrop"
          data-ai-hint="office building sky"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/100 to-white/20"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          style={{ letterSpacing: '0.05em' }}
        >
          H&amp;T BUILDING
        </h1>
        <p 
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          VĂN PHÒNG CHO THUÊ <br /> TẠI LONG XUYÊN
        </p>
        <p 
          className="mt-6 max-w-xl text-lg sm:text-xl text-[#182640]/90 font-bold"
        >
          Vị trí đắc địa - Diện tích linh hoạt - Giá thuê hợp lý
        </p>
        <div className="mt-10">
          <Button 
            size="lg" 
            className="bg-[#323a48] hover:bg-[#323a48]/90 text-[#f8f1e9] border border-[#f8f1e9]/50 hover:border-[#f8f1e9] px-24 py-8 text-2xl font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            asChild
          >
            <a href="#floor-plan">THAM KHẢO NGAY</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
