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
  const [selectedTour, setSelectedTour] = useState<Tour>(tours[0]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const placesListRef = useRef<HTMLDivElement | null>(null);

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
      <TourList
        tours={tours}
        onTourClick={(tour) => {
          setSelectedTour(tour);
          setSelectedPlace(null);
        }}
        selectedTour={selectedTour}
      />

      <section id="selectedTour">
        <h1 className="bg-muted mt-10 py-6 text-black text-xl font-bold text-center font-mono">
          Selected Tour: <span className="text-white text-2xl bg-primary px-6 rounded">{selectedTour?.name}</span>
        </h1>

        {/* To be developed ,Hence hardcoded ..Explain this in the video*/}
        <div className="w-full justify-center flex gap-4">
          <button className="px-4 py-2 bg-primary text-white rounded font-bold transition duration-300 hover:bg-primary/80 hover:scale-105">Places</button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded font-bold transition duration-300 hover:bg-blue-500 hover:scale-105">Events</button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded font-bold transition duration-300 hover:bg-blue-500 hover:scale-105">Residents</button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded font-bold transition duration-300 hover:bg-blue-500 hover:scale-105">Tour Agencies</button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <MapView selectedTour={selectedTour} setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace} />
          {selectedTour && <PlaceList places={selectedTour.places} selectedPlace={selectedPlace} onPlaceClick={setSelectedPlace} placesListRef={placesListRef} />}
        </div>

        {selectedPlace && <PlaceDetails place={selectedPlace} />}
      </section>
    </div>
  );
};

export default MapContainer;
