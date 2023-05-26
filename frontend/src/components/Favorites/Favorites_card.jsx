import { useDispatch, useSelector } from "react-redux";
import s from "./Favorites_card.module.scss";
import { addToBascket } from "../../redux/slices/bascketSlice";
import { removeToFavorite } from "../../redux/slices/favoritedSlice";

const Favorites_card = ({ addBascketLocal, load, ...card }) => {
  const { itemsBascket } = useSelector((state) => state.bascketReducer);

  const dispatch = useDispatch();

  function addBascket() {
    dispatch(addToBascket(card));
  }

  function removeToFavorites() {
    dispatch(removeToFavorite(card));
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
          onClick={removeToFavorites}
          className={s.card_button_fabvorited_remove}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Favorites_card;
