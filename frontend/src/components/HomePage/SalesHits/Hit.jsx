import s from "./Hit.module.css";
import a from './Hits.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	counter,
	increment
} from "../../../redux/slices/bascketSlice";
import basketApi from "../../../api/basketApi/basket.js";
import favorite from "../../../api/FavoriteApi/Favorite";
import { addToFavorite, initfavorite, initfavoriteIn } from "../../../redux/slices/favoritedSlice";
import { useEffect, useState } from "react";



const Hit = ({ id, description, price, image, item }) => {

	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	const allItemsCount = localStorage.getItem('allItemsCount');
	const [isAdded , setIsadded] = useState(false)
	// useEffect(() => {
	// 	localStorage.removeItem('allItemsCount');
	// }, [])

	const addToBasket = () => {
		basketApi.post(token, id).then(data => {
			dispatch(addToCart({ ...data }))
			dispatch(increment());

			allItemsCount
				?
				localStorage.setItem('allItemsCount', JSON.stringify([...JSON.parse(allItemsCount), { ...data, itemCount: 1 }]))
				:
				localStorage.setItem('allItemsCount', JSON.stringify([{ ...data, itemCount: 1 }]))

			console.log(JSON.parse(localStorage.getItem('allItemsCount')));
		})
		setIsadded(true)
	}

	const addFavorite = async () => {
		favorite.post(token, id).then(data => {
			
			
		});
		await favorite.get(token, id).then(data => dispatch(initfavoriteIn(data)))
	}

	useEffect(()=>{
		favorite.get(token, id).then(data => {

			
		});
	}, [favorite])

	return (
		<div id="hits" className={a.cards}>
			<div className={s.card} key={id}>
				<div className={s.imageHit_container}>
					{item && item.images && item.images[0] && item.images[0].images ? (
						<img src={item.images[0].images} alt="img" />
					) : (
						<p>No image available</p>
					)}
				</div>
				<p className={s.iconHit}>Хит</p>
				<div className={s.heart}>
					<svg
						onClick={addFavorite}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_934_13599)">
							<path
								d="M11.5781 4.48928L12 5.24686L12.4218 4.48928C13.475 2.59781 15.3337 1.3877 17.4545 1.3877C20.7784 1.3877 23.5 4.49808 23.5 8.29678C23.5 9.99499 22.8162 11.7467 21.7218 13.4524C20.6311 15.1522 19.166 16.7539 17.6833 18.1403C16.2032 19.5243 14.7205 20.6798 13.6065 21.49C13.05 21.8948 12.5867 22.2124 12.2633 22.4284C12.1614 22.4965 12.0735 22.5543 12.0009 22.6018C11.9282 22.554 11.8401 22.4955 11.738 22.4268C11.4145 22.2092 10.9511 21.8893 10.3945 21.4821C9.28043 20.667 7.79754 19.5054 6.31715 18.1173C4.83427 16.7269 3.36886 15.1229 2.27797 13.4256C1.18298 11.7221 0.5 9.97846 0.5 8.29678C0.5 4.49808 3.2216 1.3877 6.54546 1.3877C8.66629 1.3877 10.5249 2.59781 11.5781 4.48928Z"
								stroke="#93847F"
							/>
						</g>
						<defs>
							<clipPath id="clip0_934_13599">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<p className={s.description}>{description}</p>
				<p className={s.price}>{price} РУБ</p>
				<div className={s.buttons}>
					<div className={s.buttons_item}>
						<button className={s.button_one}>Подробнее</button>
						{isAdded ? <div className={s.div_two}><p>уже добавлено в корзину</p></div> :
						<button className={s.button_two} onClick={addToBasket}>Добавить в корзину</button>}
					</div>
					<div className={s.buttonOneClick_container}>
						<button className={s.buttonOneClick} >Купить в один клик</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hit;
