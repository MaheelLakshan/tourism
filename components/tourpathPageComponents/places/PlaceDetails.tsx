import { Place } from '@/types/types';
import Image from 'next/image';

type PlaceDetailsProps = {
  place: Place;
};

const PlaceDetails = ({ place }: PlaceDetailsProps) => {
  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-primary font-mono">{place.name}</h2>
      <div className="flex gap-2">
        <Image src={place.image} alt={place.name} className="w-1/3 h-full object-cover mb-4" />
        <Image src={place.image} alt={place.name} className="w-1/3 h-full object-cover mb-4" />
        <Image src={place.image} alt={place.name} className="w-1/3 h-full object-cover mb-4" />
      </div>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetails;
