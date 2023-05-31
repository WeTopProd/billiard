import Hr from "../HomePage/Hr/Hr";
import s from "./Favorites.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Favorites_card from "./Favorites_card";
import { useSelector } from "react-redux";


const Favorites = () => {
  const [res, setRes] = useState(JSON.parse(localStorage.getItem("user")));
  

  const {totalPrice, items} = useSelector((state) => state.favoritedReducer);
  // const {count} = useSelector(state => state.favoritedReducer.items.find(obj => obj.id === res.id))

  

  const [total, setTotal] = useState(null);
  

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
        {items.map((card) => (
          <>
            <Favorites_card  key={card.id} {...card} load={load} />
          </>
        ))}
      </div>
      <div className={s.total_container}>
        <p className={s.total}>
          Итоговая цена: <span className={s.total_final}>{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Favorites;
