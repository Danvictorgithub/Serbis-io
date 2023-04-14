import React, {useState,createContext,useContext, useEffect} from 'react';
import LeafletMap from "./components/leaflet-map";
import LocationModal from './components/locationModal';
import locationModalProps from './components/utils/locationModalProps';
import MapContext from "./components/utils/mapContext";
import { AppContext } from '../../App';
export default function Map() {
	const [currentLocation,setCurrentLocation] = useState<null|string>(null);
	  // const MapCenterStates = useContext(AppContext);
	  // const center = [MapCenterStates?.center.lat,MapCenterStates?.center.lng]; 
	  // useEffect(()=> {console.log(center)},[]);

	return (
		<div className='map container'>
			<MapContext.Provider value={{locationState:[currentLocation,setCurrentLocation]}}>
				<LocationModal/>
				<LeafletMap/>
			</MapContext.Provider>
		</div>
	)
}