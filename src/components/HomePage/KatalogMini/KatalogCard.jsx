import s from "./KatalogCard.module.css";

const KatalogCard = ({ image, title, info1, info2, info3, imageOpacity }) => {
  return (
    <div className={s.card}>
      <img className={s.image_Back_ground} src={image} alt="image" />
      <div className={s.translate}>
        <div className={s.imageOpacity}></div>
        <p className={s.title}>{title}</p>
        <div className={s.info}>
          <a className={s.info_link} href="#">
            {info1}
          </a>
          <a className={s.info_link} href="#">
            {info2}
          </a>
          <a className={s.info_link} href="#">
            {info3}
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default KatalogCard;
