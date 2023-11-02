import s from "./BascketCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	removeFromCart, addToCart, counter, decrement, increment
} from "../../redux/slices/bascketSlice";
import basketApi from "../../api/basketApi/basket.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { initfavoriteIn } from "../../redux/slices/favoritedSlice";

const BascketCard = ({ id, description, price, images, count ,item }) => {

	const dispatch = useDispatch()
	const token = localStorage.getItem("token");
	const [itemCount, setItemCount] = useState(count);
	const allItemsCount = localStorage.getItem('allItemsCount');

	useEffect(() =>  {
	var ActionElement = JSON.parse(localStorage.getItem('allItemsCount'));
	 setItemCount(ActionElement.find(element => element.id == id).itemCount);
		
	}, []);
	
	useEffect(() =>  {
	
		basketApi.get(token, id)
	}, [basketApi]);



	const deletFromBasket =  () => {
		basketApi.delete(token, id).then(data => dispatch(removeFromCart(id)))
		localStorage.setItem('allItemsCount', JSON.stringify(JSON.parse(allItemsCount).filter(item => item.id !== id)))
		
	}

	const minusOne = () => {
		 if (itemCount > 1) {
			basketApi.minusOne(token, id)
				.then(data => {
					dispatch(decrement());
					setItemCount(prev => Number(prev) - 1);
					try {
						var copyArray = Object.assign([], JSON.parse(localStorage.getItem('allItemsCount')));
						for (var element of copyArray)
							if (element.id == id)
								element.itemCount = itemCount - 1;
						localStorage.setItem('allItemsCount', JSON.stringify(copyArray));
					}
					catch (e) {
						console.log(e);
					}

					 basketApi.patch(token, id)
						.then(data =>
							basketApi.patch(token, id)
						)
						.catch(error => {

						});
				})
				.catch(error => {

				});
		}

	};

	const plusOne =  () => {
		basketApi.plusOne(token, id)
			.then(data =>  {
				dispatch(increment());
				 setItemCount(prev => Number(prev) + 1);

				try  {
					var copyArray = Object.assign([], JSON.parse(localStorage.getItem('allItemsCount')));
					for (var element of copyArray)
						if (element.id == id)
							element.itemCount = itemCount + 1;
					localStorage.setItem('allItemsCount', JSON.stringify(copyArray));
				}
				catch (e) {
					console.log(e);
				}
			})
			.then(data => basketApi.patch(token, id))
			.catch(error => {
			});
	};


	return (
		<div className={s.cardGap} key={id}>
			<div className={s.card}>
				<div className={s.card_info}>
					
					{item && item.images && item.images[0] && item.images[0].images ? (
						<img className={s.card_info_image} src={item.images[0].images} alt="img"/>
					) : (
						<p>No image available</p>
					)}
					<p className={s.card_info_description}>{description}</p>

				</div>
				<div className={s.card_counter}>
					<div className={s.card_counter_count}>
						<button
							id={id}
							onClick={minusOne}
							className={s.card_counter_count_dicrement}>
							-
						</button>
						<span className={s.card_counter_count_number}>{itemCount}</span>
						<button
							id={id}
							onClick={plusOne}
							className={s.card_counter_count_increment}>
							+
						</button>
					</div>
					<div className={s.card_counter_price}>
						<span className={s.card_counter_price_title}>Цена:</span>
						{price * itemCount} РУБ
					</div>
				</div>
				<button
					onClick={deletFromBasket}
					id={id}
					className={s.card_bascket_button_delete}>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default BascketCard;
