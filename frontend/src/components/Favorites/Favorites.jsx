import Hr from "../HomePage/Hr/Hr";
import s from "./Favorites.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Favorites_card from "./Favorites_card";

const Favorites = () => {
  const [favorites, setFavorites] = useState("");
  const [finall, setFinally] = useState(true);

  const [total, setTotal] = useState(null);
  const [res, setRes] = useState(total);


    

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cue/?is_favorited=true")
      .then((res) => {
        setFavorites(res.data.results);
      })
      .catch((err) => console.error(err))
      .finally(() => setFinally(false));
  }, []);

  useEffect(() => load(), [favorites]);

  function load() {
    setTotal(
      favorites && favorites.map((f) => f.price).reduce((a, b) => a + b)
    );
  }
  

  return (
    <div className="container">
      <Hr title="Избранное" />
      <div className={s.section}>
        {finall ? (
          <span className={s.loading}>...loading</span>
        ) : (
          favorites.map((card) => (
            <>
             
              <Favorites_card
                key={card.id}
                {...card}
                load={load}
              />
            </>
          ))
        )}
      </div>
      <div className={s.total_container}>
        <p className={s.total}>
          Итоговая цена: <span className={s.total_final}>{total}</span>
        </p>
      </div>
      <div className={s.button_container}>
        <button className={s.button_container_order}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Favorites;
