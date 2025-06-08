'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from '@/components/ui/lightbox';

const images = [
  {
    src: "/images/van-phong-thuc-te3.jpg",
    alt: "Mặt tiền tòa nhà văn phòng H&T Building tại Long Xuyên"
  },
  {
    src: "/images/van-phong-thuc-te2.jpg",
    alt: "Mặt tiền tòa nhà văn phòng H&T Building tại Long Xuyên"
  },
  {
    src: "/images/van-phong-thuc-te1.jpg",
    alt: "Mặt tiền tòa nhà văn phòng H&T Building tại Long Xuyên"
  },
  {
    src: "/images/view-toa-nha.jpg",
    alt: "View đẹp, nhìn về phía nhà thờ"
  },
  {
    src: "/images/ham-gui-xe1.jpg",
    alt: "Hầm Gửi Xe toà nhà H&T Building"
  },
  {
    src: "/images/ham-gui-xe2.png",
    alt: "Hầm Gửi Xe toà nhà H&T Building"
  },
  {
    src: "/images/mat-bang-cho-thue1.png",
    alt: "Mặt bằng tầng 5 – 480m² toàn sàn – có thể chia nhỏ"
  },
  {
    src: "/images/mat-bang-cho-thue2.png",
    alt: "Mặt bằng tầng 5 – 480m² toàn sàn – có thể chia nhỏ"
  },
  {
    src: "/images/thang-may.png",
    alt: "Hệ thống thang máy của tòa nhà văn phòng"
  },
  {
    src: "/images/thang-may-mitsubishi.png",
    alt: "2 thang máy Misubishi tốc độ cao, tải trọng 750kg (11 người)"
  },
  {
    src: "/images/PCCC.png",
    alt: "Hệ thống phòng cháy chữa cháy của toà nhà văn phòng H&T Building tại Long Xuyên"
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl group">
            <Image
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover object-top transition-opacity duration-500 ease-in-out cursor-pointer"
              priority={currentIndex === 0}
              onClick={() => setIsLightboxOpen(true)}
            />
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-50 z-10"
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-50 z-10"
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
                  }`}
                  aria-label={`Chuyển đến ảnh ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] font-bold tracking-tight mb-16">
              Về H&amp;T Building
            </h2>
            <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[25px] mb-8 leading-relaxed text-justify">
              Tọa lạc tại <strong className="text-foreground">204-204A Trần Hưng Đạo</strong>, P. Mỹ Bình, trung tâm TP. Long Xuyên – Trục tài chính sôi động, tập trung nhiều ngân hàng lớn, gần Vincom Plaza, trường học, khu hành chính và các tuyến giao thông huyết mạch.
            </p>
            <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[25px] leading-relaxed text-justify">
              Không gian hiện đại, <strong className="text-foreground"> diện tích linh hoạt từ 47-485m²</strong> – phù hợp cho cả doanh nghiệp vừa, nhỏ và quy mô lớn. <strong className="text-foreground">Giá thuê hợp lý, hạ tầng hoàn chỉnh, dịch vụ đầy đủ</strong> – lựa chọn hàng đầu cho doanh nghiệp đang tìm kiếm không gian làm việc chuyên nghiệp và dễ dàng mở rộng.
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </section>
  );
};

export default AboutSection;
