import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { addToCart, initCart, counter } from "./redux/slices/bascketSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginState, tokenState } from "./redux/slices/autorisation";



import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";
import { Konfid } from "./components/Footer/Konfid";
import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";
import TreidIn from "./components/TreidIn/TreidIn";
import Basket from "./components/Basket/Basket";
import KatalogsRounds from "./components/KatalogsRound/KatalogsRounds";
import Making from './components/Making/Making';
import { addToFavorite, initfavorite, initfavoriteIn } from "./redux/slices/favoritedSlice";
import KatalogsAccsessuars from "./components/KatalogsAccessuar/KatalogsAccsessuars";
import Services from "./components/Services/Services";

import Modal from "./components/Modal/Modal";
import Recovery from "./components/Modal/Recovery";
import RecoveryOk from "./components/Modal/RecoveryOk";
import RegisterCode from "./components/Modal/RegisterCode";
import basketApi from "./api/basketApi/basket";
import favorite from "./api/FavoriteApi/Favorite"
import ScrollToTop from "./components/ScrollToTop";



function App() {

  const [arr, setArr] = useState([]);

  const [bascket, setBascket] = useState([])

  const [count, setCount] = useState('')

  const token = localStorage.getItem('token');

  const dispatch = useDispatch();


  var stopper = 0

  const basketItemsX = useSelector(state => state.cartSlice.items)


  const favoriteItems = useSelector(state => state.favoritedSlice.items)

  useEffect(() => {
    {

      basketItemsX.length == 0 && basketApi.get(token).then((data) => {
        dispatch(initCart(data))

      }).then(() => stopper = 1).catch((err) => console.log(err))

      favoriteItems.length == 0 && favorite.get(token).then((data) => {
        dispatch(initfavoriteIn(data))
      }).then(() => stopper = 1).catch((err) => console.log(err))

    }

  }, [])

  useEffect(() => {
    {
      favoriteItems.length == 0 && favorite.get(token).then((data) => {
        dispatch(initfavoriteIn(data))
      }).then(() => stopper = 1).catch((err) => console.log(err))

    }

    if (localStorage.getItem("token")) {
      dispatch(loginState(true));
      dispatch(tokenState(localStorage.getItem("token")));
    }

  }, [])
 

  const counterValue = useSelector(state => state.cartSlice.counter);

  useEffect(() => {
    dispatch(counter)
  }, [basketItemsX])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Search />
        <ScrollToTop/>
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
          <Route path="/modal" element={<Modal />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/recoveryOk" element={<RecoveryOk />} />
          <Route path='/policy' element={<Konfid />} />
          <Route path="/registerCode" element={<RegisterCode />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
