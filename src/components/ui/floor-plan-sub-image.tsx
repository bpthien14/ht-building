'use client';
import Image from 'next/image';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FloorPlanSubImageProps {
  images: { src: string; alt: string }[];
  index: number;
  onOpen: (idx: number) => void;
  title: string;
  status: string;
  price: string;
}

const FloorPlanSubImage = ({ images, index, onOpen, title, status, price }: FloorPlanSubImageProps) => {
  const img = images[index];
  return (
    <Card className="overflow-hidden shadow-none border-none hover:shadow-lg transition-shadow duration-300 bg-[#F8F4EF] rounded-lg">
      <div className="relative aspect-video w-full bg-white p-2 border-b border-slate-200 cursor-pointer group" onClick={() => onOpen(index)}>
        <Image 
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain group-hover:opacity-80 transition-opacity duration-200"
          style={{ backgroundColor: '#F8F4EF' }}
        />
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Xem lớn</span>
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-3xl font-semibold text-slate-800 mb-2">{title}</h3>
        <Badge className="mb-3 bg-slate-700 text-white text-xs px-3 py-1 font-semibold rounded-full inline-block">
          {status}
        </Badge>
        <p className="text-base text-slate-600">
          <span className="font-bold text-slate-800"> Giá: </span> {price}
        </p>
      </CardContent>
    </Card>
  );
};

export default FloorPlanSubImage; 