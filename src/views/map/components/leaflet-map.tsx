import React, {useState, useContext} from 'react';
import "leaflet/dist/leaflet.css";
import {MapContainer,TileLayer,useMap ,useMapEvents,useMapEvent, Marker, Popup} from 'react-leaflet';
import redIcon from "../../../assets/icons/map-marker-icon.png";
import {Icon} from "leaflet";

import locationModalProps from './utils/locationModalProps';
import MapContext from './utils/mapContext';
interface LatLngLiteral {
    lat: number;
    lng: number;
}
function SetUserLocation():JSX.Element {
  const locationStateContent = useContext(MapContext);
  const [position, setPosition] = useState<null| LatLngLiteral>(null);
  const customIcon = new Icon({
    iconUrl:redIcon,
    iconSize: [40,40]
  });
  const map = useMapEvents({
      dblclick() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        Promise.resolve(fetch(`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${e.latlng.lat}&lon=${e.latlng.lng}`))
          .then((response)=> {
            return response.json()})
          .then(response => {
            const locationData = response.features['0'].properties.geocoding;
            const location = (typeof locationData.district != "undefined" ? `${locationData.city}, ${locationData.district}` : `${locationData.district}`);
            console.log(locationData.district);
            if (location !== "undefined" ) {
              if (locationStateContent !== null) {
                locationStateContent.locationState[1](location);
              }
            }
            
            return response;
          });
        map.flyTo(e.latlng,map.getZoom());
      }
    });
  return position === null ? <></> : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
function WatchCenter():JSX.Element {
  const locationStateContent = useContext(MapContext);
  const map = useMapEvent('moveend',()=> {
    const latlng = map.getCenter();
    Promise.resolve(fetch(`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${latlng.lat}&lon=${latlng.lng}`))
          .then((response)=> {
            return response.json()})
          .then(response => {
            const locationData = response.features['0'].properties.geocoding;
            const location = (typeof locationData.district != "undefined" ? `${locationData.city}, ${locationData.district}` : `${locationData.city}`);
            console.log(locationData.district);
            if (location !== "undefined" ) {
              if (locationStateContent !== null) {
                locationStateContent.locationState[1](location);
              }
            }
            return response;
          });
  });
  return (<></>);
}
export default function LeafletMap() {

	return (
		<MapContainer center={[8.9475377, 125.54062339999996]} zoom={13} scrollWheelZoom={true} doubleClickZoom={false}>
		  <TileLayer
		    attribution='&copy; <a href="https://	www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  <SetUserLocation/>
      <WatchCenter/>
		</MapContainer>
	)
}