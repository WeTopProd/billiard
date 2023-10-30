import s from "./Modal.module.scss";
import r from "./Registration.module.scss";

import { useState, useEffect } from "react";
import axios from "axios";

import { loginState, tokenState } from "../../redux/slices/autorisation";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Modal = ({ isShowingModal, setIsShowing, onCloseButtonClick }) => {

  const navigate = useNavigate()



  const { autorisation, token } = useSelector(
    (state) => state.autorisationReducer
  );
  const [error, setError] = useState(false);

  const [recovery, setRecovery] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(token);
  //   if (autorisation) {
  //     localStorage.setItem("token", token);
  //     // localStorage.setItem("auth", autorisation);
  //   } else if (localStorage.getItem("auth") !== "undefined") {
  //     // dispatch(loginState(localStorage.getItem("auth")));
  //     dispatch(tokenState(localStorage.getItem("token")));
  //   }
  // }, [autorisation]);

  const [register, setRegister] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [passwordValue1, setPasswordValue1] = useState("");
  const [passwordValue2, setPasswordValue2] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("")

  const [login, setLogin] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const logIn = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://frantsuz-shop/api/auth/${emailRegex.test(login) ? "token-email" : "token-phone"
        }/`,

        {
          email: emailRegex.test(login) === true ? login : null,
          phone: !emailRegex.test(login) ? login : null,
          password: passwordLog,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.request.status == 200) {
          setIsShowing(false);
          dispatch(loginState(true));
          dispatch(tokenState(res.data.auth_token));
          localStorage.setItem("token", res.data.auth_token);
        } else {
          setIsShowing(false);
          dispatch(loginState(false));
        }
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });

    navigate('/')
  };

  const formRegister = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://frantsuz-shop/api/users/",
        {
          phone: phoneValue,
          first_name: firstNameValue,
          last_name: lastNameValue,
          email: emailValue,
          password: passwordValue1,
          re_password: passwordValue2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {

        res.request.status == 201 ? navigate('/registerCode') && setRegister(false) : setRegister(true)
      }
      )
      .catch((err) => console.error(err));
  };

  const recoveryFunc = (event) => {
    event.preventDefault()

    axios.post('https://frantsuz-shop/api/users/reset_password/',
      {
        email: recoveryEmail
      })
      .catch(err => console.error(err))

    onCloseButtonClick()

  }



  if (!isShowingModal) {
    return null;
  }

  return (
    <>
      {register ?


        (
          <div className={r.modal_wrapper}>
            <div className={r.modal}>
              <form onSubmit={formRegister}>
                <Link to="/" onClick={() => setRegister(false)} className={s.modal_close}>
                  <span onClick={onCloseButtonClick}>&#10006;</span>
                </Link>
                <p className={r.modal_title}>Регистрация</p>
                <div className={r.registration}>
                  <div className={r.modal_body}>
                    <input
                      value={emailValue}
                      onChange={(event) => setEmailValue(event.target.value)}
                      className={r.modal_body_input}
                      type="email"
                      placeholder="Почта"
                    />
                    <input
                      value={passwordValue1}
                      onChange={(event) => setPasswordValue1(event.target.value)}
                      className={r.modal_body_input}
                      type="password"
                      placeholder="Пароль"
                    />
                    <input
                      value={passwordValue2}
                      onChange={(event) => setPasswordValue2(event.target.value)}
                      className={r.modal_body_input}
                      type="password"
                      placeholder="Повторите пароль"
                    />
                  </div>

                  <div className={r.modal_body}>
                    <input
                      value={firstNameValue}
                      onChange={(event) => setFirstNameValue(event.target.value)}
                      className={r.modal_body_input}
                      type="text"
                      placeholder="Имя"
                    />
                    <input
                      value={lastNameValue}
                      onChange={(event) => setLastNameValue(event.target.value)}
                      className={r.modal_body_input}
                      type="text"
                      placeholder="Фамилия"
                    />
                    <input
                      value={phoneValue}
                      onChange={(event) => setPhoneValue(event.target.value)}
                      className={r.modal_body_input}
                      type="tel"
                      placeholder="Телефон"
                    />
                  </div>
                </div>

                <div className={r.modal_footer}>
                  <div className={r.modal_footer_info}>
                    <p className={r.modal_footer_info_text}>Есть аккаунт?</p>
                    <button
                      onClick={() => setRegister(false)}
                      className={r.modal_footer_info_item}>
                      Войти
                    </button>
                  </div>
                  <button className={r.modal_footer_button}>
                    Зарегестрироваться
                  </button>
                </div>
              </form>
            </div>
          </div>
        )

        : recovery ?

          (
            <div className={s.modal_wrapper}>
              <div className={s.modal}>
                <form onSubmit={recoveryFunc}>
                  <Link to="/" onClick={() => setRegister(true)} className={s.modal_close}>
                    <span onClick={onCloseButtonClick}>&#10006;</span>
                  </Link>
                  <p className={s.modal_title}>Восстановление пароля</p>
                  <div className={s.modal_body}>
                    <input
                      value={recoveryEmail}
                      onChange={(event) => setRecoveryEmail(event.target.value)}
                      className={s.modal_body_input}
                      type="text"
                      placeholder="Введите почту"
                    />
                  </div>
                  <div className={s.modal_footer}>
                    <div className={s.modal_footer_info}>
                    </div>
                    <button onClick={() => navigate('/recoveryOk')} className={s.modal_footer_button}>Восстановить</button>
                  </div>
                </form>
              </div>
            </div>
          )

          :


          (
            <div className={s.modal_wrapper}>
              <div className={s.modal}>
                <form onSubmit={logIn}>
                  <Link to='/' onClick={() => setRegister(false)} className={s.modal_close}>
                    <span onClick={onCloseButtonClick}>&#10006;</span>
                  </Link>
                  <p className={s.modal_title}>Вход в личный кабинет</p>
                  <div className={s.modal_body}>
                    <input
                      value={login}
                      onChange={(event) => setLogin(event.target.value)}
                      className={s.modal_body_input}
                      type="text"
                      placeholder="Почта или телефон"
                    />
                    <input
                      value={passwordLog}
                      onChange={(event) => setPasswordLog(event.target.value)}
                      className={s.modal_body_input}
                      type="password"
                      placeholder="Пароль"
                    />
                  </div>
                  <div className={s.modal_footer}>
                    <div className={s.modal_footer_info}>
                      {error ? (
                        <p className={s.modal_footer_info_error}>
                          Неверный логин или пароль!
                        </p>
                      )


                        :

                        (
                          <button
                            onClick={() => setRegister(true)}
                            className={s.modal_footer_info_item}>
                            Зарегестрируйтесь
                          </button>
                        )}

                      <Link
                        onClick={() => {
                          setError(false)
                          setRecovery(true)
                        }}
                        className={s.modal_footer_info_item}>
                        Забыли пароль?
                      </Link>
                    </div>
                    <button className={s.modal_footer_button}>Войти</button>
                  </div>
                </form>
              </div>
            </div>
          )}
    </>
  );
};

export default Modal;
