import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import InfoServicesSection from '@/components/sections/info-services-section';
import FloorPlanSection from '@/components/sections/floor-plan-section';
import ContactSection from '@/components/sections/contact-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Văn phòng cho thuê Long Xuyên – H&T Building | Diện tích từ 47m - 500m2',
  description: 'Cho thuê văn phòng, mặt bằng tại Long Xuyên với giá tốt. H&T Building – Vị trí trung tâm gần Vincom, diện tích từ 47–485m². Gọi 0919 999 939 để xem ngay!',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8">
          <AboutSection />
          <InfoServicesSection />
          <FloorPlanSection />
          <ContactSection />
        </div>


      </main>

      <Footer />
    </div>
  );
}
