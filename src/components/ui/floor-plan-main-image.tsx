'use client';
import Image from 'next/image';
import React from 'react';

interface FloorPlanMainImageProps {
  images: { src: string; alt: string }[];
  index: number;
  onOpen: (idx: number) => void;
}

const FloorPlanMainImage = ({ images, index, onOpen }: FloorPlanMainImageProps) => {
  const img = images[index];
  return (
    <div className="relative aspect-[4/5] w-full mx-auto bg-white p-3 sm:p-4 rounded-lg border border-slate-200 shadow-sm cursor-pointer group" onClick={() => onOpen(index)}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-contain rounded-md group-hover:opacity-80 transition-opacity duration-200"
        priority
      />
      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Xem lớn</span>
    </div>
  );
};

export default FloorPlanMainImage; 