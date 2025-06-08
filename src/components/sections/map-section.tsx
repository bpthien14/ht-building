'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 w-full max-w-full">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-12 w-full max-w-full">
          {/* Map Column */}
          <div className="w-full md:col-span-8 flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-xl w-full max-w-full h-56 sm:h-80 md:h-[500px] relative">
              <iframe 
                className="w-full h-full max-w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7377064690418!2d105.4358031!3d10.3853035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b401d472b70025%3A0x2c288e0e85ec7b5!2sHT%20Building!5e1!3m2!1sen!2s!4v1749301847718!5m2!1sen!2s"                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="H&T Building Location Map"
                onLoad={() => setIsMapLoaded(true)}
              />
              {!isMapLoaded && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
              )}
            </div>
          </div>
          {/* Info Column */}
          <div className="w-full md:col-span-4 flex flex-col gap-6 justify-center mt-6 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 border border-[#ececec] w-full">
              <h2 className="text-2xl font-bold font-montserrat text-[#222] mb-2 text-left">Thông Tin Liên Hệ</h2>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-bold mb-1">Địa chỉ</div>
                  <div className="text-sm text-[#222] leading-snug whitespace-pre-line">204-204A Trần Hưng Đạo, P. Mỹ Bình,<br/> TP. Long Xuyên, An Giang</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-bold mb-1">Điện thoại</div>
                  <a href="tel:0919999939" className="text-sm text-[#222] leading-snug hover:underline">0919 999 939</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-bold mb-1">Email</div>
                  <a href="mailto:htbuilding.contact@gmail.com" className="text-sm text-[#222] leading-snug hover:underline" style={{ wordBreak: 'break-all' }}>htbuilding.contact@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#4169aa] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                <div>
                  <div className="text-base text-[#303846] font-bold mb-1">Fanpage</div>
                  <a href="https://www.facebook.com/profile.php?id=61576739286488" target="_blank" rel="noopener noreferrer" className="text-sm text-[#222] leading-snug hover:underline">facebook.com/htbuildinglongxuyen</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-bold mb-1">Giờ làm việc</div>
                  <div className="text-sm text-[#222] leading-snug">Thứ 2 - Thứ 6: 8:00 - 17:30</div>
                  <div className="text-xs text-[#303846]">Thứ 7: 8:00 - 12:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 