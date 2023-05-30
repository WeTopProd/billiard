import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";

import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";
import TreidIn from "./components/TreidIn/TreidIn";
import Basket from "./components/Basket/Basket";
import KatalogsRound from "./components/KatalogsRound/KatalogsRound";


function App() {


  const [arr, setArr] = useState([]);
  const [bascket, setBascket] = useState([])



  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/katalogsKiys"
              element={<KatalogsKiys arr={arr} setArr={setArr} />}
            />
            <Route path="/favorites" element={<Favorites 
            arr={arr} setArr={setArr} />} />
            <Route path="/basket" element={<Basket 
            bascket={bascket}
             />} />
            <Route path="/redemtion" element={<TreidIn />} />
            <Route path="/round" element={<KatalogsRound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
