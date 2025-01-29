import { Place } from '@/types/types';

type MarkerProps = {
  place: Place;
  isSelected: boolean;
  onClick: () => void;
};

const Marker = ({ place, isSelected, onClick }: MarkerProps) => {
  return (
    <g transform={`translate(${place.x},${place.y})`} className="cursor-pointer hover:opacity-75" onClick={onClick}>
      <path d="M0-24c6.628 0 12 5.372 12 12 0 6.628-12 24-12 24s-12-17.372-12-24c0-6.628 5.372-12 12-12z" fill={isSelected ? '#ef4444' : '#3b82f6'} />
      <text x="15" y="5" fontSize="12" fill="#333" fontWeight="bold">
        {place.name}
      </text>
    </g>
  );
};

export default Marker;
