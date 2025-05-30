import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import InfoServicesSection from '@/components/sections/info-services-section';
import FloorPlanSection from '@/components/sections/floor-plan-section';

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
        <AboutSection />
        <InfoServicesSection />
        <FloorPlanSection />
        
        <section id="contact" className="py-16 md:py-24 bg-ACC5F6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-5 lg:col-span-4">
                <UICard className="bg-2F3748 text-FFFFFF p-8 md:p-10 rounded-lg shadow-xl h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Liên hệ thuê văn phòng
                  </h2>
                  <p className="text-FFFFFF/80 mb-6">
                    Để nhận thông tin chi tiết, vui lòng điền thông tin đăng ký tư vấn hoặc liên hệ trực tiếp:
                  </p>
                  <p className="text-2xl font-semibold text-FFFFFF">
                    0919 999 939
                  </p>
                </UICard>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <UICard className="p-6 sm:p-8 lg:p-10 shadow-xl bg-background">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="font-medium text-3A3C40">Họ & Tên</Label>
                        <Input type="text" name="name" id="name" placeholder="Nguyễn Văn A" className="bg-C1D1F1" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="font-medium text-3A3C40">Số Điện Thoại</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="090xxxxxxx" className="bg-C1D1F1" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="font-medium text-3A3C40">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="bạn@email.com" className="bg-C1D1F1" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-medium text-3A3C40">Nội Dung</Label>
                      <Textarea name="message" id="message" rows={4} placeholder="Nhu cầu thuê văn phòng của bạn..." className="bg-C1D1F1" />
                    </div>
                    <div>
                      <UIButton 
                        type="submit" 
                        className="w-full bg-3A3C40 text-background hover:bg-3A3C40/80 py-3 text-base font-semibold"
                      >
                        Gửi Yêu Cầu
                      </UIButton>
                    </div>
                  </form>
                </UICard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
