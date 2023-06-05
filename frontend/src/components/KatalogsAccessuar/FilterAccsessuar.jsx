import { useEffect, useRef, useState } from "react";
import inputImg from "../../image/Input---.svg";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

import s from "./FilterAccsessuar.module.scss";

const FilterAccsessuar = ({
  min,
  setMin,
  max,
  setMax,
  setArrayePlay,
  setArrayeStructure,
  setArrayeWorkshop,
  arrayPlay,
  arrayStructure,
  arrayWorkshop,
  btn,
  setBtn,
  Filter,
}) => {

   

  


  // хуки для ктегорий киёв
  const ref = useRef();
  const refPul = useRef();
  const refSnuker = useRef();
  const refExclusive = useRef();

  const [hanldeRef, setHandleRef] = useState(ref);
  const [hanldeRefPul, setHandleRefPul] = useState(refPul);
  const [hanldeRefSnuker, setHandleRefSnuker] = useState(refSnuker);
  const [hanldeRefExclusive, setHandleRefExclusive] = useState(refExclusive);


  const [check, setCheck] = useState(false);
  const [checkPul, setCheckPul] = useState(false);
  const [checkSnuker, setCheckSnuker] = useState(false);
  const [checkExclusive, setCheckExclusive] = useState(false);
  



  // Функции для категорий киёв

  function handleChecked() {
    setCheck(!check);
  }

  function handleCheckedPul() {
    setCheckPul(!checkPul);
  }

  function handleCheckedSnuker() {
    setCheckSnuker(!checkSnuker);
  }

  function handleCheckedExclusive() {
    setCheckExclusive(!checkExclusive);
  }



  const [n, setN] = useState(0);

  const [play, setPlay] = useState([]) 
  

  //useEffect для категорий киёв

  useEffect(() => {
    if (check) {
      play.push(hanldeRef.current.value);
    }
    if (check === false) {
      if (play.includes(hanldeRef.current.value)) {
        setN(play.indexOf(hanldeRef.current.value));
        setPlay(play.splice(n, 1));
      }
    }

    if (checkPul) {
      play.push(hanldeRefPul.current.value);
    }

    if (checkPul === false) {
      if (play.includes(hanldeRefPul.current.value)) {
        setN(play.indexOf(hanldeRefPul.current.value));
        setPlay(play.splice(n, 1));
      }
    }

    if (checkSnuker) {
      play.push(hanldeRefSnuker.current.value);
    }

    if (checkSnuker === false) {
      if (play.includes(hanldeRefSnuker.current.value)) {
        setN(play.indexOf(hanldeRefSnuker.current.value));
        setPlay(play.splice(n, 1));
      }
    }

    if (checkExclusive) {
      play.push(hanldeRefExclusive.current.value);
    }

    if (checkExclusive === false) {
      if (play.includes(hanldeRefExclusive.current.value)) {
        setN(play.indexOf(hanldeRefExclusive.current.value));
        setPlay(play.splice(n, 1));
      }
    }

    setArrayePlay(Array.from(new Set(play)))
  }, [check, checkPul, checkSnuker, checkExclusive]);
  

  function toggleBtn() {
    setBtn(!btn);
  }

  return (
    <div className={s.filter_container}>
      <button onClick={toggleBtn} className={s.button}>
        Подобрать по параметрам
      </button>
      <div className={btn ? `${s.filter} ${s.activeFilter}` : `${s.filter}`}>
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
                Чехлы{" "}
                <input
                  ref={hanldeRef}
                  checked={check}
                  onChange={handleChecked}
                  value="Чехол"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.listKiy_container_item}>
                Наклейки{" "}
                <input
                  ref={hanldeRefPul}
                  checked={checkPul}
                  onChange={handleCheckedPul}
                  value="Наклейка"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.listKiy_container_item}>
                Перчатки{" "}
                <input
                  ref={hanldeRefSnuker}
                  checked={checkSnuker}
                  onChange={handleCheckedSnuker}
                  value="Перчатки"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>

            <label>
              <li className={s.listKiy_container_item}>
                Мел
                <input
                  ref={hanldeRefExclusive}
                  checked={checkExclusive}
                  onChange={handleCheckedExclusive}
                  value="Мел"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            
          </ul>
        </div>


        <button onClick={() => Filter(arrayPlay, arrayStructure, arrayWorkshop, min, max)} className={s.filter_button}>
          Показать
        </button>
      </div>
    </div>
  );
};

export default FilterAccsessuar;
