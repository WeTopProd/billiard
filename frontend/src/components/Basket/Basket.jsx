import Hr from '../HomePage/Hr/Hr'
import s from './Basket.module.scss'

import basket from '../../image/basket/basket.svg'
import { NavLink } from 'react-router-dom'

const Basket = () => {
  return (
    <div className='container'>
        <Hr title="Корзина" />
        <main className={s.basket_empty}>
            <img src={basket} alt="image" />
            <p className={s.basket_empty_title}>Ваша корзина пуста</p>
            <NavLink to="/katalogsKiys" className={s.basket_empty_link}>Каталог</NavLink>
        </main>
    </div>
  )
}

export default Basket