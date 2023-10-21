import { useState } from "react";
import s from "./Recovery.module.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import statusOkLogo from "../../image/statusOk/Vector.png";

const Recovery = () => {
  const [password, setPassword] = useState("");
  const [re_password, setRe_Password] = useState("");

  const [statusOk, setStatusOk] = useState(false);

  const location = useLocation();

  let id = location.search
    ? location.search.split("&")[0].split("=").slice(1).join("")
    : null;
  let token = location.search
    ? location.search.split("&")[1].split("=").slice(1).join("")
    : null;

  const recovery = (event) => {
    event.preventDefault();

    axios
      .post("http://frantsuz-shop.ru/api/users/reset_password_confirm/", {
        uid: id,
        token: token,
        new_password: password,
        re_new_password: re_password,
      })
      .then((res) =>
        res.status == 204 ? setStatusOk(true) : setStatusOk(false)
      );
  };

  return (
    <>
      {statusOk ? (
        <div className="container">
          <div className={s.modal_wrapper}>
            <div className={s.modal_recovery}>
              <form onSubmit={recovery}>
                <Link to="/" className={s.modal_recovery_close}>
                  <span>&#10006;</span>
                </Link>
                <p className={s.modal_recovery_title}>
                  Пароль <br /> успешно изменён
                </p>
                <div className={s.modal_recovery_body}>
                  <img src={statusOkLogo} alt="image" />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className={s.modal_wrapper}>
            <div className={s.modal}>
              <form onSubmit={recovery}>
                <Link to="/" className={s.modal_close}>
                  <span>&#10006;</span>
                </Link>
                <p className={s.modal_title}>Восстановление пароля</p>
                <div className={s.modal_body}>
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={s.modal_body_input}
                    type="password"
                    placeholder="Введите пароль"
                  />
                  <input
                    value={re_password}
                    onChange={(event) => setRe_Password(event.target.value)}
                    className={s.modal_body_input}
                    type="password"
                    placeholder="Повторите пароль"
                  />
                </div>
                <div className={s.modal_footer}>
                  <div className={s.modal_footer_info}></div>
                  <button className={s.modal_footer_button}>
                    Изменить пароль
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recovery;
