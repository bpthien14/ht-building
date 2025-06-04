import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.jpg"              
              alt="H&T Building Entrance"
              data-ai-hint="modern office exterior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#000000] text-4xl sm:text-5xl font-bold tracking-tight mb-16">
              Về H&amp;T Building
            </h2>
            <p className="text-[#000000] text-xl mb-8 leading-relaxed">
              Tọa lạc tại <strong className="text-foreground">204-204A Trần Hưng Đạo</strong>, P. Mỹ Bình, trung tâm TP. Long Xuyên – Trục tài chính sôi động, tập trung nhiều ngân hàng lớn, gần Vincom Plaza, trường học, khu hành chính và các tuyến giao thông huyết mạch.
            </p>
            <p className="text-[#000000] text-xl leading-relaxed">
              Không gian hiện đại, <strong className="text-foreground"> diện tích linh hoạt từ 49-485m²</strong> – phù hợp cho cả doanh nghiệp vừa, nhỏ và quy mô lớn. <strong className="text-foreground">Giá thuê hợp lý, hạ tầng hoàn chỉnh, dịch vụ đầy đủ</strong> – lựa chọn hàng đầu cho doanh nghiệp đang tìm kiếm không gian làm việc chuyên nghiệp và dễ dàng mở rộng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
