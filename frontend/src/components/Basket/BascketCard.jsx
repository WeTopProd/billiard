import React, { useState } from "react";
import s from "./BascketCard.module.scss";


const BascketCard = ({addBascketLocal, ...card }) => {
  const [number, setNumber] = useState(1);
 
  function increment(id) {
    if (id == card.id) {
      setNumber(number + 1);
    }
  }

  function dicrement(id) {
    if (id == card.id) {
      setNumber(number - 1);
    }
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
              disabled={number <= 1 ? true : false}
              onClick={(event) => dicrement(event.currentTarget.id)}
              className={s.card_counter_count_dicrement}>
              -
            </button>
            <span className={s.card_counter_count_number}>{number}</span>
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
            {card.price * number}РУБ
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
