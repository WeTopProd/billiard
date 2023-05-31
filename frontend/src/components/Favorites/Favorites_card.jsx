import { useDispatch, useSelector } from "react-redux";
import s from "./Favorites_card.module.scss";
import { addToBascket } from "../../redux/slices/bascketSlice";
import { removeToFavorite } from "../../redux/slices/favoritedSlice";
import axios from 'axios';
import { current } from '@reduxjs/toolkit';


const Favorites_card = ({ addBascketLocal, load, ...card }) => {

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'))

  function addBascket() {
    dispatch(addToBascket(card));
  }


  const favoritesDelete = (id) => {
    dispatch(removeToFavorite(card))

    axios
    .delete(`http://127.0.0.1:8000/api/cue/${id}/favorite/`, {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    })    
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
      <div className={s.card_button}>
        <button
          id={card.id}
          onClick={addBascket}
          className={s.card_button_bascket_add}>
          Добавить в корзину
        </button>
        <button
          id={card.id}
          onClick={(event => favoritesDelete(event.currentTarget.id))}
          className={s.card_button_fabvorited_remove}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Favorites_card;
