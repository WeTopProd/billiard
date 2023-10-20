import Hr from "../HomePage/Hr/Hr";
import s from "./Basket.module.scss";

import basket from "../../image/basket/basket.svg";
import { NavLink } from "react-router-dom";
import BascketCard from "./BascketCard";
import { useDispatch, useSelector } from "react-redux";
import { basketApi } from "../../api/basketApi/basket.js";
import react, { useEffect, useState } from 'react'
import { initCart } from "../../redux/slices/bascketSlice";
import calcTotal from "../../redux/slices/calcTotal";
const Basket = () => {

	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	const basketItemsX = useSelector(state => state.cartSlice.items)
	const totalPrice = useSelector(state => state.cartSlice.totalPrice)
	const [total, setTotal] = useState(calcTotal(basketItemsX))

	useEffect(() => {
		console.log(basketItemsX,'sasasasa');
	}, [basketItemsX])

	return (
		<div className="container">
			<Hr title="Корзина" />
			{
				basketItemsX.length == 0
					? (
						<main className={s.basket_empty}>
							<img src={basket} alt="image" />
							<p className={s.basket_empty_title}>Ваша корзина пуста</p>
							<NavLink to="/katalogsKiys" className={s.basket_empty_link}>
								Каталог
							</NavLink>
						</main>
					)
					:
					(
						<div className={s.card} >
							{basketItemsX.map(item => <BascketCard key={item.id} price={item.price} images={item.images} id={item.id} count={1} />)}
						</div>
					)
			}
			<div className={s.total_container}>
				<button className={s.total_container_order}>Оформить заказ</button>
				<p className={s.total}>
					Итоговая цена: <span className={s.total_final}>{totalPrice}</span>
				</p>
			</div>
		</div>
	);
};

export default Basket;
