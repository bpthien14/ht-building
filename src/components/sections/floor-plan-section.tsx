"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { floorPlansData, FloorPlanDataType } from '@/data/floorPlansData';
import React, { useState } from 'react';

interface DetailListItem {
  icon?: React.ElementType;
  label: string;
  value: string;
}

const FloorPlanSection = () => {
  const currentFloorPlans: FloorPlanDataType[] = floorPlansData;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (tabValue: string) => {
    const newIndex = currentFloorPlans.findIndex(plan => plan.tabValue === tabValue);
    if (newIndex !== -1 && newIndex !== currentTabIndex) {
      setCurrentTabIndex(newIndex);
    }
  };

  return (
    <section id="floor-plan" className="py-16 md:py-24 bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
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
                  className="py-3 px-4 sm:py-4 sm:px-6 md:px-8 text-center group relative bg-white transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 data-[state=active]:bg-white data-[state=active]:rounded-lg data-[state=active]:shadow-none data-[state=active]:scale-105"
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
          
          {/* Container cho slide animation */}
          <div className="relative overflow-hidden min-h-[800px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${currentFloorPlans.length * 100}%`,
                transform: `translateX(-${currentTabIndex * (100 / (currentFloorPlans.length || 1))}%)`,
              }}
            >
              {(currentFloorPlans || []).map((plan: FloorPlanDataType, index: number) => {
                const displayItems: DetailListItem[] = [];
                if (plan.area) {
                  displayItems.push({ icon: plan.area.icon, label: plan.area.label, value: plan.area.value });
                }
                if (plan.subdivision) {
                  displayItems.push({ icon: plan.subdivision.icon, label: plan.subdivision.label, value: plan.subdivision.value });
                }

                return (
                  <TabsContent 
                    forceMount
                    key={plan.tabValue} 
                    value={plan.tabValue}
                    className="focus-visible:outline-none flex-shrink-0 overflow-hidden"
                    style={{ width: `${100 / (currentFloorPlans.length || 1)}%` }}
                  >
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 items-start pt-8 w-full max-w-6xl mx-auto md:mx-0 md:ml-20">
                      <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Badge className="bg-slate-700 hover:bg-slate-700 text-white px-4 py-1.5 text-lg font-semibold rounded-md mb-5">
                          {plan.status}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
                          {plan.title}
                        </h3>
                        <div className="space-y-5 mb-8 w-full">
                          {displayItems.map((item) => (
                            <div key={item.label} className="flex items-start text-slate-700 justify-center md:justify-start">
                              {item.icon && <item.icon className="h-6 w-6 sm:h-7 sm:w-7 mr-3 sm:mr-5 text-slate-500 flex-shrink-0 mt-1" />}
                              <div className={!item.icon ? 'ml-[calc(theme(spacing.6)_+_theme(spacing.3))] sm:ml-[calc(theme(spacing.7)_+_theme(spacing.5))]' : ''}>
                                <p className="text-lg sm:text-xl text-slate-600">{item.label}</p>
                                <p className="font-bold text-xl sm:text-2xl text-slate-800">{item.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link 
                          href={`/mat-bang/${plan.tabValue}`}
                          className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold rounded-md shadow-sm transition-colors duration-300 mt-8 ml-0 sm:ml-10 md:ml-20 inline-block text-center"
                        >
                          Xem Chi Tiết
                        </Link>
                      </div>

                      <div className="relative aspect-[4/5] w-full bg-transparent p-3 sm:p-4 rounded-lg border border-none shadow-none md:-ml-12">
                        <Image
                          src={plan.imageSrc}
                          alt={plan.imageAlt}
                          data-ai-hint={plan.aiHint}
                          fill
                          className="object-contain"
                          priority={index === currentTabIndex}
                        />
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlanSection;
