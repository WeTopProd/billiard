import { v4 as uuidv4 } from "uuid";
import cash from '../../../image/cash.svg'
import card from '../../../image/card.svg'
import delivery from '../../../image/delivery.svg'

const dataDelivery = [
  {
    id: uuidv4(),
    imageDelivery: cash,
    title: "Наличными",
    description: "Оплата наличными при самовывозе из нашего магазина",
    descriptionTwo: "",
  },
  {
    id: uuidv4(),
    imageDelivery: card,
    title: "Банковской картой",
    description: "Оплата катрой на сайте при самовывозе из нашего магазина",
    descriptionTwo: "Оплата катрой на сайте при доставке",
  },
  {
    id: uuidv4(),
    imageDelivery: delivery,
    title: "Доставка",
    description:
      "Цена за доставку по Москве - 300руб",
    descriptionTwo: "Цена за доставку по МО  - 600руб",
  },
];

export default dataDelivery;
