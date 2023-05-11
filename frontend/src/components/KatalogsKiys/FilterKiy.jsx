import { useEffect, useRef, useState } from "react";
import inputImg from "../../image/Input---.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import s from "./FilterKiy.module.scss";

const FilterKiy = ({
  min,
  setMin,
  max,
  setMax,
  priceFilter,
  array,
  setArraye,
  btn, setBtn
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

  // Хуки для категорий составности

  const refSolid = useRef();
  const refOne = useRef();
  const refTwo = useRef();
  const refThreeFourths = useRef();

  const [handleRefSolid, setHandleRefSolid] = useState(refSolid);
  const [handleRefOne, setHandleRefOne] = useState(refOne);
  const [handleRefTwo, setHandleRefTwo] = useState(refTwo);
  const [handleRefThreeFourths, setHandleRefThreeFourths] =
    useState(refThreeFourths);

  const [checkSolid, setCheckSolid] = useState(false);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThreeFourths, setCheckThreeFourths] = useState(false);

  // Хуки для категорий мастерской

  const refMoscow = useRef();
  const refTropin = useRef();
  const refKorolev = useRef();
  const refMironova = useRef();

  const [handleRefMoscow, setHandleRefMoscow] = useState(refMoscow);
  const [handleRefTropin, setHandleRefTropin] = useState(refTropin);
  const [handleRefKorolev, setHandleRefKorolev] = useState(refKorolev);
  const [handleRefMironova, setHandleRefMironova] = useState(refMironova);

  const [checkMoscow, setCheckMoscow] = useState(false);
  const [checkTropin, setCheckTropin] = useState(false);
  const [checkKorolev, setCheckKorolev] = useState(false);
  const [checkMironova, setCheckMironova] = useState(false);

  // console.log(check)
  // console.log(checkPul)

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

  // Функции для категорий составности

  function handleCheckedSolid() {
    setCheckSolid(!checkSolid);
  }

  function handleCheckedOne() {
    setCheckOne(!checkOne);
  }

  function handleCheckedTwo() {
    setCheckTwo(!checkTwo);
  }

  function handleCheckedThreeFourths() {
    setCheckThreeFourths(!checkThreeFourths);
  }

  // Функции для категорий мастерской

  function handleCheckedMoscow() {
    setCheckMoscow(!checkMoscow);
  }

  function handleCheckedTropin() {
    setCheckTropin(!checkTropin);
  }

  function handleCheckedKorolev() {
    setCheckKorolev(!checkKorolev);
  }

  function handleCheckedMironova() {
    setCheckMironova(!checkMironova);
  }

  // const [array, setArraye] = useState([]);
  const [arr, setArr] = useState([]);
  const [n, setN] = useState(0);

  //useEffect для категорий киёв

  useEffect(() => {
    if (check) {
      arr.push(hanldeRef.current.value);
    }
    if (check === false) {
      if (arr.includes(hanldeRef.current.value)) {
        setN(arr.indexOf(hanldeRef.current.value));
        // console.log('a' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkPul) {
      arr.push(hanldeRefPul.current.value);
    }

    if (checkPul === false) {
      if (arr.includes(hanldeRefPul.current.value)) {
        setN(arr.indexOf(hanldeRefPul.current.value));
        // console.log('b' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkSnuker) {
      arr.push(hanldeRefSnuker.current.value);
    }

    if (checkSnuker === false) {
      if (arr.includes(hanldeRefSnuker.current.value)) {
        setN(arr.indexOf(hanldeRefSnuker.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkExclusive) {
      arr.push(hanldeRefExclusive.current.value);
    }

    if (checkExclusive === false) {
      if (arr.includes(hanldeRefExclusive.current.value)) {
        setN(arr.indexOf(hanldeRefExclusive.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    setArraye(Array.from(new Set(arr)));
  }, [check, checkPul, checkSnuker, checkExclusive]);

  //useEffect для категорий составности

  useEffect(() => {
    if (checkSolid) {
      arr.push(handleRefSolid.current.value);
    }
    if (checkSolid === false) {
      if (arr.includes(handleRefSolid.current.value)) {
        setN(arr.indexOf(handleRefSolid.current.value));
        // console.log('a' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkOne) {
      arr.push(handleRefOne.current.value);
    }

    if (checkOne === false) {
      if (arr.includes(handleRefOne.current.value)) {
        setN(arr.indexOf(handleRefOne.current.value));
        // console.log('b' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkTwo) {
      arr.push(handleRefTwo.current.value);
    }

    if (checkTwo === false) {
      if (arr.includes(handleRefTwo.current.value)) {
        setN(arr.indexOf(handleRefTwo.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkThreeFourths) {
      arr.push(handleRefThreeFourths.current.value);
    }

    if (checkThreeFourths === false) {
      if (arr.includes(handleRefThreeFourths.current.value)) {
        setN(arr.indexOf(handleRefThreeFourths.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    setArraye(Array.from(new Set(arr)));
  }, [checkSolid, checkOne, checkTwo, checkThreeFourths]);

  //useEffect для категорий мастерской

  useEffect(() => {
    if (checkMoscow) {
      arr.push(handleRefMoscow.current.value);
    }
    if (checkMoscow === false) {
      if (arr.includes(handleRefMoscow.current.value)) {
        setN(arr.indexOf(handleRefMoscow.current.value));
        // console.log('a' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkTropin) {
      arr.push(handleRefTropin.current.value);
    }

    if (checkTropin === false) {
      if (arr.includes(handleRefTropin.current.value)) {
        setN(arr.indexOf(handleRefTropin.current.value));
        // console.log('b' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkKorolev) {
      arr.push(handleRefKorolev.current.value);
    }

    if (checkKorolev === false) {
      if (arr.includes(handleRefKorolev.current.value)) {
        setN(arr.indexOf(handleRefKorolev.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    if (checkMironova) {
      arr.push(handleRefMironova.current.value);
    }

    if (checkMironova === false) {
      if (arr.includes(handleRefMironova.current.value)) {
        setN(arr.indexOf(handleRefMironova.current.value));
        // console.log('c' + n)
        setArr(arr.splice(n, 1));
      }
    }

    setArraye(Array.from(new Set(arr)));
  }, [checkMoscow, checkTropin, checkKorolev, checkMironova]);



  

  function toggleBtn() {
    setBtn(!btn)
  }


  return (
    <div className={s.filter_container}>
      <button onClick={toggleBtn} className={s.button}>Подобрать по параметрам</button>
      <div className={btn ? `${s.filter } ${ s.activeFilter}`: `${s.filter}`}>
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
                Пирамида{" "}
                <input
                  ref={hanldeRef}
                  checked={check}
                  onChange={handleChecked}
                  value="Пирамида"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.listKiy_container_item}>
                Пул{" "}
                <input
                  ref={hanldeRefPul}
                  checked={checkPul}
                  onChange={handleCheckedPul}
                  value="Пул"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.listKiy_container_item}>
                Снукер{" "}
                <input
                  ref={hanldeRefSnuker}
                  checked={checkSnuker}
                  onChange={handleCheckedSnuker}
                  value="Снукер"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.listKiy_container_item}>
                Эксклюзив
                <input
                  ref={hanldeRefExclusive}
                  checked={checkExclusive}
                  onChange={handleCheckedExclusive}
                  value="Эксклюзив"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
          </ul>
        </div>

        <div className={s.composition}>
          <div className={s.composition_title}>Составность</div>
          <ul className={s.composition_container}>
            <label>
              <li className={s.composition_container_item}>
                Цельный{" "}
                <input
                  ref={handleRefSolid}
                  checked={checkSolid}
                  onChange={handleCheckedSolid}
                  value="1"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.composition_container_item}>
                2х составный{" "}
                <input
                  ref={handleRefOne}
                  checked={checkOne}
                  onChange={handleCheckedOne}
                  value="2"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.composition_container_item}>
                3х составный{" "}
                <input
                  ref={handleRefTwo}
                  checked={checkTwo}
                  onChange={handleCheckedTwo}
                  value="3"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.composition_container_item}>
                3/4
                <input
                  ref={handleRefThreeFourths}
                  checked={checkThreeFourths}
                  onChange={handleCheckedThreeFourths}
                  value="3/4"
                  type="checkbox"
                  name="checkbox"
                />
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
                  ref={handleRefMoscow}
                  checked={checkMoscow}
                  onChange={handleCheckedMoscow}
                  value="Московская пирамида"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.workshop_container_item}>
                Роман Тропин{" "}
                <input
                  ref={handleRefTropin}
                  checked={checkTropin}
                  onChange={handleCheckedTropin}
                  value="Роман Тропин"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.workshop_container_item}>
                Роман Королев{" "}
                <input
                  ref={handleRefKorolev}
                  checked={checkKorolev}
                  onChange={handleCheckedKorolev}
                  value="Роман Королев"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
            <label>
              <li className={s.workshop_container_item}>
                Диана Миронова
                <input
                  ref={handleRefMironova}
                  checked={checkMironova}
                  onChange={handleCheckedMironova}
                  value="Диана Миронова"
                  type="checkbox"
                  name="checkbox"
                />
              </li>
            </label>
          </ul>
        </div>
        <button onClick={priceFilter} className={s.filter_button}>
          Показать
        </button>
      </div>
    </div>
  );
};

export default FilterKiy;
