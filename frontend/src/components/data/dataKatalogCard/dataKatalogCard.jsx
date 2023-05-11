import round from '../../../image/BilliardRounds.jpg'
import acsessuar from '../../../image/Acsessuar.jpg'
import services from '../../../image/services.jpg'
import imageOpacity from '../../../image/RectangleOpacity.jpg'
import { v4 as uuidv4 } from 'uuid';

const dataKatalog = [
  {id: uuidv4(), image: round, title: "Шары", info1: "Русская пирамида", info2: "Американский пул", info3: "Снукер", imageOpacity: imageOpacity },
  {id: uuidv4(), image: acsessuar, title: "Аксессуары", info1: "Мел", info2: "Наклейки и наконечники", info3: "Перчатки", imageOpacity: imageOpacity },
  {id: uuidv4(), image: services, title: "Услуги", info1: "Ремонт киев", info2: "Замена наклеек", info3: "Скупка киев", imageOpacity: imageOpacity },
];

export default dataKatalog