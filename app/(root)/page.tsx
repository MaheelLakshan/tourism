import Hero from '@/components/homePageComponents/heroSection/Hero';
import { HeroCarousel } from '@/components/homePageComponents/heroSection/HeroCarousel';
import TabsGrid from '@/components/homePageComponents/TabsGrid';

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
