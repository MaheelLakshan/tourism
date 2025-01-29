import { Place, Tour } from '@/types/types';
import Marker from './Marker';

type MapViewProps = {
  selectedTour: Tour;
  selectedPlace: Place | null;
  setSelectedPlace: (place: Place) => void;
};

const MapView = ({ selectedTour, selectedPlace, setSelectedPlace }: MapViewProps) => {
  return (
    <div className="flex-1 bg-gray-50 rounded-lg p-4">
      <svg viewBox="0 0 800 600" className="w-full h-96 border rounded" preserveAspectRatio="xMidYMid meet">
        {/* <Image src={selectedTour?.image} alt="Selectedmap" width={800} height={600}  /> hidration error challenge */}
        <image href={selectedTour?.image || ''} x="0" y="0" width="800" height="600" />

        {selectedTour?.places.map((place, index) => {
          if (index < selectedTour.places.length - 1) {
            const nextPlace = selectedTour.places[index + 1];
            return <line key={`line-${place.id}-${nextPlace.id}`} x1={place.x} y1={place.y} x2={nextPlace.x} y2={nextPlace.y} stroke="black" strokeWidth="2" strokeDasharray="5,5" />;
          }
          return null;
        })}
        {selectedTour?.places.map((place) => (
          <Marker key={place.id} place={place} isSelected={selectedPlace?.id === place.id} onClick={() => setSelectedPlace(place)} />
        ))}
      </svg>
    </div>
  );
};

export default MapView;
