import React, {useState,useEffect,useContext} from 'react';
import MapContext from './utils/mapContext';
export default function LocationModal():JSX.Element {
	const [show,setShow]  = useState<boolean>(true);
	const locationStateContent = useContext(MapContext);
	if (locationStateContent != null) {
		useEffect(()=> {setShow(true);setTimeout(()=>{setShow(false)},5000);},[locationStateContent.locationState[0]]);
	}
	if (show && locationStateContent != null && locationStateContent.locationState[0] != null) {
		return(
			<div className='modal'>
				<h3>Changed Location to {locationStateContent.locationState[0]}</h3>
			</div>
		);
	} else {
		return (<></>)
	}
	
}