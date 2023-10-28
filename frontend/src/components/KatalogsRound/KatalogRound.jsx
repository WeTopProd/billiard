import piramida from "../../image/filterImage/piramida.png";
import pul from "../../image/filterImage/pul.png";
import snuker from "../../image/filterImage/snuker.png";
import s from "./KatalogRound.module.scss";

import KatalogCard from "./KatalogRoundCard";

import { Link } from "react-router-dom";
import axios from "axios";

const KatalogRound = ({ arr, setArr, cards, setCards, finall }) => {


  function filterMini(type) {
    axios
      .get("http://127.0.0.1:8000/api/goods", {
        params: {
          play: type,
        },
      })
      .then((res) => setCards(res.data.results))
      .catch((err) => console.error(err));
  }

  return (
    <div className={s.katalogKiy}>
      <div className={s.katalog_kiy_container}>
        <Link
          onClick={() => filterMini("Пирамида")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={piramida} alt="image" />
          <p>Пирамида</p>
        </Link>
        <Link
          onClick={() => filterMini("Пул")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={pul} alt="image" />
          <p>Пул</p>
        </Link>
        <Link
          onClick={() => filterMini("Снукер")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={snuker} alt="image" />
          <p>Снукер</p>
        </Link>
      </div>

      <div className={s.card_container}>
        {finall ? (
          <span className={s.loading}>...loading</span>
        ) : (
          cards.filter(item => item.goods_type == '2').map((item) => (
            <KatalogCard
              arr={arr}
              setArr={setArr}
              key={item.id}
              {...item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default KatalogRound;
