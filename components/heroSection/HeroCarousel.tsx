'use client';

import { slideData } from '@/data/heroSectionData';
import Carousel from './CarouselContent';

export function HeroCarousel() {
  return (
    <div className="relative overflow-hidden w-full h-full ">
      <Carousel slides={slideData} />
    </div>
  );
}
