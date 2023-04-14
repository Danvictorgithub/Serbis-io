import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./views/header/header";
import Footer from "./views/footer/footer";
import Home from "./views/home/home";
import Mail from "./views/mail/mail";
import Profile from "./views/profile/profile";
import './App.css';
import Map from './views/map/map';
// interface RoutesProps {
//   children?: React.ReactNode;
//   location?: Partial<Location> | string;
// }
interface MapCoordinates {
  lat:number,
  lng:number
}
interface MapCenterStates {
  center:MapCoordinates,
  setCenter:React.Dispatch<React.SetStateAction<MapCoordinates>>,
  mapLocation:string,
  setMapLocation:React.Dispatch<React.SetStateAction<string>>
}
export const AppContext = createContext<MapCenterStates|null>(null);
const App = () => {
  const [mapLocation,setMapLocation] = useState<string>("");
  const [center,setCenter] = useState<MapCoordinates>({lat:0,lng:0});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(async (position)=> {
      // console.log(position.coords.latitude);
      const locationDataPromise = await fetch(`https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      const locationDataObj = await locationDataPromise.json();
      // console.log(locationDataObj);
      const locationData = locationDataObj.features['0'].properties.geocoding;
      // console.log(locationData);
      const location = (typeof locationData.district != "undefined" ? `${locationData.city}, ${locationData.district}` : `${locationData.district}`);
      if (typeof location !== 'undefined') {
        setMapLocation(location);
        setCenter({lat:position.coords.latitude,lng:position.coords.longitude});
      }
    });
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home mapLocation={mapLocation}/>}></Route>
          <Route path="/map" element={<AppContext.Provider value={{center:center,setCenter:setCenter,mapLocation:mapLocation,setMapLocation:setMapLocation}} ><Map /></AppContext.Provider>}></Route>
          <Route path="/inbox" element={<Mail />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
