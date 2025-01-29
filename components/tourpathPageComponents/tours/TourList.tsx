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
      <div className="text-4xl font-bold mb-4 text-primary text-center font-mono">Trending Tours</div>
      <hr className="my-4" />
      <div className="flex ">
        <div className="flex flex-1 gap-4 overflow-x-auto pb-2">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onClick={() => onTourClick(tour)} isSelected={selectedTour?.id === tour.id} />
          ))}
        </div>
        <button className="mx-4 w-70 shrink-0 text-2xl px-4 py-2 bg-blue-500 text-white rounded font-bold transition duration-300 hover:bg-blue-500 hover:scale-105">See All Tours</button>
      </div>
    </div>
  );
};

export default TourList;
