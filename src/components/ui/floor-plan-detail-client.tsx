'use client';
import React, { useState } from 'react';
import FloorPlanMainImage from '@/components/ui/floor-plan-main-image';
import FloorPlanSubImage from '@/components/ui/floor-plan-sub-image';
import { Badge } from '@/components/ui/badge';
import { DollarSign, LucideIcon, Maximize2, LayoutGrid } from 'lucide-react';
import { Lightbox } from '@/components/ui/lightbox';
import type { FloorPlanDataType, SubSectionType } from '@/data/floorPlansData';

interface FloorPlanDetailClientProps {
  plan: FloorPlanDataType;
}

type ItemWithIcon = { icon: LucideIcon; label: string; value: string };
type ItemWithoutIcon = { label: string; value: string };
type FloorPlanItem = ItemWithIcon | ItemWithoutIcon;

const iconMap: Record<string, LucideIcon> = { Maximize2, LayoutGrid };

const FloorPlanDetailClient = ({ plan }: FloorPlanDetailClientProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!plan) return null;

  // Tạo mảng images cho lightbox
  const images = [
    { src: plan?.imageSrc || '', alt: plan?.imageAlt || '' },
    ...(plan?.subSections?.map((sub: any) => ({ src: sub.imageSrc || '', alt: sub.imageAlt || '' })) || [])
  ];

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
  const goToNext = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const goToPrevious = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Info + Main Image */}
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
                {[plan.area, plan.subdivision, plan.price].map((item: any) => (
                  item && (
                    <div key={item.label} className="flex items-start text-slate-700">
                      {item.icon && iconMap[item.icon]
                        ? React.createElement(iconMap[item.icon], {
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
                <p
                  className="text-slate-600 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
              )}
            </div>
            {/* Right Column: Image */}
            <FloorPlanMainImage images={images} index={0} onOpen={openLightbox} />
          </div>
        </div>
      </section>

      {/* Sub-sections / Phân Khu */}
      {plan.subSections && plan.subSections.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12 md:mb-16">
              Phân Khu Cho Thuê
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {plan.subSections.map((sub: any, index: number) => (
                <FloorPlanSubImage
                  key={index}
                  images={images}
                  index={index + 1}
                  onOpen={openLightbox}
                  title={sub.title}
                  status={sub.status}
                  price={sub.price}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox cho ảnh mặt bằng và phân khu */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={images}
        currentIndex={lightboxIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </div>
  );
};

export default FloorPlanDetailClient; 