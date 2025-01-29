import Hero from '@/components/homePageComponents/heroSection/Hero';
import { HeroCarousel } from '@/components/homePageComponents/heroSection/HeroCarousel';
import TabsGrid from '@/components/homePageComponents/TabsGrid';

import React from 'react';

const page = () => {
  return (
    <>
      <HeroCarousel />
      <div className="mt-[-140px] mb-10">
        <Hero />
      </div>
      <TabsGrid />
    </>
  );
};

export default page;
