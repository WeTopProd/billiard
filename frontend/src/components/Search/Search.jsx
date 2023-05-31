import s from "./Search.module.css";
import logo from "../../image/logo.png";
import heart from "../../image/heart.svg";
import basket from "../../image/basket.svg";
import search from "../../image/search.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const { items} = useSelector(state => state.favoritedReducer)
  const { itemsBascket} = useSelector(state => state.bascketReducer)
  

  // const totalCount = items.reduce((sum, item) => sum + item.count, 0) - Надо взять на заметку, пригодится в корзине
  
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
            <span className={s.count}>{items.length}</span>
          </div>
          <div className={s.counters}>
            <NavLink to="/basket">
              <img className={s.basket} src={basket} alt="image" />
            </NavLink>
            <span className={s.count}>{itemsBascket.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
