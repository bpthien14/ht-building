'use client';

import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { floorPlansData } from '@/data/floorPlansData'; // Điều chỉnh đường dẫn nếu cần
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, LucideIcon } from 'lucide-react'; // Icon cho giá

import ContactSection from '@/components/sections/contact-section';

// Type để xử lý các item có hoặc không có icon
type ItemWithIcon = { icon: LucideIcon; label: string; value: string };
type ItemWithoutIcon = { label: string; value: string };
type FloorPlanItem = ItemWithIcon | ItemWithoutIcon;

interface FloorPlanDetailProps {
  params: {
    slug: string;
  };
}

const FloorPlanDetailPage = ({ params }: FloorPlanDetailProps) => {
  const { slug } = params;
  const plan = floorPlansData.find(p => p.tabValue === slug);

  // Helper function để kiểm tra item có icon hay không
  const hasIcon = (item: FloorPlanItem): item is ItemWithIcon => {
    return 'icon' in item;
  };

  if (!plan) {
    return (
      
      <div className="flex flex-col min-h-screen bg-background items-center justify-center">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Không tìm thấy mặt bằng</h1>
          <Link href="/" legacyBehavior>
            <a className="mt-4 inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-md">
              Quay về Trang Chủ
            </a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  <ContactSection/>

  return (
    
    <div className="flex flex-col min-h-screen bg-background" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <Header />
      <main className="flex-grow">
        {/* Section 1: Hero Title */}
        <section 
          className="py-20 md:py-28 bg-slate-100 text-center bg-cover bg-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 tracking-tight">
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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 2: Floor Plan Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-start">
              {/* Left Column: Info */}
              <div className="flex flex-col items-start">
                <Badge className="bg-slate-700 hover:bg-slate-700 text-white px-4 py-1.5 text-lg font-semibold rounded-md mb-5">
                  {plan.status}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                  {plan.title}
                </h2>

                <div className="space-y-5 mb-8 w-full text-lg">
                  {[plan.area, plan.subdivision, plan.price].map(item => (
                    item && (
                      <div key={item.label} className="flex items-start text-slate-700">
                        {hasIcon(item) 
                          ? React.createElement(item.icon, {
                              className: "h-6 w-6 mr-4 text-slate-500 flex-shrink-0 mt-1"
                            })
                          : <DollarSign className="h-6 w-6 mr-4 text-slate-500 flex-shrink-0 mt-1" />
                        }
                        <div>
                          <p className="text-slate-600">{item.label}</p>
                          <p className="font-bold text-xl text-slate-800">{item.value}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
                {plan.description && (
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Right Column: Image */}
              <div className="relative aspect-[4/5] w-full mx-auto bg-white p-3 sm:p-4 rounded-lg border border-slate-200 shadow-sm">
                <Image
                  src={plan.imageSrc}
                  alt={plan.imageAlt}
                  fill
                  className="object-contain rounded-md"
                  priority // Ưu tiên tải hình ảnh này
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Sub-sections / Phân Khu (if any) */}
        {plan.subSections && plan.subSections.length > 0 && (
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12 md:mb-16">
                Phân Khu Cho Thuê
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {plan.subSections.map((sub, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
                    <div className="relative aspect-video w-full">
                      <Image 
                        src={sub.imageSrc || plan.imageSrc} // Fallback to main image if sub-image not provided
                        alt={sub.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{sub.title}</h3>
                      <Badge className="mb-3 bg-sky-100 text-sky-700 text-sm font-medium">
                        {sub.status}
                      </Badge>
                      <p className="text-slate-700 font-semibold">
                        Giá: <span className="text-green-600">{sub.price}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Contact Form (Reused/Adapted from homepage) */}
        <ContactSection />
      </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FloorPlanDetailPage;