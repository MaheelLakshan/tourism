export type Place = {
  id: number;
  name: string;
  x: number; // SVG X coordinate
  y: number; // SVG Y coordinate
  description: string;
  image: string;
};

export type Tour = {
  id: number;
  name: string;
  image: string;
  places: Place[];
};
