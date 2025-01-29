import MapContainer from '@/components/tourpathPageComponents/map/MapContainer';
import { SampleTours } from '@/data/SampleTours';

export default function Home() {
  return <MapContainer tours={SampleTours} />;
}
