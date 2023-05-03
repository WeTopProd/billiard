import s from "./KatalogKiyCard.module.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const KatalogKiyCard = (item) => {

  return (
    <div className={s.card}>
      <div className={s.swiperWrapper}>
        <div className={s.heart}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_934_13599)">
            <path
              d="M11.5781 4.48928L12 5.24686L12.4218 4.48928C13.475 2.59781 15.3337 1.3877 17.4545 1.3877C20.7784 1.3877 23.5 4.49808 23.5 8.29678C23.5 9.99499 22.8162 11.7467 21.7218 13.4524C20.6311 15.1522 19.166 16.7539 17.6833 18.1403C16.2032 19.5243 14.7205 20.6798 13.6065 21.49C13.05 21.8948 12.5867 22.2124 12.2633 22.4284C12.1614 22.4965 12.0735 22.5543 12.0009 22.6018C11.9282 22.554 11.8401 22.4955 11.738 22.4268C11.4145 22.2092 10.9511 21.8893 10.3945 21.4821C9.28043 20.667 7.79754 19.5054 6.31715 18.1173C4.83427 16.7269 3.36886 15.1229 2.27797 13.4256C1.18298 11.7221 0.5 9.97846 0.5 8.29678C0.5 4.49808 3.2216 1.3877 6.54546 1.3877C8.66629 1.3877 10.5249 2.59781 11.5781 4.48928Z"
              stroke="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_934_13599">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </div>

        <Swiper
          width={594}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={false}
          navigation={true}
          pagination={true}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          onSwiper={(swiper) => swiper}
          className={s.swiper}>
          {item.image.map((item) => (
            <SwiperSlide>
              <img src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={s.container}>
        <div className={s.container_info}>
          <p className={s.container_info_title}>{item.title}</p>
          <p className={s.container_info_description}>{item.description}</p>
          <p className={s.container_info_structure}>Состав: {item.structure}</p>
          <p className={s.container_info_workshop}>
            Мастерская: {item.workshop}
          </p>
          <p className={s.container_info_weight}>Вес кия: {item.weight} гр.</p>
          <p className={s.container_info_article}>Артикул: {item.article}</p>
        </div>

        <div className={s.container_price}>
          <p className={s.container_price_info}>Цена: {item.price} руб.</p>
          <button className={s.container_price_button}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default KatalogKiyCard;
