import { useDispatch } from "react-redux";
import s from "./Favorites_card.module.scss";
import { removeToFavorite } from "../../redux/slices/favoritedSlice";
import axios from 'axios';


const Favorites_card = ({ addBascketLocal, load, ...card }) => {

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'))

  
  async function addBascket(id) {
    await axios
      .post(`http://127.0.0.1:8000/api/goods
      /${id}/shopping_cart/`, null, {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      })
      .catch(err => console.error(err))

      // await axios.get('http://127.0.0.1:8000/api/cue/?is_in_shopping_cart=1', {
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Token ${token}`,
      //   }
      // })
  }


  const favoritesDelete = (id) => {
    dispatch(removeToFavorite(card))

    axios
    .delete(`http://127.0.0.1:8000/api/goods
    /${id}/favorite/`, {
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
          onClick={(event) => addBascket(event.currentTarget.id)}
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
