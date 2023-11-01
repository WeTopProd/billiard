import s from "./Search.module.css";
import logo from "../../image/logo.png";
import heart from "../../image/heart.svg";
import basket from "../../image/basket.svg";
import search from "../../image/search.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { basketApi } from '../../api/basketApi/basket.js'
import favorite from "../../api/FavoriteApi/Favorite";
import { initfavoriteIn } from "../../redux/slices/favoritedSlice";
import { counter, initCart } from "../../redux/slices/bascketSlice";

const Search = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');
  const counterValue = useSelector(state => state.cartSlice.counter);
  var stopper = 0
  const favoriteItems = useSelector(state => state.favoritedSlice.items)
  const [counterFavorite, setCounterFavorite] = useState("")
  
  useEffect(() =>  {
    
    {}  
    basketApi.get(token)

    favorite.get(token) 

  }, [])
  
  useEffect(() =>  {
    favorite.get(token).then(
      setCounterFavorite(favoriteItems.count)
    )
    console.log(favoriteItems.count
, 'dsds')
  }, [favoriteItems])
  
  return (
    <div className="container">
      <div className={s.search}>
        <div className={s.search__item}>
          <NavLink to="/">
            <img className={s.logo} src={logo} alt="image" />
          </NavLink>
        </div>
        <div className={`${s.search__item} ${s.input_container}`}>
          <input className={s.input} type="text" placeholder="Поиск" />
          <img className={s.img_search} src={search} alt="image" />
        </div>
        <div className={s.search__item}>
          <div className={s.counters}>
            <NavLink to="/favorites">
              <img className={s.heart} src={heart} alt="image" />
            </NavLink>
            <span className={s.count}>{counterFavorite}</span>
          </div>
          <div className={s.counters}>
            <NavLink to="/basket">
              <img className={s.basket} src={basket} alt="image" />
            </NavLink>
            <span className={s.count}>{counterValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
