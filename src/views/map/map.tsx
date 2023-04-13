import React, {useState,createContext,useContext} from 'react';
import LeafletMap from "./components/leaflet-map";
import LocationModal from './components/locationModal';
import locationModalProps from './components/utils/locationModalProps';
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