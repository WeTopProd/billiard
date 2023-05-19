import s from "./Favorites_card.module.scss";

const Favorites_card = ({
  number,
  setNumber,
  ...card
}) => {


  function increment(id) {
    
      if(card.id === +id) {

        setNumber(number + 1);
        console.log(card.id);
        console.log(+id);
      } 
    
  }



  function dicrement(id) {

    if(card.id === +id) {
      setNumber(number - 1)
    }
      
  }


  return (
    <div className={s.card}>
      <div className={s.card_info}>
        <img
          className={s.card_info_image}
          src={card.images[0].images}
          alt="image"
        />
        <p className={s.card_info_description}>{card.description}</p>
      </div>
      <div className={s.card_counter}>
        <div className={s.card_counter_count}>
          <button
            id={card.id}
            disabled={number <= 1 ? true : false}
            onClick={(event) => dicrement(event.currentTarget.id)}
            className={s.card_counter_count_dicrement}>
            -
          </button>
          <span id={card.id} className={s.card_counter_count_number}>
            {number}
          </span>
          <button
            id={card.id}
            onClick={(event) => {
              increment(event.currentTarget.id);
            }}
            className={s.card_counter_count_increment}>
            +
          </button>
        </div>
        <div className={s.card_counter_price}>
          <span className={s.card_counter_price_title}>Цена:</span>
          {card.price * number}РУБ
        </div>
      </div>
    </div>
  );
};

export default Favorites_card;
