'use client'; // Giữ lại nếu có logic client-side, hoặc bỏ nếu chỉ là UI tĩnh

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button as UIButton } from '@/components/ui/button';
import { Card as UICard } from '@/components/ui/card';

// Bạn có thể thêm props cho component này nếu cần tùy chỉnh nội dung
// interface ContactSectionProps {
//   phoneNumber?: string;
//   title?: string;
// }

const ContactSection = () => {

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div 
            className="md:col-span-5 lg:col-span-5 flex flex-col" 
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            <div className="flex flex-col relative w-full">
                <div className="absolute top-3 left-0 w-full h-2/3 bg-white pr-5">
                    <div className="w-full h-full bg-[#4169aa]"/>
                </div>
                <div className="px-10 py-10 rounded-tr-xl rounded-tl-xl rounded-br-2xl text-white z-0 h-auto bg-gradient-to-r from-[#4169aa] to-[#1a2a44]">
                    <span className="text-2xl sm:text-3xl lg:text-4xl leading-tight">Liên hệ thuê văn phòng</span>
                </div>
                <div className="px-7 py-8 rounded-tr-2xl rounded-tl-4xl bg-white z-10 shadow-none h-auto">
                    <p className="text-slate-600 mb-3 text-base sm:text-lg">
                        Để nhận thông tin chi tiết, vui lòng điền thông tin đăng ký tư vấn hoặc liên hệ trực tiếp:
                    </p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">
                        0919 999 939
                    </p>
                </div>
            </div>

          </div>

          <div className="md:col-span-7 lg:col-span-7" style={{ fontFamily: 'var(--font-montserrat)' }}>
            <UICard className="p-6 sm:p-8 lg:p-10 shadow-none border-none bg-background">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name" className="font-medium text-3A3C40">Họ & Tên</Label>
                    <Input type="text" name="name" id="contact-name" placeholder="Name" className="bg-white border border-gray-300" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone" className="font-medium text-3A3C40">Số Điện Thoại</Label>
                    <Input type="tel" name="phone" id="contact-phone" placeholder="Phone Number" className="bg-white border border-gray-300" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email" className="font-medium text-3A3C40">Email</Label>
                  <Input type="email" name="email" id="contact-email" placeholder="htbuilding.contact@gmail.com" className="bg-white border border-gray-300" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-message" className="font-medium text-3A3C40">Nội Dung</Label>
                  <Textarea name="message" id="contact-message" placeholder="Enter your question or message" className="bg-white border border-gray-300 h-32 sm:h-36 md:h-40" />
                </div>
                <div>
                  <UIButton 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800 py-6 text-base font-semibold rounded-lg"
                  >
                    Submit
                  </UIButton>
                </div>
              </form>
            </UICard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 