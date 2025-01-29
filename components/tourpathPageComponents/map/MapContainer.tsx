'use client';
import { useState, useRef, useEffect } from 'react';
import { Tour, Place } from '@/types/types';
import MapView from './MapView';
import PlaceDetails from '../places/PlaceDetails';
import PlaceList from '../places/PlaceList';
import TourList from '../tours/TourList';

type MapContainerProps = {
  tours: Tour[];
};

const MapContainer = ({ tours }: MapContainerProps) => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(tours[0]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const placesListRef = useRef<HTMLDivElement | null>(null);

  // Scroll to selected place when clicked
  useEffect(() => {
    if (selectedPlace && placesListRef.current) {
      const placeElement = document.getElementById(`place-${selectedPlace.id}`);
      if (placeElement) {
        placeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedPlace]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Sri Lanka</h1>
      <TourList
        tours={tours}
        onTourClick={(tour) => {
          setSelectedTour(tour);
          setSelectedPlace(null);
        }}
        selectedTour={selectedTour}
      />

      <div className="w-full justify-start flex">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">See All Tours</button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <MapView selectedTour={selectedTour} setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace} />
        {selectedTour && (
          <PlaceList
            places={selectedTour.places}
            selectedPlace={selectedPlace}
            onPlaceClick={setSelectedPlace}
            placesListRef={placesListRef} // Pass ref
          />
        )}
      </div>
      {selectedPlace && <PlaceDetails place={selectedPlace} />}
    </div>
  );
};

export default MapContainer;
