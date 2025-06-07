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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-48">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-black tracking-tight text-center sm:text-left"
          style={{ letterSpacing: '0.05em' }}
        >
          H&amp;T BUILDING
        </h1>
        <p
          className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium text-center sm:text-left"
        >
          VĂN PHÒNG CHO THUÊ <br /> TẠI LONG XUYÊN
        </p>
        <p
          className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl text-[#182640]/90 font-semibold text-center sm:text-left text-xs sm:text-sm md:text-base lg:text-[22px] xl:text-[25px] whitespace-nowrap"
        >
          Vị trí đắc địa - Diện tích linh hoạt - Giá thuê hợp lý
        </p>
        <div className="mt-8 sm:mt-10 sm:px-0 flex justify-center sm:justify-start">
          <Button
            size="lg"
            className="bg-[#323a48] hover:bg-[#323a48]/90 text-[#f8f1e9] border border-[#f8f1e9]/50 hover:border-[#f8f1e9] px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-6 lg:px-20 lg:py-7 xl:px-24 xl:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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
