import s from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import SignUp from '../../image/Group 1.svg'

const Navbar = () => {
  return (
    <nav className={s.header}>
      <div className="container">
        <div className={s.navbar}>
          <NavbarMenu />

          <div className= {s.login}>
            <a href="#" className={s.login__item}><img className={s.image} src={SignUp} alt="image" /></a>
            <a href="#" className={s.login__item}>Войти</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
