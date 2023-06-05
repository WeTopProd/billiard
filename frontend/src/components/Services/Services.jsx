import Hr from "../HomePage/Hr/Hr";
import s from "./Services.module.scss";
import sticks from "../../image/services/sticks.png";
import logo from '../../image/logo.png'

const Services = () => {
  return (
    <div className="container">
      <Hr title="Наши услуги" />

      <div className={s.services}>
        <h3 className={s.services_title}>Наши услуги</h3>
        <div className={s.services_sticker}>
          <img className={s.services_sticker_image} src={sticks} alt="image" />
          <div className={s.services_sticker_container}>
            <p className={s.services_sticker_container_title}>
              Замена наклейки
            </p>
            <div className={s.services_sticker_container_info}>
              <div className={s.services_sticker_container_info_block}>
                <p className={s.services_sticker_container_info_block_subtitle}>
                  Замена
                </p>
                <div
                  className={s.services_sticker_container_info_block_hr}></div>
                <p className={s.services_sticker_container_info_block_price}>
                  1000 р.
                </p>
              </div>
              <p className={s.services_sticker_container_info_description}>
                Приобретая наклейку в нашем магазинет, получите скидку 250 руб
                на ее установку
              </p>
            </div>
          </div>
          <button className={s.services_sticker_button}>Заказать услугу</button>
        </div>
        <hr className={s.services_hr} />
        <div className={s.services_repair}>
            <p className={s.services_repair_title}>Ремонт киев любой сложности </p>
            <p className={s.services_repair_subtitle}>Быстро и качественно</p>
            <img className={s.services_repair_logo} src={logo} alt="logo" />
          <button className={s.services_repair_button}>Заказать услугу</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
