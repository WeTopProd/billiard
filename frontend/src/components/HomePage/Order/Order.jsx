import s from "./Order.module.css";
import KiysOrder from "../../../image/kiysOrder.jpg";

const Order = () => {
  return (
    <div className="container">
      <div id="order" className={s.block_info}>
        <figure className={s.KiyOrder}>
          <img className={s.image_kiysOrder} src={KiysOrder} alt="image" />
        </figure>
        <div className={s.info}>
          <p className={s.info_text}>
            Изготовление киев по вашим параметрам от опытных мастеров с
            доставкой
          </p>
          <a className={s.button_order} href="frontend/src/components/HomePage/Order/Order#">
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
};

export default Order;
