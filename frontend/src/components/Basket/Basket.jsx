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
import axios from "axios";
const Basket = () => {

	const dispatch = useDispatch();

	const token = localStorage.getItem('token');

	const basketItemsX = useSelector(state => state.cartSlice.items)

	const totalPrice = useSelector(state => state.cartSlice.totalPrice)

	const [total, setTotal] = useState(calcTotal(basketItemsX))

	const [goodDisc, setGoodsDisc] = useState('')
	
	const [goodId, setGoodId] = useState([])

	const [countGood, setCountGood] = useState([])

	const [priceGood, setPriceGood] = useState([])

	const [finalPrice, setFinalPrice] = useState('')

	const [priceCount, setPriceCount] = useState([])


	useEffect(() => {

		setGoodsDisc(basketItemsX.map(el => el.title))
		setGoodId(basketItemsX.map(el => el.id))
		setCountGood(basketItemsX.map(el => el.count))

		let priceGood = basketItemsX.map(el => el.price * el.count)
		setPriceGood(priceGood)

		let totalPrice = priceGood.reduce((prev, curr) => prev + curr, 0) 
		setFinalPrice(totalPrice)

	}, [basketItemsX])


	const handleSubmit = () => {
		
		
		axios.request({
			url: 'http://127.0.0.1:8000/api/send-order/',
			data: {
				decription: `${goodDisc}`,
				goods_id: goodId,
				count_goods: countGood,
				price_goods: priceGood,
				final_price: `${finalPrice}`,
			},
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
			method: 'POST',

		})
		.then(response => {
			axios.request({
				url: 'http://127.0.0.1:8000/api/payment/',
				method: 'POST',
				data: {
					"service_name": `${goodDisc}`,
					"num_order": goodId,
					"price": `${finalPrice}`
				},
				headers: {
					authorization: `Token ${token}`,
					'Content-Type': 'application/json',
				},
			})
				.then(response => {

					const redirectUrl = response.data.success;
					if (redirectUrl) {
						window.location.href = redirectUrl;
					}
				})

		}).catch((err) => {
			
			
		});

	}
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
				<button className={s.total_container_order} onClick={handleSubmit}>Оформить заказ</button>
				<p className={s.total}>
					Итоговая цена: <span className={s.total_final}>{totalPrice}</span>
				</p>
			</div>
		</div>
	);
};

export default Basket;
