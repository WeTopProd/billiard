import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "./KatalogsKiys.module.scss";
import Hr from "../HomePage/Hr/Hr";
import FilterKiy from "./FilterKiy";
import KatalogKiy from "./KatalogKiy";

import { dataKiyFilter } from "../data/dataKatalogCard/dataKiyKatalog";

const KatalogsKiys = () => {
  const [cards, setCards] = useState([]);
  const [finall, setFinall] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cue/")
      .then((res) => {
        setCards(res.data.results);
      })
      .catch((err) => console.error(err))
      .finally(() => setFinall(false))
  }, []);

  // console.log(cards);

  const [btn, setBtn] = useState(false);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const [array, setArraye] = useState([]);

  const priceFilter = () => {
    setBtn(false);
    let newArray = [];

    if (min === "" && max === "") {
      setCards(dataKiyFilter);
    } else if (
      (min > 0 && max > 0) ||
      (min == "" && max > 0) ||
      (min > 0 && max == "")
    ) {
      newArray = [...dataKiyFilter].filter(
        (item) =>
          (item.price >= min && item.price <= max) ||
          item.play === array[0] ||
          item.play === array[1] ||
          item.play === array[2] ||
          item.play === array[3] ||
          item.play === array[4] ||
          item.play === array[5] ||
          item.play === array[6] ||
          item.play === array[7] ||
          item.play === array[8] ||
          item.play === array[9] ||
          item.play === array[10] ||
          item.play === array[11] ||
          item.composition === array[0] ||
          item.composition === array[1] ||
          item.composition === array[2] ||
          item.composition === array[3] ||
          item.composition === array[4] ||
          item.composition === array[5] ||
          item.composition === array[6] ||
          item.composition === array[7] ||
          item.composition === array[8] ||
          item.composition === array[9] ||
          item.composition === array[10] ||
          item.composition === array[11] ||
          item.workshop === array[0] ||
          item.workshop === array[1] ||
          item.workshop === array[2] ||
          item.workshop === array[3] ||
          item.workshop === array[4] ||
          item.workshop === array[5] ||
          item.workshop === array[6] ||
          item.workshop === array[7] ||
          item.workshop === array[8] ||
          item.workshop === array[9] ||
          item.workshop === array[10] ||
          item.workshop === array[11]
      );
      setCards(
        newArray.filter((item) => item.price >= min && item.price <= max)
      );
    }
    if (min === "" && max === "" && array.length !== 0) {
      newArray = [...dataKiyFilter].filter(
        (item) =>
          item.play === array[0] ||
          item.play === array[1] ||
          item.play === array[2] ||
          item.play === array[3] ||
          item.play === array[4] ||
          item.play === array[5] ||
          item.play === array[6] ||
          item.play === array[7] ||
          item.play === array[8] ||
          item.play === array[9] ||
          item.play === array[10] ||
          item.play === array[11] ||
          item.composition === array[0] ||
          item.composition === array[1] ||
          item.composition === array[2] ||
          item.composition === array[3] ||
          item.composition === array[4] ||
          item.composition === array[5] ||
          item.composition === array[6] ||
          item.composition === array[7] ||
          item.composition === array[8] ||
          item.composition === array[9] ||
          item.composition === array[10] ||
          item.composition === array[11] ||
          item.workshop === array[0] ||
          item.workshop === array[1] ||
          item.workshop === array[2] ||
          item.workshop === array[3] ||
          item.workshop === array[4] ||
          item.workshop === array[5] ||
          item.workshop === array[6] ||
          item.workshop === array[7] ||
          item.workshop === array[8] ||
          item.workshop === array[9] ||
          item.workshop === array[10] ||
          item.workshop === array[11]
      );
      setCards(newArray);
    }
  };

  return (
    <div className="container">
      <Hr title="Кии для бильярда" />

      <div className={s.katalogs}>
        <aside className={s.filter}>
          <FilterKiy
            array={array}
            setArraye={setArraye}
            priceFilter={priceFilter}
            min={min}
            setMin={setMin}
            max={max}
            setMax={setMax}
            btn={btn}
            setBtn={setBtn}
          />
        </aside>
        <main className={s.kiys}>
          <KatalogKiy  />
        </main>
      </div>
    </div>
  );
};

export default KatalogsKiys;
