import React from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}
export default function LeafletMap() {
	return (
		<MapContainer center={[8.9475377, 125.54062339999996]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
	)
}