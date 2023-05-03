
import inputImg from "../../image/Input---.svg";

import s from "./FilterKiy.module.scss";

const FilterKiy = ({ min, setMin, max, setMax, priceFilter }) => {

  return (
    <div className={s.filter}>
      <p className={s.filter_title}>Фильтр по параметрам</p>
      <div className={s.filter_price}>
        <p className={s.price}>Цена</p>

        <div className={s.inputs}>
          <input
            min={270}
            max={73080}
            onInput={(event) => setMin(event.target.value)}
            value={min}
            placeholder="от"
            className={`${s.input} ${s.min}`}
            type="number"
          />
          <img src={inputImg} alt="image" />
          <input
            value={max}
            onInput={(event) => setMax(event.target.value)}
            placeholder="до"
            className={`${s.input} ${s.max}`}
            type="number"
          />
        </div>
      </div>

      <div className={s.listKiy}>
        <div className={s.listKiy_title}>Кий</div>
        <ul className={s.listKiy_container}>
          <label>
            <li className={s.listKiy_container_item}>
              Пирамида <input value="Пирамида" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.listKiy_container_item}>
              Пул <input value="Пул" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.listKiy_container_item}>
              Снукер <input value="Снукер" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.listKiy_container_item}>
              Эксклюзив{" "}
              <input value="Эксклюзив" type="checkbox" name="checkbox" />
            </li>
          </label>
        </ul>
      </div>

      <div className={s.composition}>
        <div className={s.composition_title}>Составность</div>
        <ul className={s.composition_container}>
          <label>
            <li className={s.composition_container_item}>
              Цельный <input value="1" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.composition_container_item}>
              2х составный <input value="2" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.composition_container_item}>
              3х составный <input value="3" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.composition_container_item}>
              3/4
              <input value="3/4" type="checkbox" name="checkbox" />
            </li>
          </label>
        </ul>
      </div>

      <div className={s.workshop}>
        <div className={s.workshop_title}>Мастерская</div>
        <ul className={s.workshop_container}>
          <label>
            <li className={s.workshop_container_item}>
              Московская пирамида{" "}
              <input
                value="Московская пирамида"
                type="checkbox"
                name="checkbox"
              />
            </li>
          </label>
          <label>
            <li className={s.workshop_container_item}>
              Роман Тропин{" "}
              <input value="Роман Тропин" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.workshop_container_item}>
              Роман Королев{" "}
              <input value="Роман Королев" type="checkbox" name="checkbox" />
            </li>
          </label>
          <label>
            <li className={s.workshop_container_item}>
              Диана Миронова
              <input value="Диана Миронова" type="checkbox" name="checkbox" />
            </li>
          </label>
        </ul>
      </div>
      <button onClick={priceFilter} className={s.filter_button}>Показать</button>
    </div>
  );
};

export default FilterKiy;
