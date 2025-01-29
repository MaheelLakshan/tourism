import { Place } from '@/types/types';
import Image from 'next/image';

type PlaceCardProps = {
  place: Place;
  isSelected: boolean;
  onClick: () => void;
};

const PlaceCard = ({ place, isSelected, onClick }: PlaceCardProps) => {
  return (
    <div id={`place-${place.id}`} className={`p-4 border rounded cursor-pointer ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`} onClick={onClick} >
      <h3 className="font-bold">{place.name}</h3>
      <Image src={place.image} alt={place.name} className="w-full h-37 object-cover" />
    </div>
  );
};

export default PlaceCard;
