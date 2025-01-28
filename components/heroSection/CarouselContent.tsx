'use client';

import { HeroSectionImagesData } from '@/data/HeroSectionImagesData';
import Image, { StaticImageData } from 'next/image';

interface SlideData {
  title: string;
  button: string;
  src: StaticImageData;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  const { src } = slide;

  return (
    <div className="[perspective:620px] [transform-style:preserve-3d]">
      <li
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[2vmin] z-10 "
        style={{
          transform: current !== index ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'bottom',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden ">
          <Image className="absolute inset-0 w-[100%] h-[100%] object-cover opacity-100" alt={'hero image'} src={src} loading="eager" />
          {/* <img className="absolute inset-0 w-[100%] h-[100%] object-cover opacity-10" alt={'hero image'} src={src} loading="eager" /> */}
          {/* {<div className="absolute inset-0 bg-black/30" />} */}
        </div>
      </li>
    </div>
  );
};

export default function Carousel() {
  const current = 1;

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto">
      <ul
        className="absolute flex mx-[-4vmin] "
        style={{
          transform: `translateX(-${current * (100 / HeroSectionImagesData.length)}%)`,
        }}
      >
        {HeroSectionImagesData.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} />
        ))}
      </ul>
    </div>
  );
}
