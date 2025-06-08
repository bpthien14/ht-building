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

const iconMap: Record<string, LucideIcon> = { Maximize2, LayoutGrid };

const FloorPlanDetailClient = ({ plan }: FloorPlanDetailClientProps) => {
  // Lightbox cho main image
  const [isMainLightboxOpen, setIsMainLightboxOpen] = useState(false);
  // Lightbox cho từng phân khu
  const [subSectionLightbox, setSubSectionLightbox] = useState<{ open: boolean; sectionIdx: number; imgIdx: number }>({ open: false, sectionIdx: -1, imgIdx: 0 });

  if (!plan) return null;

  // Mảng ảnh cho main image (chỉ 1 ảnh)
  const mainImage = [{ src: plan?.imageSrc || '', alt: plan?.imageAlt || '' }];

  // Mảng subSections đã có images
  const subSections = plan.subSections || [];

  // Mở lightbox main image
  const openMainLightbox = () => setIsMainLightboxOpen(true);
  const closeMainLightbox = () => setIsMainLightboxOpen(false);

  // Mở lightbox cho phân khu
  const openSubSectionLightbox = (sectionIdx: number, imgIdx: number = 0) => setSubSectionLightbox({ open: true, sectionIdx, imgIdx });
  const closeSubSectionLightbox = () => setSubSectionLightbox({ open: false, sectionIdx: -1, imgIdx: 0 });
  const goToNextSubSectionImg = () => {
    const imgs = subSections[subSectionLightbox.sectionIdx]?.images || [];
    setSubSectionLightbox((prev) => ({ ...prev, imgIdx: (prev.imgIdx + 1) % imgs.length }));
  };
  const goToPrevSubSectionImg = () => {
    const imgs = subSections[subSectionLightbox.sectionIdx]?.images || [];
    setSubSectionLightbox((prev) => ({ ...prev, imgIdx: (prev.imgIdx - 1 + imgs.length) % imgs.length }));
  };

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
                {[plan.area, plan.subdivision, plan.price].map((item) => {
                  const isIconItem = (it: unknown): it is { icon: string; label: string; value: string } =>
                    typeof it === 'object' && it !== null && 'icon' in it && typeof (it as Record<string, unknown>).icon === 'string';
                  return item && (
                    <div key={item.label} className="flex items-start text-slate-700">
                      {isIconItem(item) && item.icon && iconMap[item.icon]
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
                  );
                })}
              </div>
              {plan.description && (
                <p
                  className="text-slate-600 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
              )}
            </div>
            {/* Right Column: Image */}
            <FloorPlanMainImage images={mainImage} index={0} onOpen={openMainLightbox} />
          </div>
        </div>
      </section>

      {/* Sub-sections / Phân Khu */}
      {subSections.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-12 md:mb-16">
              Phân Khu Cho Thuê
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subSections.map((sub, idx) => (
                <FloorPlanSubImage
                  key={idx}
                  images={sub.images || [{ src: sub.imageSrc, alt: sub.imageAlt }]}
                  index={0}
                  onOpen={(imgIdx) => openSubSectionLightbox(idx, imgIdx)}
                  title={sub.title}
                  status={sub.status}
                  price={sub.price}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox cho main image */}
      <Lightbox
        isOpen={isMainLightboxOpen}
        onClose={closeMainLightbox}
        images={mainImage}
        currentIndex={0}
        onNext={() => {}}
        onPrevious={() => {}}
      />
      {/* Lightbox cho từng phân khu */}
      {subSectionLightbox.open && subSections[subSectionLightbox.sectionIdx]?.images && (
        <Lightbox
          isOpen={subSectionLightbox.open}
          onClose={closeSubSectionLightbox}
          images={subSections[subSectionLightbox.sectionIdx].images!}
          currentIndex={subSectionLightbox.imgIdx}
          onNext={goToNextSubSectionImg}
          onPrevious={goToPrevSubSectionImg}
        />
      )}
    </div>
  );
};

export default FloorPlanDetailClient; 