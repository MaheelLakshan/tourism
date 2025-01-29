import { Tour } from '@/types/types';

type TourCardProps = {
  tour: Tour;
  onClick: () => void;
  isSelected: boolean; // New prop to check if this card is selected
};

const TourCard = ({ tour, onClick, isSelected }: TourCardProps) => {
  return (
    <div
      className={`min-w-[200px] p-4 border rounded cursor-pointer hover:shadow-md ${
        isSelected ? 'bg-gray-800 text-white' : 'bg-white text-black' // Apply a dark background when selected
      } ${isSelected ? 'border-gray-900' : 'border-gray-300'}`} // Dark border for selected card
      onClick={onClick}
    >
      <h3 className="font-bold mb-2">{tour.name}</h3>
      <p className="text-sm">
        {tour.places.length} place{tour.places.length > 1 ? 's' : ''}
      </p>
    </div>
  );
};

export default TourCard;
