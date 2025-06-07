"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { floorPlansData } from '@/data/floorPlansData';
import React, { useState } from 'react';
import { Maximize2, LayoutGrid } from 'lucide-react';
import type { FloorPlanDataType } from '@/data/floorPlansData';

const iconMap: Record<string, any> = { Maximize2, LayoutGrid };

const FloorPlanSection = () => {
  // Ép kiểu tạm thời để tránh lỗi type do icon giờ là string
  const currentFloorPlans: FloorPlanDataType[] = floorPlansData;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (tabValue: string) => {
    const newIndex = currentFloorPlans.findIndex(plan => plan.tabValue === tabValue);
    if (newIndex !== -1 && newIndex !== currentTabIndex) {
      setCurrentTabIndex(newIndex);
    }
  };

  return (
    <section id="floor-plan" className="py-16 md:py-24 bg-white" style={{ fontFamily: 'Montserrat, Raleway, Arial, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">
            Mặt Bằng Cho Thuê
          </h2>
        </div>
        <Tabs 
          defaultValue={currentFloorPlans && currentFloorPlans.length > 0 ? currentFloorPlans[0].tabValue : undefined} 
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList 
            className="grid items-center mx-auto mb-12 w-full max-w-sm sm:max-w-lg md:max-w-xl p-1 sm:p-1.5 rounded-xl" 
            style={{ gridTemplateColumns: `repeat(${(currentFloorPlans?.length || 0) * 2 - 1}, auto)` }}
          >
            {(currentFloorPlans || []).flatMap((plan: FloorPlanDataType, index: number) => {
              const trigger = (
                <TabsTrigger 
                  key={plan.tabValue} 
                  value={plan.tabValue}
                  className="py-3 px-4 sm:py-4 sm:px-6 md:px-8 text-center group relative bg-white transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 data-[state=active]:bg-white data-[state=active]:rounded-lg data-[state=active]:shadow-none data-[state=active]:scale-110"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm sm:text-base md:text-lg font-semibold group-data-[state=active]:text-stone-800 group-data-[state=active]:font-bold group-data-[state=inactive]:text-stone-600">{plan.tabLabel}</span>
                    <span className="text-xs sm:text-sm mt-1 group-data-[state=active]:text-stone-700 group-data-[state=inactive]:text-stone-600">{plan.status}</span>
                  </div>
                </TabsTrigger>
              );
              if (index < (currentFloorPlans?.length || 0) - 1) {
                const divider = <div key={`divider-${index}`} className="w-px pl-1 mx-1 sm:mx-2 h-3/4 bg-black self-center"></div>;
                return [trigger, divider];
              }
              return [trigger];
            })}
          </TabsList>
          {/* MCP Figma UI cho từng tab */}
          <div className="relative overflow-hidden min-h-[640px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${currentFloorPlans.length * 100}%`,
                transform: `translateX(-${currentTabIndex * (100 / (currentFloorPlans.length || 1))}%)`,
              }}
            >
              {(currentFloorPlans || []).map((plan: FloorPlanDataType) => (
                <TabsContent 
                  forceMount
                  key={plan.tabValue} 
                  value={plan.tabValue}
                  className="focus-visible:outline-none flex-shrink-0 overflow-hidden"
                  style={{ width: `${100 / (currentFloorPlans.length || 1)}%`, fontFamily: 'Montserrat, Raleway, Arial, sans-serif' }}
                >
                  {/* Figma MCP Section Start */}
                  <div className="w-full flex justify-center mt-0">
                    <div
                      className="bg-white rounded-lg shadow-none flex flex-col md:flex-row items-center md:items-start gap-10 px-6 pt-4 pb-10 md:py-8 md:px-16 max-w-[1071px] w-full border border-[#ececec] border-none"
                      style={{ fontFamily: 'Montserrat, Raleway, Arial, sans-serif' }}
                    >
                      {/* Left Content (Mobile: căn giữa, md: text-left) */}
                      <div className="flex-1 min-w-[320px] max-w-[480px] flex flex-col gap-4 md:gap-8 items-center md:items-start text-center md:text-left">
                        <Badge className="bg-[#303846] text-white px-2 py-0.5 text-sm font-semibold rounded mb-1">
                          {plan.status}
                        </Badge>
                        <h3
                          className="text-[32px] sm:text-[40px] font-semibold mb-2"
                          style={{ fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '1.22em', letterSpacing: '-2%' }}
                        >
                          {plan.title}
                        </h3>
                        {/* Hình ảnh tầng nằm ngay dưới tiêu đề ở mobile */}
                        <div className="w-full flex justify-center md:hidden mb-4">
                          <Image
                            src={plan.imageSrc}
                            alt={plan.imageAlt}
                            width={320}
                            height={422}
                            className="rounded-[3px] w-full max-w-[320px] h-auto object-contain border border-[#000000]"
                            style={{ aspectRatio: '476/628' }}
                          />
                        </div>
                        <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
                          {plan.area?.icon && iconMap[plan.area.icon] && (
                            React.createElement(iconMap[plan.area.icon], { className: "h-6 w-6 mr-3 text-[#222]" })
                          )}
                          <div>
                            <div className="text-lg text-[#222] font-normal" >{plan.area?.label}</div>
                            <div className="text-2xl font-bold text-[#222]" >{plan.area?.value}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
                          {plan.subdivision?.icon && iconMap[plan.subdivision.icon] && (
                            React.createElement(iconMap[plan.subdivision.icon], { className: "h-6 w-6 mr-3 text-[#222]" })
                          )}
                          <div>
                            <div className="text-lg text-[#222] font-normal">{plan.subdivision?.label}</div>
                            <div className="text-2xl font-bold text-[#222]">{plan.subdivision?.value}</div>
                          </div>
                        </div>
                        <Link
                          href={`/${plan.tabValue}`}
                          className="bg-[#303846] text-white rounded-[8px] px-10 py-4 text-[24px] font-medium w-fit mt-6 shadow block text-center transition-all duration-200 ease-in-out hover:bg-[#222] hover:scale-[1.04] hover:shadow-xl focus-visible:outline-none"
                          style={{ fontFamily: 'Montserrat', fontWeight: 500, lineHeight: '1.5em', boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
                        >
                          Xem Chi Tiết
                        </Link>
                        {/* Hình ảnh tầng ở desktop sẽ nằm bên phải, mobile đã hiển thị phía trên */}
                      </div>
                      {/* Right Image (ẩn ở mobile, chỉ hiện ở md trở lên) */}
                      <div className="flex-1 justify-center items-center min-w-[320px] max-w-[476px] hidden md:flex">
                        <Image
                          src={plan.imageSrc}
                          alt={plan.imageAlt}
                          width={476}
                          height={628}
                          className="rounded-[3px] w-full max-w-[476px] h-auto object-contain border border-[#000000]"
                          style={{ aspectRatio: '476/628' }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Figma MCP Section End */}
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlanSection;
