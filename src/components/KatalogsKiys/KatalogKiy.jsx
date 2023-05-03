
import piramida from '../../image/filterImage/piramida.png'
import pul from '../../image/filterImage/pul.png'
import snuker from '../../image/filterImage/snuker.png'
import ecsclusive from '../../image/filterImage/ecsclusive.png'
import s from './KatalogKiy.module.scss'


import KatalogCard from './KatalogKiyCard'



import { Link } from 'react-router-dom'

const KatalogKiy = ({cards, setCards}) => {


  return (
    <div className={s.katalogKiy}>
        <div className={s.katalog_kiy_container}>
          <Link className={s.katalog_kiy_container_link} to="#">
            <img src={piramida} alt="image" />
          <p>
            Пирамида
          </p>
          </Link>
          <Link   className={s.katalog_kiy_container_link} to="#">
            <img src={pul} alt="image" />
          <p>
            Пул
          </p>
          </Link>
          <Link  className={s.katalog_kiy_container_link} to="#">
            <img src={snuker} alt="image" />
          <p>
            Снукер
          </p>
          </Link>
          <Link className={s.katalog_kiy_container_link} to="#">
            <img src={ecsclusive} alt="image" />
          <p>
            Эксклюзив
          </p>
          </Link>
        </div>



      {cards.map(item => <KatalogCard key={item.id} {...item}/>)}
        
    </div>
  )
}

export default KatalogKiy