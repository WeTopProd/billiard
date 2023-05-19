import Hr from "../HomePage/Hr/Hr";
import s from "./Favorites.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Favorites_card from "./Favorites_card";

const Favorites = () => {
  const [favorites, setFavorites] = useState("");
  const [finall, setFinally] = useState(true);

  const [total, setTotal] = useState("");

  const [number, setNumber] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cue/?is_favorited=false")
      .then((res) => {
        console.log(res.data)
        setFavorites(res.data.results);
      })
      .catch((err) => console.error(err))
      .finally(() => setFinally(false));
  }, []);

  console.log(favorites);

  

  return (
    <div className="container">
      <Hr title="Избранное" />
      <div className={s.section}>
        {finall ? (
          <span className={s.loading}>...loading</span>
        ) : (
          favorites.map((card) => (
            <Favorites_card
              setNumber={setNumber}
              number={number}
              key={card.id}
              {...card}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
