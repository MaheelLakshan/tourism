import { Place } from '@/types/types';

type PlaceCardProps = {
  place: Place;
  isSelected: boolean;
  onClick: () => void;
};

const PlaceCard = ({ place, isSelected, onClick }: PlaceCardProps) => {
  return (
    <div id={`place-${place.id}`} className={`p-4 border rounded cursor-pointer ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`} onClick={onClick}>
      <h3 className="font-bold">{place.name}</h3>
      <img src={place.image} alt={place.name} className="w-full h-32 object-cover mt-2" />
    </div>
  );
};

export default PlaceCard;
