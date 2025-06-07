import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { floorPlansData } from '@/data/floorPlansData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';

import ContactSection from '@/components/sections/contact-section';
import FloorPlanDetailClient from '@/components/ui/floor-plan-detail-client';

// Type để xử lý các item có hoặc không có icon
type ItemWithIcon = { icon: LucideIcon; label: string; value: string };
type ItemWithoutIcon = { label: string; value: string };
type FloorPlanItem = ItemWithIcon | ItemWithoutIcon;

interface FloorPlanDetailProps {
  params: Promise<{ slug: string }>;
}

// Interface riêng cho generateMetadata vì params ở đây là Promise
interface GenerateMetadataProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params: paramsPromise }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await paramsPromise;
  const slug = params.slug;

  if (slug === 'mat-bang-tang-2-4') {
    return {
      title: 'Tầng 2-4 – Cho thuê văn phòng Long Xuyên | H&T Building',
      description: 'Tầng 2-4 tại H&T Building Long Xuyên, diện tích từ 47-148m² (485m²/sàn), chia sẵn khu. Phù hợp cho nhu cầu thuê văn phòng tại An Giang. Gọi 0919 999 939 để xem ngay!',
    };
  }
  if (slug === 'mat-bang-tang-5') {
    return {
      title: 'Tầng 5 – Cho thuê văn phòng Long Xuyên | H&T Building',
      description: 'Tầng 5 tại H&T Building Long Xuyên, diện tích từ 47–148m² (480m²/sàn), chia sẵn khu, có ban công thoáng mát. Phù hợp cho nhu cầu thuê văn phòng tại An Giang. Gọi 0919 999 939 để xem ngay!',
    };
  }
  if (slug === 'mat-bang-tang-6') {
    return {
      title: 'Tầng 6 – Cho thuê văn phòng Long Xuyên | H&T Building',
      description: 'Tầng 6 tại H&T Building Long Xuyên, diện tích từ 47–105m² (455m²/sàn), chia sẵn khu, có ban công thoáng mát. Phù hợp cho nhu cầu thuê văn phòng tại An Giang. Gọi 0919 999 939 để xem ngay!',
    };
  }
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: 'Chi tiết mặt bằng',
    description: 'Thông tin chi tiết về mặt bằng cho thuê.',
    openGraph: {
      images: [...previousImages],
    },
  };
}

const FloorPlanDetailPage = async ({ params: paramsPromise }: FloorPlanDetailProps) => {
  const params = await paramsPromise;
  const { slug } = params;
  const plan = floorPlansData.find(p => p.tabValue === slug);


  if (!plan) {
    return (
      <div className="flex flex-col min-h-screen bg-background items-center justify-center">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Không tìm thấy mặt bằng</h1>
          <Link href="/" className="mt-4 inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-md">
            Quay về Trang Chủ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <Header />
      <main className="flex-grow">
        {/* Section 1: Hero Title */}
        <section 
          className="py-20 md:py-28 text-center bg-cover bg-center bg-gradient-to-r from-[#c5c5c5] to-[#fdfdfd]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight">
              {plan.heroTitle}
            </h1>
            <Button 
              asChild 
              className="mt-8 bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-md transition-colors duration-300"
            >
              <Link href="#contact-form">Liên Hệ Ngay</Link>
            </Button>
          </div>
        </section>

          <FloorPlanDetailClient plan={plan} />
         

          {/* Section 4: Contact Form (Reused/Adapted from homepage) */}
          <ContactSection />

      </main>
      
      <Footer />
    </div>
  );
};

export default FloorPlanDetailPage;