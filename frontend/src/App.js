import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToBascket } from "./redux/slices/bascketSlice";
import { useDispatch } from "react-redux";
import axios from "axios";



import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";

import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";
import TreidIn from "./components/TreidIn/TreidIn";
import Basket from "./components/Basket/Basket";
import KatalogsRounds from "./components/KatalogsRound/KatalogsRounds";
import Making from './components/Making/Making';
import { addToFavorite } from "./redux/slices/favoritedSlice";
import KatalogsAccsessuars from "./components/KatalogsAccessuar/KatalogsAccsessuars";
import Services from "./components/Services/Services";
import { deleteCart } from "./redux/slices/bascketSlice";
import Modal from "./components/Modal/Modal";
import Recovery from "./components/Modal/Recovery";
import RecoveryOk from "./components/Modal/RecoveryOk";
import RegisterCode from "./components/Modal/RegisterCode";


function App() {

  const [arr, setArr] = useState([]);

  const [bascket, setBascket] = useState([])

  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/goods/basket/", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        dispatch(addToBascket(res.data));
      });
  }, [deleteCart]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/goods/?is_favorited=1", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      })
      .then((res) => {
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
            <Route path="/round" element={<KatalogsRounds />} />
            <Route path="/accessories" element={<KatalogsAccsessuars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/making" element={<Making />} />
            <Route path="/modal"  element={<Modal />}/>
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/recoveryOk" element={<RecoveryOk />} />
            <Route path="/registerCode" element={<RegisterCode />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
