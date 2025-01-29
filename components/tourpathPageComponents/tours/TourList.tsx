import { Tour } from '@/types/types';
import TourCard from './TourCard';

type TourListProps = {
  tours: Tour[];
  onTourClick: (tour: Tour) => void;
  selectedTour: Tour | null;
};

const TourList = ({ tours, onTourClick, selectedTour }: TourListProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Trending Tours</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            onClick={() => onTourClick(tour)}
            isSelected={selectedTour?.id === tour.id} // Check if this tour is selected
          />
        ))}
      </div>
    </div>
  );
};

export default TourList;
