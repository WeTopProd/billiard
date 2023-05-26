import React, { useState } from "react";
import s from "./BascketCard.module.scss";
import { useDispatch } from "react-redux";
import { addToBascket, removeToBascket } from "../../redux/slices/bascketSlice";

const BascketCard = ({ addBascketLocal, ...card }) => {
  const [number, setNumber] = useState(1);
  console.log(card);
  const dispatch = useDispatch();

  function increment(id) {
    dispatch(addToBascket({id}));
  }

  function dicrement() {
    dispatch(removeToBascket(card));
  }

  return (
    <div>
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
              onClick={(event) => {
                increment(event.currentTarget.id);
              }}
              className={s.card_counter_count_increment}>
              +
            </button>
          </div>
          <div className={s.card_counter_price}>
            <span className={s.card_counter_price_title}>Цена:</span>
            {card.price * card.count}РУБ
          </div>
        </div>
        <button
          id={card.id}
          onClick={(event) => addBascketLocal(event.currentTarget.id)}
          className={s.card_bascket_button}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default BascketCard;
