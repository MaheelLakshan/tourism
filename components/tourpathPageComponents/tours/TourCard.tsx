'use client';

import { Tour } from '@/types/types';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';

type TourCardProps = {
  tour: Tour;
  onClick: () => void;
  isSelected: boolean;
};

const TourCard = ({ tour, onClick, isSelected }: TourCardProps) => {
  return (
    <div className={`min-h-[370px] min-w-[200px] pt-2 ${isSelected ? 'border-blue-100 border text-white' : 'bg-white text-black'} `} onClick={onClick}>
      <PinContainer rating={tour.rating} href="#selectedTour">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h1 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-primary">{tour.name}</h1>

          <div className="justify-center font-mono items-center bg-muted mb-2 py-1 text-orange-400 font-bold rounded-md">
            <span className=" font-bold bg-primary  mx-2 px-2 py-1  rounded-md">{tour.days} Days</span>
            <span className=" font-bold bg-primary  mx-2 px-2 py-1 rounded-md">{tour.cost} USD</span>
            <span className="bg-primary mx-2 px-2 py-1 rounded-md">
              {tour.places.length}+ Place{tour.places.length > 1 ? 's' : ''}
            </span>
          </div>

          <Image className="rounded-lg w-full h-[250px]" width={250} height={250} src={tour.thumbnail} alt="tourImg" />
        </div>
      </PinContainer>
    </div>
  );
};

export default TourCard;
