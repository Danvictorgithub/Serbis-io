import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./views/header/header";
import Footer from "./views/footer/footer";
import Home from "./views/home/home";
import Mail from "./views/mail/mail";
import Profile from "./views/profile/profile";
import './App.css';
import Map from './views/map/map';
interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}
const App = () => {
  // const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/inbox" element={<Mail />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
