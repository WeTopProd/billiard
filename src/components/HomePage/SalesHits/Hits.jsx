import dataHit from "../../data/dataKatalogCard/dataHit";
import Hit from "./Hit";
import s from "./Hits.module.css";

const Hits = () => {
  return (
    <div  className="container">
      <div id="hits" className={s.cards}>
        {dataHit.map((item) => (
          <Hit  key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Hits;
