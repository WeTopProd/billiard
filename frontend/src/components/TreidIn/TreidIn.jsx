import { NavLink } from "react-router-dom";

import s from "./TreidIn.module.scss";

const TreidIn = () => {
  return (
    <div className="container">
      <section className={s.section_treydIn}>


        <div className={s.section_treydIn_card}>
          <p className={s.section_treydIn_card_title}>Продать свой кий</p>
          <div className={s.section_treydIn_card_info}>
            <p className={s.section_treydIn_card_subtitle}>Продажа</p>
            <ul>
              <li>Заполните заявку на продажу</li>
              <li>Наши специалисты оценят стоимоть вашего кия</li>
              <li>Получите деньги за кий</li>
            </ul>
          </div>
          <NavLink>Продать</NavLink>
        </div>



        <div className={s.section_treydIn_card}>
          <p className={s.section_treydIn_card_title}>Продать свой кий</p>
          <div className={s.section_treydIn_card_info}>
            <p className={s.section_treydIn_card_subtitle}>Продажа</p>
            <ul>
              <li>Заполните заявку на продажу</li>
              <li>Наши специалисты оценят стоимоть вашего кия</li>
              <li>Получите деньги за кий</li>
            </ul>
          </div>
          <NavLink>Продать</NavLink>
        </div>

        
      </section>
    </div>
  );
};

export default TreidIn;
