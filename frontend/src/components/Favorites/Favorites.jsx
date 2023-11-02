import Hr from "../HomePage/Hr/Hr";
import s from "./Favorites.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Favorites_card from "./Favorites_card";
import { useDispatch, useSelector } from "react-redux";
import favorite from "../../api/FavoriteApi/Favorite";
import { addToFavorite, initfavorite, initfavoriteIn } from "../../redux/slices/favoritedSlice";
const Favorites = () => {

  const [res, setRes] = useState(localStorage.getItem("user"));

  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  const [total, setTotal] = useState(null);

  var stopper = 0

  function load(num) {
    setTotal(res && res.map((f) => f.price).reduce((a, b) => a + b));
  }

  const favoriteItems = useSelector(state => state.favoritedSlice.items);
  var stopper = 0
  const allFavor = favoriteItems.results;

  const [_allFavor, setAllFavor] = useState([]);
  useEffect(() => {
    setAllFavor(allFavor);

  }, [allFavor])
  
  useEffect(() => {
    favorite.get(token).then(data => {
      dispatch(initfavoriteIn({...data}))
    });
    favorite.get(token).then(data => dispatch(initfavoriteIn({...data})))

  }, [stopper])

  return (
    <div className="container">
      <Hr title="Избранное" />
      <div className={s.section}>
        {
          _allFavor && _allFavor.length > 0 ?
            _allFavor.map((card) => (
              <Favorites_card key={card.id} {...card} load={load} card={card}/>
            )
            ) :
            <></>
        }
      </div>
      <div className={s.total_container}>
        <p className={s.total}>
          Итоговая цена: <span className={s.total_final}></span>
        </p>
      </div>
    </div>
  );
};

export default Favorites;
