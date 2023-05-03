import React from "react";
import { useState } from "react";

import s from "./KatalogsKiys.module.scss";
import Hr from "../HomePage/Hr/Hr";
import FilterKiy from "./FilterKiy";
import KatalogKiy from "./KatalogKiy";


import {dataKiyFilter} from '../data/dataKatalogCard/dataKiyKatalog'



const KatalogsKiys = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");


  const [cards, setCards] = useState(dataKiyFilter)

  const priceFilter = () => {
    if(min == '' && max == '') {
      setCards(dataKiyFilter)
    } else{

      let newArray = [...dataKiyFilter].filter(item => item.price >= min && item.price <= max)
    setCards(newArray)
    }

    
    
  }



  return (
    <div className="container">
      <Hr title="Кии для бильярда" />

      <div className={s.katalogs}>
        <aside className={s.filter}>
          <FilterKiy 
          priceFilter={priceFilter}
          min={min} 
          setMin={setMin} 
          max={max} 
          setMax={setMax} />
        </aside>
        <main className={s.kiys}>
          <KatalogKiy  cards={cards} setCards={setCards}/>
        </main>
      </div>
    </div>
  );
};

export default KatalogsKiys;
