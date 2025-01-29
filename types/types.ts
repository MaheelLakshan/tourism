import { StaticImageData } from 'next/image';

export type Place = {
  id: number;
  name: string;
  x: number; 
  y: number; 
  description: string;
  image: StaticImageData;
};

export type Tour = {
  id: number;
  name: string;
  cost: string;
  days: number;
  rating: number;
  thumbnail: StaticImageData;
  image: string;
  places: Place[];
};
