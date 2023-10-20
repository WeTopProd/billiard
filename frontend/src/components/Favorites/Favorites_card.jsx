import { useDispatch, useSelector } from "react-redux";
import s from "./Favorites_card.module.scss";
import { initfavorite, initfavoriteIn, removeToFavorite } from "../../redux/slices/favoritedSlice";
import {
  addToCart, increment, initCart,
} from "../../redux/slices/bascketSlice";

import { useEffect } from "react";
import basketApi from "../../api/basketApi/basket";
import favorite from "../../api/FavoriteApi/Favorite";


const Favorites_card = ({ addBascketLocal, load, id, ...card }) => {

  const dispatch = useDispatch();
  const basketItemsX = useSelector(state => state.cartSlice.items)
  const token = localStorage.getItem('token')
  const allItemsCount = localStorage.getItem('allItemsCount');
  const favoriteItems = useSelector(state => state.favoritedSlice.items)
  const addToBasket = () => {
    basketApi.post(token, id).then(data => {
      dispatch(addToCart({ ...data }))
      dispatch(increment());

      allItemsCount
        ?
        localStorage.setItem('allItemsCount', JSON.stringify([...JSON.parse(allItemsCount), { ...data, itemCount: 1 }]))
        :
        localStorage.setItem('allItemsCount', JSON.stringify([{ ...data, itemCount: 1 }]))

      console.log(JSON.parse(localStorage.getItem('allItemsCount')));
    })
  }

  const favoritesDelete = () => {
    favorite.delete(token, id).then(data => {
      dispatch(removeToFavorite({data}))
      
    });
    favorite.get(token, id).then(data => dispatch(initfavoriteIn(data)))
   
  }
  
  useEffect(() => {
    {

      favoriteItems.length == 0 && favorite.get(token).then((data) => {
        dispatch(initfavoriteIn(data))

      });
      favorite.get(token).then(data => dispatch(initfavoriteIn(data)))

    }

  }, [])

  return (
    <div className={s.card}>
      <div className={s.card_info}>
        <img
          className={s.card_info_image}
          src={card.images && card.images.length > 0 ? card.images[0].images : null}
          alt="image"
    
        />
        <p className={s.card_info_description}>{card.description}</p>
      </div>
      <div className={s.card_button}>
        <button
          id={card.id}
          onClick={addToBasket}
          className={s.card_button_bascket_add}>
          Добавить в корзину
        </button>
        <button
          id={card.id}
          onClick={favoritesDelete}
          className={s.card_button_fabvorited_remove}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Favorites_card;
