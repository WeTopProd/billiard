import Hr from "../HomePage/Hr/Hr";
import s from "./Favorites.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Favorites_card from "./Favorites_card";

const Favorites = ({addBascketLocal}) => {

  const [total, setTotal] = useState(null);
  const [res, setRes] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setRes(res.filter((item) => item.is_favorited == true));
  }, []);


  function load(num) {
    setTotal(res && res.map((f) => f.price).reduce((a, b) => a + b));
  }

  return (
    <div className="container">
      <Hr title="Избранное" />
      <div className={s.section}>
        {res.map((card) => (
          <>
            <Favorites_card addBascketLocal={addBascketLocal} key={card.id} {...card} load={load} />
          </>
        ))}
      </div>
      <div className={s.total_container}>
        <p className={s.total}>
          Итоговая цена: <span className={s.total_final}>{total}</span>
        </p>
      </div>
    </div>
  );
};

export default Favorites;
