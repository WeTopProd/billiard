import s from "./Redemption.module.css";
import kiys from "../../../image/Kiys.jpg";
import wave1 from "../../../image/wave1.svg";
import wave2 from "../../../image/wave2.svg";

import { NavLink } from "react-router-dom";

const Redemption = () => {
  return (
    <section id="redemtion" className={s.section}>
      <div className="container">
        <div className={s.block_info}>
          <figure className={s.KiyRedmetion}>
            <img className={s.image_kiys} src={kiys} alt="image" />
          </figure>
          <div className={s.info}>
            <span className={s.wave}>
              <img src={wave1} alt="image" />
            <div className={s.line}></div>
            </span>

            <p className={s.info_text}>
              Продай или обменяй свой кий на новый по программе Трейд инн
            </p>

            <NavLink to="/redemtion" className={s.button_detailed} >Подробнее</NavLink>

            <span className={s.wave}>
            <div className={s.line}></div>
              <img src={wave2} alt="image" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redemption;
