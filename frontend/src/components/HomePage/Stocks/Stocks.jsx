import s from './Stocks.module.css'
import dataStocks from '../../data/dataKatalogCard/dataStoks';
import Stock from './Stock';
import { useDispatch, useSelector } from 'react-redux';
import { goodsApi } from '../../../api/goodsApi';
import { useEffect, useState } from 'react';
import { initGoods } from '../../../redux/slices/GoodsSlice';


const Stoks = () => {
  const token = localStorage.getItem('token');


  const dispatch = useDispatch()

  const [loading, SetLoading] = useState(true)

  const [goodsItem, setGoodsItem] = useState()
  
  useEffect(() => {
    {
      goodsApi.getPromotion(token).then((data) => {
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
        <div className="container">
          <div id='stoks' className={s.cards}>
            {goodsItem?.length !== 0 && goodsItem.map((item) => {
              return <Stock key={item.id} description={item.description} price={item.price} images={item.images} id={item.id} item={item.sale} />
            }
            )}
          </div>
        </div>
      )
    )
  )
};

export default Stoks;
