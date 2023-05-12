import { NavLink } from "react-router-dom";

import s from "./TreidIn.module.scss";

const TreidIn = () => {
  return (
    <div className="container">
      <section className={s.section_treydIn}>


        <div className={s.section_treydIn_card}>
          <p className={s.section_treydIn_card_title}>Продать свой кий</p>
          <div className={s.section_treydIn_card_info}>
            <p className={s.section_treydIn_card_info_subtitle}>Продажа</p>
            <ul className={s.section_treydIn_card_info_list}>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Заполните заявку на продажу</li>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Наши специалисты оценят стоимоть вашего кия</li>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Получите деньги за кий</li>
            </ul>
          </div>
          <NavLink className={s.section_treydIn_card_link}>Продать</NavLink>
        </div>



        <div className={s.section_treydIn_card}>
          <p className={s.section_treydIn_card_title}>Обменять свой кий в трейд ин</p>
          <div className={s.section_treydIn_card_info}>
            <p className={s.section_treydIn_card_info_subtitle}>Трейд Ин</p>
            <ul className={s.section_treydIn_card_info_list}>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Заполните заявку по программе трейд ин</li>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Наши специалисты оценят стоимоть вашего кия</li>
              <li className={s.section_treydIn_card_info_list_item}> <span></span> Обменяйте кий на новый с выгодной скидкой</li>
            </ul>
          </div>
          <NavLink className={s.section_treydIn_card_link}>Продать</NavLink>
        </div>

        
      </section>
    </div>
  );
};

export default TreidIn;
