import s from './RegisterCode.module.scss'
import statusOkLogo from "../../image/statusOk/Vector.png";
import { Link } from 'react-router-dom';

const RegisterCode = () => {
  return (
    <div className="container">
          <div className={s.modal_wrapper}>
            <div className={s.modal_recovery}>
              <form>
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
  )
}

export default RegisterCode