import s from "./Modal.module.scss";
import r from "./Registration.module.scss";

import { useState } from "react";

const Modal = ({ show, onCloseButtonClick }) => {
  const [register, setRegister] = useState(false);

  if (!show) {
    return null;
  }

  return (
    <>
      {register ? (
        <div className={r.modal_wrapper}>
          <div className={r.modal}>
            <div onClick={() => setRegister(false)} className={s.modal_close}>
              <span onClick={onCloseButtonClick}>&#10006;</span>
            </div>
            <p className={r.modal_title}>Регистрация</p>
            <div className={r.registration}>
              <div className={r.modal_body}>
                <input
                  className={r.modal_body_input}
                  type="text"
                  placeholder="Почта или телефон"
                />
                <input
                  className={r.modal_body_input}
                  type="password"
                  placeholder="Пароль"
                />
                <input
                  className={r.modal_body_input}
                  type="password"
                  placeholder="Повторите пароль"
                />
              </div>

              <div className={r.modal_body}>
                <input
                  className={r.modal_body_input}
                  type="text"
                  placeholder="Почта или телефон"
                />
                <input
                  className={r.modal_body_input}
                  type="password"
                  placeholder="Пароль"
                />
                <input
                  className={r.modal_body_input}
                  type="password"
                  placeholder="Повторите пароль"
                />
              </div>
            </div>

            <div className={r.modal_footer}>
              <div className={r.modal_footer_info}>
                <p className={r.modal_footer_info_text}>
                  Есть аккаунт?
                </p>
                <button onClick={() => setRegister(false)} className={r.modal_footer_info_item}>
                  Войдите
                </button>
              </div>
              <button className={r.modal_footer_button}>Зарегестрироваться</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.modal_wrapper}>
          <div className={s.modal}>
            <div onClick={() => setRegister(false)} className={s.modal_close}>
              <span onClick={onCloseButtonClick}>&#10006;</span>
            </div>
            <p className={s.modal_title}>Вход в личный кабинет</p>
            <div className={s.modal_body}>
              <input
                className={s.modal_body_input}
                type="text"
                placeholder="Почта или телефон"
              />
              <input
                className={s.modal_body_input}
                type="password"
                placeholder="Пароль"
              />
            </div>
            <div className={s.modal_footer}>
              <div className={s.modal_footer_info}>
                <button
                  onClick={() => setRegister(true)}
                  className={s.modal_footer_info_item}>
                  Зарегестрируйтесь
                </button>
                <button className={s.modal_footer_info_item}>
                  Забыли пароль?
                </button>
              </div>
              <button className={s.modal_footer_button}>Войти</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
