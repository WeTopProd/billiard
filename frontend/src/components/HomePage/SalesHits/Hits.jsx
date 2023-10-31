import react, { useEffect, useState } from 'react'
import goodsSlice, { initGoods } from '../../../redux/slices//GoodsSlice.js'
import Hit from "./Hit";
import s from "./Hits.module.css";
import { goodsApi } from '../../../api/goodsApi';
import { useSelector, useDispatch } from 'react-redux';
import basketApi from '../../../api/basketApi/basket.js';
import { initCart } from '../../../redux/slices/bascketSlice.js';


const Hits = () => {

  const token = localStorage.getItem('token');

  const [loading, SetLoading] = useState(true)

  const dispatch = useDispatch()
  
  const [goodsItem, setGoodsItem] = useState()

  const basketItemsX = useSelector(state => state.cartSlice.items)
  
  useEffect(() => {
    {
      goodsApi.getBestseller(token).then((data) => {
        setGoodsItem(data)
        SetLoading(false)
        
      })
      
    }
  }, []);

  return (
    (loading ?
      (
        <p style={{ color: "#fff", textAlign: "center", widows: '100%', fontSize: '28px', padding: '15px 0px' }}>Loading...</p>
      )
      :
      (
        <div className={s.container}>
          {goodsItem?.length != 0 ? goodsItem.map((item) => {
            return <Hit key={item.id} description={item.description} price={item.price} images={item.images} id={item.id} item={item} />
          }
          ) : <></>}
        </div>
      )
    )
  );
};

export default Hits;






