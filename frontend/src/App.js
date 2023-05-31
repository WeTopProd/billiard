import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToBascket } from "./redux/slices/bascketSlice";
import { useSelector, useDispatch } from "react-redux";
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
import Making from './components/Making/Making';
import { addToFavorite } from "./redux/slices/favoritedSlice";


function App() {


  const [arr, setArr] = useState([]);
  const [bascket, setBascket] = useState([])

  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();



  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cue/?is_in_shopping_cart=1", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('res', res.data.results)
        dispatch(addToBascket(res.data.results));
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cue/?is_favorited=1", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log('res', res.data.results)
        dispatch(addToFavorite(res.data.results));
      });
  }, []);

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
            <Route path="/making" element={<Making />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
