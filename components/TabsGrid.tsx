import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TourCard } from './TourCard';

const TabsGrid = () => {
  return (
    <Tabs defaultValue="all">
      <div className="text-4xl font-bold my-2 bg-muted py-4 text-primary justify-center flex">Trending</div>
      <TabsList className="flex justify-center py-8 gap-8">
        <TabsTrigger value="all" className="text-xl font-bold">
          ALL
        </TabsTrigger>
        <TabsTrigger value="tours" className="text-xl font-bold">
          Tours
        </TabsTrigger>
        <TabsTrigger value="hotels" className="text-xl font-bold">
          Hotels
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </TabsContent>
      <TabsContent value="tours" className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </TabsContent>
      <TabsContent value="hotels" className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </TabsContent>
    </Tabs>
  );
};

export default TabsGrid;
