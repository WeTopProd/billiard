import react, { useEffect, useState } from 'react'
import goodsSlice, { initGoods } from '../../../redux/slices//GoodsSlice.js'
import Hit from "./Hit";
import s from "./Hits.module.css";
import { goodsApi } from '../../../api/goodsApi';
import { useSelector, useDispatch } from 'react-redux';


const Hits = () => {

  const token = localStorage.getItem('token');

  const [loading, SetLoading] = useState(true)

  const dispatch = useDispatch()

  const [data, setData] = useState(
    [{
      article: null,
      composition: null,
      count: null,
      description: null,
      diameter: null,
      goods_type: null,
      id: null,
      images: [],
      is_favorited: null,
      is_in_shopping_cart: null,
      play: null,
      price: null,
      structure: null,
      title: null,
      type: null,
      weight: null,
      workshop: null,
    }])

  
  
  const [goodsItem, setGoodsItem] = useState()

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
            return <Hit key={item.id} description={item.description} price={item.price} images={item.images} id={item.id} />
          }
          ) : <></>}
        </div>
      )
    )
  );
};

export default Hits;






