import s from "./Search.module.css";
import logo from "../../image/logo.png";
import heart from "../../image/heart.svg";
import basket from "../../image/basket.svg";
import search from '../../image/search.svg'
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div className="container">
      <div className={s.search}>
        <div className={s.search__item}>
          <NavLink to="/"><img className={s.logo} src={logo} alt="image" /></NavLink>
          
        </div>
        <div className={`${s.search__item} ${s.input_container}`}>
          <input className={s.input} type="text" placeholder="Поиск" />
          <img className={s.img_search} src={search} alt="image" />
        </div>
        <div className={s.search__item}>
          <div className={s.counters}>
            <img className={s.heart} src={heart} alt="image" />
            <span className={s.count}>0</span>
          </div>
          <div className={s.counters}>
            <img className={s.basket} src={basket} alt="image" />
            <span className={s.count}>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
