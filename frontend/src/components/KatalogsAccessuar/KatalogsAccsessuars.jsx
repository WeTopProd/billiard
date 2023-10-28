import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "./KatalogsAccsessuars.module.scss";
import Hr from "../HomePage/Hr/Hr";
import KatalogAccsessuar from "./KatalogAccsessuar";
import FilterAccsessuar from "./FilterAccsessuar";


const KatalogsAccsessuars = ({ arr, setArr }) => {
  const [cards, setCards] = useState([]);
  const [finall, setFinall] = useState(true);

  const [btn, setBtn] = useState(false);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("http://127.0.0.1:8000/api/goods/")
=======
      .get("https://frantsuz-shop.ru/api/goods/")
>>>>>>> c9818edb5c2cd749dffbc75392a37dbc54bf6f04
      .then((res) => {
        setCards(res.data.results);
      })
      .catch((err) => console.error(err))
      .finally(() => setFinall(false));
  }, [setCards]);

  const [arrayPlay, setArrayePlay] = useState([]);
  const [arrayStructure, setArrayeStructure] = useState([]);
  const [arrayWorkshop, setArrayeWorkshop] = useState([]);

  function Filter(play, structure, workshop, min, max) {
    play = arrayPlay ? arrayPlay.map((item) => `&play=${item}`).join("") : "";
    structure = arrayStructure
      ? arrayStructure.map((item) => `&composition=${item}`).join("")
      : "";
    workshop = arrayWorkshop
      ? arrayWorkshop.map((item) => `&workshop=${item}`).join("")
      : "";

    axios
      .get(
<<<<<<< HEAD
        `http://127.0.0.1:8000/api/goods/?${play}${structure}${workshop}${min ? `price_min=${min}` : ""
=======
        `https://frantsuz-shop.ru/api/goods/?${play}${structure}${workshop}${
          min ? `price_min=${min}` : ""
>>>>>>> c9818edb5c2cd749dffbc75392a37dbc54bf6f04
        }${max ? `&price_max=${max}` : ""}`
      )
      .then((res) => {
        setCards(res.data.results);
      })
      .catch((err) => console.error(err));

    setCards(cards.filter((item) => item.price <= max && item.price >= min));
  }


  return (
    <div className="container">
      <Hr title="Аксессуары для бильярда" />

      <div className={s.katalogs}>
        <aside className={s.filter}>
          <FilterAccsessuar
            setArrayePlay={setArrayePlay}
            setArrayeStructure={setArrayeStructure}
            setArrayeWorkshop={setArrayeWorkshop}
            min={min}
            setMin={setMin}
            max={max}
            setMax={setMax}
            btn={btn}
            setBtn={setBtn}
            Filter={Filter}
          />
        </aside>
        <main className={s.kiys}>
          <KatalogAccsessuar arr={arr} setArr={setArr} finall={finall} cards={cards} setCards={setCards} />
        </main>
      </div>
    </div>
  );
};

export default KatalogsAccsessuars;
