'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Map Column */}
          <div className="md:col-span-8">
            <div className="rounded-lg overflow-hidden shadow-xl h-[500px] relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7377064690418!2d105.4358031!3d10.3853035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b401d472b70025%3A0x2c288e0e85ec7b5!2sHT%20Building!5e1!3m2!1sen!2s!4v1749301847718!5m2!1sen!2s"                
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
          <div className="md:col-span-4 flex flex-col gap-6 justify-center mt-10 md:mt-0" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-5 border border-[#ececec]">
              <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-semibold mb-1">Địa chỉ</div>
                  <div className="text-lg text-[#222] font-bold leading-snug">204 Trần Hưng Đạo, Mỹ Bình, TP. Long Xuyên, An Giang</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-7 h-7 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-semibold mb-1">Điện thoại</div>
                  <a href="tel:0919999939" className="text-lg text-[#222] font-bold leading-snug hover:underline">0919 999 939</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-7 h-7 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-semibold mb-1">Email</div>
                  <a href="mailto:info@htbuilding.vn" className="text-lg text-[#222] font-bold leading-snug hover:underline">info@htbuilding.vn</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-7 h-7 text-[#4169aa] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base text-[#303846] font-semibold mb-1">Giờ làm việc</div>
                  <div className="text-lg text-[#222] font-bold leading-snug">Thứ 2 - Thứ 7: 8:00 - 17:30</div>
                  <div className="text-sm text-[#303846]">Chủ nhật: Nghỉ</div>
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