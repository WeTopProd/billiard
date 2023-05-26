import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "./KatalogsKiys.module.scss";
import Hr from "../HomePage/Hr/Hr";
import FilterKiy from "./FilterKiy";
import KatalogKiy from "./KatalogKiy";


const KatalogsKiys = ({arr, setArr}) => {
  const [cards, setCards] = useState([]);
  const [finall, setFinall] = useState(true);

  const [btn, setBtn] = useState(false);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cue/")
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
        `http://localhost:8000/api/cue/?${play}${structure}${workshop}${
          min ? `price_min=${min}` : ""
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
      <Hr title="Кии для бильярда" />

      <div className={s.katalogs}>
        <aside className={s.filter}>
          <FilterKiy
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
          <KatalogKiy arr={arr} setArr={setArr} finall={finall} cards={cards} setCards={setCards} />
        </main>
      </div>
    </div>
  );
};

export default KatalogsKiys;
