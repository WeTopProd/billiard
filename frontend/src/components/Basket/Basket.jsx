import Hr from "../HomePage/Hr/Hr";
import s from "./Basket.module.scss";

import basket from "../../image/basket/basket.svg";
import { NavLink } from "react-router-dom";
import BascketCard from "./BascketCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const Basket = () => {

  // const [bascket, setBascket] = useState(JSON.parse(localStorage.getItem('bascket')))
  
  const {itemsBascket, totalPriceBascket} = useSelector(state => state.bascketReducer)


  return (
    <div className="container">
      <Hr title="Корзина" />
      {itemsBascket.length == 0 ? (
        <main className={s.basket_empty}>
          <img src={basket} alt="image" />
          <p className={s.basket_empty_title}>Ваша корзина пуста</p>
          <NavLink to="/katalogsKiys" className={s.basket_empty_link}>
            Каталог
          </NavLink>
        </main>
      ) : (
        itemsBascket.map((card) => (
            <div className={s.card}>
              <BascketCard  {...card} />
            </div>
          ))
      )}
      <div className={s.total_container}>
        <p className={s.total}>
          Итоговая цена: <span className={s.total_final}>{totalPriceBascket}</span>
        </p>
      </div>
    </div>
  );
};

export default Basket;
