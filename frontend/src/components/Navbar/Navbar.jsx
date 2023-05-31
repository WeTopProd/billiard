import s from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import SignUp from "../../image/Group 1.svg";
import Modal from "../Modal/Modal";
import axios from "axios";

import { useState, useEffect } from "react";
import useModal from "../../useModal";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../redux/slices/autorisation";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isShowingModal, setIsShowing, toggleModal] = useModal();

  const { autorisation } = useSelector((state) => state.autorisationReducer);
 

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'))
  const [userName, setUserName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/', {
      
        headers: {
          "Content-Type": "application/json",
          'authorization': `Token ${token}`
        },
      
    })
    .then(res => localStorage.setItem('name', JSON.stringify(res.data[0].first_name)))
    setUserName(JSON.parse(localStorage.getItem('name')))
  }, [autorisation, localStorage.getItem('name')])
  

  const logOut = () => {
    dispatch(loginState(false));
    localStorage.setItem("auth", JSON.stringify(false));
    window.location.reload(); 
    
  };

  const [Header, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav className={Header ? `${s.header} ${s.header_active}` : `${s.header}`}>
      <div className="container">
        <div className={s.navbar}>
          <NavbarMenu />

          <div className={s.login}>
            <Modal
              setIsShowing={setIsShowing}
              isShowingModal={isShowingModal}
              onCloseButtonClick={toggleModal}
            />
            <button className={s.login__item}>
              <img className={s.image} src={SignUp} alt="image" />
            </button>
            {autorisation ? (
              <>
                <p className={s.userName}>{userName}</p>
                <NavLink className={s.pokupki} to="#">Мои покупки</NavLink>
                <button onClick={logOut} className={s.login__item}>
                  Выйти
                </button>
              </>
            ) : (
              <button onClick={toggleModal} className={s.login__item}>
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
