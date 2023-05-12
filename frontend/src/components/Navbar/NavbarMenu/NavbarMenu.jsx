import { useState } from "react";
import s from "./NavbarMenu.module.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarMenu = () => {

    const [burger, setBurger] = useState(false)

    function toggleBurger () {
        setBurger(!burger)
    }


    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -240; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }


  return (
    <div className={s.link}>
      <div className={s.burger_menu}>
        <div onClick={toggleBurger} className={s.btn}>
          <span className={s.burger}></span>
          <span className={s.burger}></span>
          <span className={s.burger}></span>
        </div>
        <div className={burger ? `${s.menu} ${s.active}` : `${s.menu}`}>
          <NavLink scroll={scrollWithOffset}  to="#" className={s.link__itemBtn}>
            О компании
          </NavLink>
          <HashLink scroll={scrollWithOffset}  to="/#hits"  className={s.link__itemBtn}>
            Хиты продаж
          </HashLink>
          <HashLink scroll={scrollWithOffset}  to="/#stoks" className={s.link__itemBtn}>
            Акции
          </HashLink>
          <HashLink scroll={scrollWithOffset}  to="/#redemtion" className={s.link__itemBtn}>
            Выкуп
          </HashLink>
          <HashLink  scroll={scrollWithOffset} to="/#order" className={s.link__itemBtn}>
            На заказ
          </HashLink>
          <HashLink  scroll={scrollWithOffset} to="/#delivery" className={s.link__itemBtn}>
            Оплата и доставка
          </HashLink>
          <HashLink  scroll={scrollWithOffset} to="/#footer" className={s.link__itemBtn}>
            Контакты
          </HashLink>
        </div>
      </div>

      <NavLink to="#" className={s.link__item}>
        О компании
      </NavLink>
      <HashLink scroll={scrollWithOffset}  to="/#hits" className={s.link__item}>
        Хиты продаж
      </HashLink>
      <HashLink  scroll={scrollWithOffset} to="/#stoks" className={s.link__item}>
        Акции
      </HashLink>
      <HashLink scroll={scrollWithOffset}  to="/#redemtion" className={s.link__item}>
        Выкуп
      </HashLink>
      <HashLink scroll={scrollWithOffset} to="/#order" className={s.link__item}>
        На заказ
      </HashLink>
      <HashLink scroll={scrollWithOffset}  to="/#delivery" className={s.link__item}>
        Оплата и Доставка
      </HashLink>
      <HashLink scroll={scrollWithOffset}  to="/#footer" className={s.link__item}>
        Контакты
      </HashLink>
    </div>
  );
};

export default NavbarMenu;
