'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './../ui/3d-card';
import Link from 'next/link';

interface TourCardProps {
  title: string;
  path: string;
  highlight: string;
  attractions: string;
  image: StaticImageData;
  count: string;
}

export function TourCard({ title, path, image, highlight, attractions, count }: TourCardProps) {
  return (
    <Link href="/tour-paths">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white pb-2">
            {title}
          </CardItem>
          <CardItem className="items-center justify-center w-[80px] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{count}+ places</CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {path}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image src={image} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <span className="font-bold">Highlights: </span>
            {highlight}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <span className="font-bold">attractions: </span>
            {attractions}
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
