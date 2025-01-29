import { Place } from '@/types/types';
import PlaceCard from './PlaceCard';

type PlaceListProps = {
  places: Place[];
  selectedPlace: Place | null;
  onPlaceClick: (place: Place) => void;
  placesListRef: React.RefObject<HTMLDivElement | null>;
};

const PlaceList = ({ places, selectedPlace, onPlaceClick, placesListRef }: PlaceListProps) => {
  return (
    <div className="md:w-1/4 max-h-96 overflow-y-auto" ref={placesListRef}>
      <h2 className="text-xl mb-4 font-semibold font-mono">Places</h2>
      <div className="space-y-4">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} isSelected={selectedPlace?.id === place.id} onClick={() => onPlaceClick(place)} />
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
