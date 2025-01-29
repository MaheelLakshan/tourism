import { Place } from '@/types/types';

type PlaceDetailsProps = {
  place: Place;
};

const PlaceDetails = ({ place }: PlaceDetailsProps) => {
  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">{place.name}</h2>
      <img src={place.image} alt={place.name} className="w-full h-64 object-cover mb-4" />
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetails;
