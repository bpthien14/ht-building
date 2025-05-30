"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Maximize2, LayoutGrid } from 'lucide-react';

const FloorPlanSection = () => {
  const floorPlans = [
    {
      tabValue: "tang-2-4",
      tabLabel: "Tầng 2-4",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 2-4",
      area: { icon: <Maximize2 className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: <LayoutGrid className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Phân Khu", value: "47 - 124 - 148m²" },
      imageSrc: "/images/400x550.jpg",
      imageAlt: "Floor plan for floors 2-4",
      aiHint: "architectural floor plan"
    },
    {
      tabValue: "tang-5",
      tabLabel: "Tầng 5",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 5",
      area: { icon: <Maximize2 className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: <LayoutGrid className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
      imageSrc: "/images/400x550.jpg",
      imageAlt: "Floor plan for floor 5",
      aiHint: "office layout blueprint"
    },
    {
      tabValue: "tang-6",
      tabLabel: "Tầng 6",
      status: "Còn Trống",
      title: "MẶT BẰNG TẦNG 6",
      area: { icon: <Maximize2 className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Cho Thuê", value: "485m²" },
      subdivision: { icon: <LayoutGrid className="h-5 w-5 mr-2 text-primary" />, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
      imageSrc: "/images/400x550.jpg",
      imageAlt: "Floor plan for floor 6",
      aiHint: "top floor plan"
    },
  ];

  return (
    <section id="floor-plan" className="py-16 md:py-24 bg-FFFFFF">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Mặt Bằng Cho Thuê
          </h2>
        </div>
        <Tabs defaultValue={floorPlans[0].tabValue} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-10">
            {floorPlans.map(plan => (
              <TabsTrigger key={plan.tabValue} value={plan.tabValue}>{plan.tabLabel}</TabsTrigger>
            ))}
          </TabsList>
          {floorPlans.map(plan => (
            <TabsContent key={plan.tabValue} value={plan.tabValue}>
              <Card className="overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 items-stretch">
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground w-fit mb-4">{plan.status}</Badge>
                    <h3 className="text-2xl font-semibold text-primary mb-6">{plan.title}</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-foreground">
                        {plan.area.icon}
                        <div>
                          <p className="text-sm text-muted-foreground">{plan.area.label}</p>
                          <p className="font-semibold text-lg">{plan.area.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-foreground">
                        {plan.subdivision.icon}
                        <div>
                          <p className="text-sm text-muted-foreground">{plan.subdivision.label}</p>
                          <p className="font-semibold text-lg">{plan.subdivision.value}</p>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto">
                      Xem Chi Tiết
                    </Button>
                  </div>
                  <div className="relative min-h-[300px] md:min-h-0">
                    <Image
                      src={plan.imageSrc}
                      alt={plan.imageAlt}
                      data-ai-hint={plan.aiHint}
                      fill
                      className="object-contain p-4 md:object-cover md:p-0" 
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlanSection;
