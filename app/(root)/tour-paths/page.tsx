import MapContainer from '@/components/tourpathPageComponents/map/MapContainer';
import { Tour } from '@/types/types';

const sampleTours: Tour[] = [
  {
    id: 1,
    name: 'City Tour',
    image: 'https://www.researchgate.net/publication/317647093/figure/fig1/AS:668909233528832@1536491797058/Study-area-Left-Sri-Lanka-map-Right-Colombo-city-map.png',
    places: [
      {
        id: 1,
        name: 'Central Park',
        x: 150,
        y: 300,
        description: 'Main city park with beautiful scenery',
        image: '/park.jpg',
      },
      {
        id: 2,
        name: 'Museum',
        x: 450,
        y: 200,
        description: 'National history museum',
        image: '/museum.jpg',
      },
      {
        id: 3,
        name: 'Main Square',
        x: 300,
        y: 100,
        description: 'City center with historic buildings',
        image: '/square.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Heritage Tour',
    image: 'https://www.researchgate.net/profile/Mohammed-Ibrahim-Kaleel-2/publication/322695863/figure/fig1/AS:586569589202944@1516860496732/Study-Area_Q320.jpg',
    places: [
      {
        id: 4,
        name: 'Ancient Temple',
        x: 200,
        y: 400,
        description: 'A historic temple with intricate carvings',
        image: '/temple.jpg',
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <MapContainer tours={sampleTours} />
    </>
  );
}
