import s from './Stocks.module.css'
import dataStocks from '../../data/dataKatalogCard/dataStoks';
import Stock from './Stock';

const Stoks = () => {
  return (
    <div className="container">
      <div id='stoks' className={s.cards}>
        {dataStocks.map((item) => (
          <Stock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Stoks;
