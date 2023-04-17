import React, {useState} from 'react';
import LeafletMap from "./components/leaflet-map";
import LocationModal from './components/locationModal';
import MapContext from "./components/utils/mapContext";
export default function Map() {
	const [currentLocation,setCurrentLocation] = useState<null|string>(null);
	return (
		<div className='map container'>
			<MapContext.Provider value={{locationState:[currentLocation,setCurrentLocation]}}>
				<LocationModal/>
				<LeafletMap/>
			</MapContext.Provider>
		</div>
	)
}