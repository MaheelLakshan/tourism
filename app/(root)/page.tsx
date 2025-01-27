import Hero from '@/components/heroSection/Hero';
import { HeroCarousel } from '@/components/heroSection/HeroCarousel';
import TabsGrid from '@/components/TabsGrid';

import React from 'react';

const page = () => {
  return (
    <div className="text-primary">
      <div className="relative">
        <HeroCarousel />

        <div className="mt-[-140px]">
          <Hero />
        </div>
      </div>

      <div className="mt-10">
        <TabsGrid />
      </div>
    </div>
  );
};

export default page;
