import s from "./DeliveryCard.module.css";

const DeliveryCard = ({
  imageDelivery,
  title,
  description,
  descriptionTwo,
}) => {
  return (
    <div className={s.DeliveryCard}>
      <figure className={s.image}>
        <img className={s.imageCard} src={imageDelivery} alt="image" />
      </figure>

      <div className={s.info}>
        <p className={s.title}>{title}</p>
        <p className={s.info_text}>{description}</p>
        <p className={s.info_text}>{descriptionTwo}</p>
      </div>
    </div>
  );
};

export default DeliveryCard;
