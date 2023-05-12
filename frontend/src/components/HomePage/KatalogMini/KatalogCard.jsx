import { NavLink } from "react-router-dom";
import s from "./KatalogCard.module.css";

const KatalogCard = ({ image, title, info1, info2, info3, path }) => {
  return (
    <div className={s.card}>
      <img className={s.image_Back_ground} src={image} alt="image" />
      <div className={s.translate}>
        <div className={s.imageOpacity}></div>
        <NavLink to={path} className={s.title}>{title}</NavLink>
        <div className={s.info}>
          <a className={s.info_link} href="frontend/src/components/HomePage/KatalogMini/KatalogCard#">
            {info1}
          </a>
          <a className={s.info_link} href="frontend/src/components/HomePage/KatalogMini/KatalogCard#">
            {info2}
          </a>
          <a className={s.info_link} href="frontend/src/components/HomePage/KatalogMini/KatalogCard#">
            {info3}
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default KatalogCard;
