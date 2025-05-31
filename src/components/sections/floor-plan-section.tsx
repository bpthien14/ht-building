"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Maximize2, LayoutGrid } from 'lucide-react';

const FloorPlanSection = () => {
  const floorPlans = [
    {
      tabValue: "tang-2-4",
      tabLabel: "Tầng 2 - 4",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 2-4",
      area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "47 - 124 - 148m²" },
      imageSrc: "/images/BV-tang24.png",
      imageAlt: "Bản vẽ mặt bằng tầng 2-4",
      aiHint: "architectural floor plan"
    },
    {
      tabValue: "tang-5",
      tabLabel: "Tầng 5",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 5",
      area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
      imageSrc: "/images/BV-tang5.png",
      imageAlt: "Bản vẽ mặt bằng tầng 5",
      aiHint: "office layout blueprint"
    },
    {
      tabValue: "tang-6",
      tabLabel: "Tầng 6",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 6",
      area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
      imageSrc: "/images/BV-tang6.png",
      imageAlt: "Bản vẽ mặt bằng tầng 6",
      aiHint: "top floor plan"
    },
  ];

  return (
    <section id="floor-plan" className="py-16 md:py-24 bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Mặt Bằng Cho Thuê
          </h2>
        </div>
        <Tabs defaultValue={floorPlans[0].tabValue} className="w-full">
          <TabsList 
            className="grid items-center mx-auto mb-12 max-w-xl p-1.5 rounded-xl" 
            style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }} 
          >
            {floorPlans.flatMap((plan, index) => {
              const trigger = (
                <TabsTrigger 
                  key={plan.tabValue} 
                  value={plan.tabValue}
                  className="py-4 px-8 text-center group relative bg-white transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 data-[state=active]:bg-white data-[state=active]:rounded-lg data-[state=active]:shadow-none data-[state=active]:scale-105"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold group-data-[state=active]:text-stone-800 group-data-[state=active]:font-bold group-data-[state=inactive]:text-stone-600">{plan.tabLabel}</span>
                    <span className="text-sm mt-1 group-data-[state=active]:text-stone-700 group-data-[state=inactive]:text-stone-600">{plan.status}</span>
                  </div>
                </TabsTrigger>
              );
              if (index < floorPlans.length - 1) {
                const divider = <div key={`divider-${index}`} className="w-px pl-1 mx-2 h-3/4 bg-black self-center"></div>;
                return [trigger, divider];
              }
              return [trigger];
            })}
          </TabsList>
          
          <div className="relative">
            {floorPlans.map(plan => (
              <TabsContent 
                forceMount
                key={plan.tabValue} 
                value={plan.tabValue}
                className="focus-visible:outline-none transition-all duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=inactive]:hidden data-[state=active]:opacity-100"
              >
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 items-start pt-8 w-5/6 ml-auto">                  <div className="flex flex-col items-start">
                    <Badge className="bg-slate-700 hover:bg-slate-700 text-white px-4 py-1.5 text-lg font-semibold rounded-md mb-5" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {plan.status}
                    </Badge>
                    <h3 className="text-4xl font-semibold text-slate-800 mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {plan.title}
                    </h3>
                    <div className="space-y-5 mb-8 w-full">
                      {[plan.area, plan.subdivision].map(item => (
                        <div key={item.label} className="flex items-start text-slate-700">
                          <item.icon className="h-7 w-7 mr-5 text-slate-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xl text-slate-600" style={{ fontFamily: 'var(--font-montserrat)' }}>{item.label}</p>
                            <p className="font-bold text-2xl text-slate-800" style={{ fontFamily: 'var(--font-montserrat)' }}>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-8 text-xl font-semibold rounded-md shadow-sm transition-colors duration-300 mt-8 ml-20" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      Xem Chi Tiết
                    </Button>
                  </div>

                  <div className="relative aspect-[4/5] w-full mx-auto bg-white p-3 sm:p-4 rounded-lg border border-slate-200 shadow-sm">
                    <Image
                      src={plan.imageSrc}
                      alt={plan.imageAlt}
                      data-ai-hint={plan.aiHint}
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlanSection;
