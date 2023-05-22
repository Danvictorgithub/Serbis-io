import React, {useState, useRef,useContext,useEffect} from 'react';
import "leaflet/dist/leaflet.css";
import {MapContainer,TileLayer,useMap,useMapEvents,useMapEvent, Marker, Popup} from 'react-leaflet';
import redIcon from "../../../assets/icons/map-marker-icon.png";
import {Icon,LatLng} from "leaflet";
import MapContext from './utils/mapContext';
import { AppContext } from '../../../App';
interface LatLngLiteral {
    lat: number;
    lng: number;
}
function SearchMap():JSX.Element {
  const [query,setQuery] = useState<string>("");
  const map = useMap();
  const MapCenterStates = useContext(AppContext);
  function updateInput(e:React.FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
    console.log(query);
  }
  function inputSubmitHandler(e:React.KeyboardEvent):void {
    // console.log("Hey")
    if (e.key === "Enter") {
      // console.log("This is called");
      getLocation();
      return;
    }
    return;
  }
  function getLocation():void {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=1&q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0].address);
        const coordinates = {lat:response[0].lat,lng:response[0].lon};
        const location = `${response[0].address.city || response[0].address.village || response[0].address.town}${(typeof response[0].address.village !== "undefined") ? `, ${response[0].address.village}` : ""}`;
        MapCenterStates?.setMapLocation(location);
        MapCenterStates?.setCenter(coordinates);
        const l = new LatLng(coordinates.lat,coordinates.lng);
        map.flyTo(l);
        setQuery("");
      })
      .catch(()=> {return;});
  }
  return (
    <div className="searchMap">
      <input type="text" onKeyPress={inputSubmitHandler} onChange={updateInput} value={query} placeholder='Enter Location'></input>
      {/*<img className="searchIcon" src={searchIcon}/>*/}
    </div>
  )
}
// function UpdateMap():JSX.Element {
//   const map = useMap();
//   const MapCenterStates = useContext(AppContext);
//   let latitude = (MapCenterStates != undefined ? MapCenterStates.center.lat : 0);
//   let longitude = (MapCenterStates != undefined ? MapCenterStates.center.lng : 0);
//   let l = new LatLng(latitude,longitude);
//   useEffect(()=>{
//     let latitude = (MapCenterStates != undefined ? MapCenterStates.center.lat : 0);
//     let longitude = (MapCenterStates != undefined ? MapCenterStates.center.lng : 0);
//     let l = new LatLng(latitude,longitude);
//     map.flyTo(l,map.getZoom());
//   },[MapCenterStates?.center]);
//   return (<></>);
// }
function SetUserLocation():JSX.Element {
//This function allows user to double click and fly to the their current location with marker
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
// This functions watch the center of the map, every time the user stops swiping
// --To-do-list: Find a way to reduce the unnecessary fetching every time the user swipes
  
  const locationStateContent = useContext(MapContext);
  const MapCenterStates = useContext(AppContext);
  const map = useMapEvent('moveend',()=> {
    const latlng = map.getCenter();
    Promise.resolve(fetch(`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${latlng.lat}&lon=${latlng.lng}`))
          .then((response)=> {
            return response.json()})
          .then(response => {map
            const locationData = response.features['0'].properties.geocoding;
            const location = (typeof locationData.district != "undefined" ? (`${locationData.city}, ${locationData.district}`) : `${locationData.city}`);
            // console.log(locationData);
            if (location !== "undefined" ) {
              if (locationStateContent !== null) {
                locationStateContent.locationState[1](location);
                MapCenterStates?.setMapLocation(location);
                MapCenterStates?.setCenter({lat:latlng.lat,lng:latlng.lng});
              }
            }
            return response;
          }).catch(()=> {
            return;
          });
  });
  return (<></>);
}
export default function LeafletMap() {
  const MapCenterStates = useContext(AppContext);
  let latitude = (MapCenterStates != undefined ? MapCenterStates.center.lat : 0);
  let longitude= (MapCenterStates != undefined ? MapCenterStates.center.lng : 0);
  let l = new LatLng(latitude,longitude);
	return (
		<MapContainer center={l} zoom={13} scrollWheelZoom={true} doubleClickZoom={false}>
		  <TileLayer
		    attribution='&copy; <a href="https://	www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  <SetUserLocation/>
      <WatchCenter/>
      {/*<UpdateMap/>*/}
      <SearchMap/>
		</MapContainer>
	)
}