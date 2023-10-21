import s from './Katalogs.module.css'
import dataKatalog from '../../data/dataKatalogCard/dataKatalogCard'
import KatalogCard from './KatalogCard'
// import { goodsApi } from '../../../api/goodsApi';
// import { initGoods } from '../../../redux/slices/GoodsSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

const Katalogs = () => {

  // useEffect(() => {
  //   {
  //     goodsApi.get(token).then((data) => {
  //       dispatch(initGoods(data))
  //       SetLoading(false)
  //     })
  //   }
  // }, []);
  // const token = localStorage.getItem('token');


  // const dispatch = useDispatch()

  // const goodsItem = useSelector(state => state.goodsSlice.items)

  // const [loading, SetLoading] = useState(true)

  return (
    <div className='container'>
      <div className={s.katalogs}>
        {dataKatalog.map((item) => <KatalogCard key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default Katalogs