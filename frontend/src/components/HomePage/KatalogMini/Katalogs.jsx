import s from './Katalogs.module.css'
import dataKatalog from '../../data/dataKatalogCard/dataKatalogCard'
import KatalogCard from './KatalogCard'

const Katalogs = () => {
  return (
    <div className='container'>
      <div className={s.katalogs}>
        {dataKatalog.map((item) => <KatalogCard key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default Katalogs