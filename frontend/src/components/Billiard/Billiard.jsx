import s from "./Billiard.module.css";
import { NavLink } from "react-router-dom";

const Billiard = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.kiy}>
          <p className={s.title}>Кии для бильярда</p>
          <p className={s.text}>Ручной работы</p>
          <p className={s.text}>От опытных мастеров</p>

          <NavLink className={s.katalog_link} to="./katalogsKiys">
            Каталог
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Billiard;
