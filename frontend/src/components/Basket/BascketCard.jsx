import React, { useEffect, useState } from "react";
import s from "./BascketCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToBascket, removeToBascket, deleteCart } from "../../redux/slices/bascketSlice";
import axios from "axios";

const BascketCard = ({ ...card }) => {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token"));

  function increment(id) {
    if (id == card.id) {
      dispatch(addToBascket(card));
      axios.patch(`http://127.0.0.1:8000/api/cue/${id}/shopping_cart/`,
      {
        count: card.count + 1
      },{
      
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    }
      )
    }
  }

 

  const cartDelete = (id) => {
    dispatch(deleteCart(card))

    axios
    .delete(`http://127.0.0.1:8000/api/cue/${id}/shopping_cart/`, {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    })    
  }

  function dicrement(id) {
    dispatch(removeToBascket(card));
    
    if (card.count == 1) {
      axios
        .delete(`http://127.0.0.1:8000/api/cue/${id}/shopping_cart/`, {
          headers: {
            "content-type": "application/json",
            authorization: `Token ${token}`,
          },
        })      
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
              onClick={(event) => dicrement(event.currentTarget.id)}
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
        <button id={card.id} className={s.card_bascket_button}>
          Оформить заказ
        </button>
        <button onClick={(event) => cartDelete(event.currentTarget.id)} id={card.id} className={s.card_bascket_button_delete}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default BascketCard;
