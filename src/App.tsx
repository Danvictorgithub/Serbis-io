import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHomeRoof } from '@mdi/js';
import Header from "./views/header/header";
import Footer from "./views/footer/footer";
import Home from "./views/home/home";
import './App.css';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
