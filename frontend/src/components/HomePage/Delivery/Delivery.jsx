import s from './Delivery.module.css'
import DeliveryCard from './DeliveryCard'
import dataDelivery from '../../data/dataKatalogCard/dataDelivery'
import { useState } from 'react'

const Delivery = () => {

    const [info, setInfo] = useState(dataDelivery)

  return (
    <div className='container'>
        <div id='delivery' className={s.delivery}>
            {info.map((item) => <DeliveryCard key={item.id} {...item} />)}
        </div>
    </div>
  )
}

export default Delivery