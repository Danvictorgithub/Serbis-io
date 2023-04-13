import React, {useState} from 'react';
import "leaflet/dist/leaflet.css";
import {MapContainer,TileLayer,useMap ,useMapEvents,useMapEvent, Marker, Popup} from 'react-leaflet';
interface LatLngLiteral {
    lat: number;
    lng: number;
}
function SetUserLocation():JSX.Element {
  const [position, setPosition] = useState<null| LatLngLiteral>(null)
  const map = useMapEvents({
      dblclick() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng,map.getZoom());
      }
    });
  return position === null ? <></> : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
function WatchCenter():JSX.Element {
  const map = useMapEvent('moveend',()=> {
    console.log(map.getCenter());
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