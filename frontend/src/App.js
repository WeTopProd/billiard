import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";

import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";
import TreidIn from "./components/TreidIn/TreidIn";
import Basket from "./components/Basket/Basket";
import KatalogsRound from "./components/KatalogsRound/KatalogsRound";
import { useDispatch, useSelector } from "react-redux";



function App() {


  const [arr, setArr] = useState([]);
  const [bascket, setBascket] = useState([])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cue/`)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cue/`)
      .then((res) => {
        localStorage.setItem("bascket", JSON.stringify(res.data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  function addBascketLocal(id) {
    setBascket(
      JSON.parse(localStorage.getItem("bascket")).map((item) =>
        item.is_in_shopping_cart == true || item.id == id
          ? { id: (item.is_in_shopping_cart = true), ...item }
          : { id: (item.is_in_shopping_cart = false), ...item }
      )
    );
    if (bascket.length !== 0) {
      localStorage.setItem("bascket", JSON.stringify(bascket))
    }
  }


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
            <Route path="/favorites" element={<Favorites addBascketLocal={addBascketLocal}  arr={arr} setArr={setArr} />} />
            <Route path="/basket" element={<Basket addBascketLocal={addBascketLocal} bascket={bascket} />} />
            <Route path="/redemtion" element={<TreidIn />} />
            <Route path="/round" element={<KatalogsRound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
