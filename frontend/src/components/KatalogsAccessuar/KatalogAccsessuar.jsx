import piramida from "../../image/filterImage/piramida.png";
import pul from "../../image/filterImage/pul.png";
import snuker from "../../image/filterImage/snuker.png";
import s from "./KatalogAccsessuar.module.scss";
import dataAccess from '../data/dataKatalogCard/dataAccessories'

import KatalogCard from "./KatalogAccsessuarCard";

import { Link } from "react-router-dom";
import axios from "axios";

const KatalogAccsessuar = ({ arr, setArr, cards, setCards, finall }) => {


  function filterMini(type) {
    axios
      .get("https://frantsuz-shop.ru/api/goods", {
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
          onClick={() => filterMini("Чехол")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={piramida} alt="image" />
          <p>Чехлы для киев</p>
        </Link>
        <Link
          onClick={() => filterMini("Наклейка")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={pul} alt="image" />
          <p>Наклейки</p>
        </Link>
        <Link
          onClick={() => filterMini("Перчатки")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={snuker} alt="image" />
          <p>Перчатки</p>
        </Link>

        <Link
          onClick={() => filterMini("Мел")}
          className={s.katalog_kiy_container_link}
          to="#">
          <img src={snuker} alt="image" />
          <p>Мел, пеналы для мела</p>
        </Link>
      </div>

      <div className={s.card_container}>
        {finall ? (
          <span className={s.loading}>...loading</span>
        ) : (
          cards.filter(item => item.goods_type == '3').map((item) => (
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

export default KatalogAccsessuar;
