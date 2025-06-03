import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import InfoServicesSection from '@/components/sections/info-services-section';
import FloorPlanSection from '@/components/sections/floor-plan-section';
import ContactSection from '@/components/sections/contact-section';
import Image from 'next/image';

// import './custom-speech-bubble.scss'; // SCSS import removed
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button as UIButton } from '@/components/ui/button';
import { Card as UICard, CardContent as UICardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
