import s from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import SignUp from '../../image/Group 1.svg'
import Modal from '../Modal/Modal'

import { useState, useEffect } from "react";
import useModal from "../../useModal";

const Navbar = () => {

const [isShowingModal, toggleModal] = useModal()
  
  
const [Header , setNavbar] = useState (false)

const changeBackground = () => {
     

  if (window.scrollY >= 100) {

    setNavbar(true) 

  } else {

    setNavbar(false)

  }
}

useEffect(() => {

  changeBackground()

  window.addEventListener("scroll", changeBackground)

}, [])

  return (
    <nav className={Header ?  `${s.header} ${s.header_active}` : `${s.header}`}>
      <div className="container">
        <div className={s.navbar}>
          <NavbarMenu />

          <div className= {s.login}>
            <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
            <button  className={s.login__item}><img className={s.image} src={SignUp} alt="image" /></button>
            <button onClick={toggleModal} className={s.login__item}>Войти</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
