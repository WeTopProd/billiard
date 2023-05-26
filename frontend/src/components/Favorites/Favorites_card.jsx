import { useDispatch } from "react-redux";
import s from "./Favorites_card.module.scss";
import {  useState } from "react";
import { addToFavorite, removeToFavorite } from "../../redux/slices/favoritedSlice";

const Favorites_card = ({addBascketLocal, load, ...card }) => {

    const dispatch = useDispatch()
    

    function increment(id) {
      dispatch(addToFavorite({id}))
    }

    function dicrement() {
      dispatch(removeToFavorite(card))
    }

     
  return (
    <div className={s.card}>
      <div className={s.card_info}>
        <img
          className={s.card_info_image}
          src={card.images[0].images}
          alt="image"
        />
        <p className={s.card_info_description}>{card.description}</p>
      </div>
      <div className={s.card_counter}>

        <div className={s.card_counter_count}>
          <button
            id={card.id}
            onClick={dicrement}
            className={s.card_counter_count_dicrement}>
            -
          </button>
          <span className={s.card_counter_count_number}>{card.count}</span>
          <button
            id={card.id}
            onClick={(event) => increment(event.currentTarget.id)}
            className={s.card_counter_count_increment}>
            +
          </button>
        </div>
        <div className={s.card_counter_price}>
          <span className={s.card_counter_price_title}>Цена:</span>
          {card.price * card.count}РУБ
        </div>
      </div>
      <button id={card.id} onClick={(event) => addBascketLocal(event.currentTarget.id)} className={s.card_bascket_button}>Добавить в корзину</button>
    </div>
  );
};

export default Favorites_card;
