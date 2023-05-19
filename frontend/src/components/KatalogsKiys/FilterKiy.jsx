import { useEffect, useRef, useState } from "react";
import inputImg from "../../image/Input---.svg";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

import s from "./FilterKiy.module.scss";

const FilterKiy = ({
  min,
  setMin,
  max,
  setMax,
  // priceFilter,
  // array,
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

  const [n, setN] = useState(0);

  const [play, setPlay] = useState([]) 
  const [structure, setStructure] = useState([]) 
  const [workshop, setWorkshop] = useState([])

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

  //useEffect для категорий составности

  useEffect(() => {
    if (checkSolid) {
      structure.push(handleRefSolid.current.value);
    }
    if (checkSolid === false) {
      if (structure.includes(handleRefSolid.current.value)) {
        setN(structure.indexOf(handleRefSolid.current.value));
        setStructure(structure.splice(n, 1));
      }
    }

    if (checkOne) {
      structure.push(handleRefOne.current.value);
    }

    if (checkOne === false) {
      if (structure.includes(handleRefOne.current.value)) {
        setN(structure.indexOf(handleRefOne.current.value));
        setStructure(structure.splice(n, 1));
      }
    }

    if (checkTwo) {
      structure.push(handleRefTwo.current.value);
    }

    if (checkTwo === false) {
      if (structure.includes(handleRefTwo.current.value)) {
        setN(structure.indexOf(handleRefTwo.current.value));
        setStructure(structure.splice(n, 1));
      }
    }

    if (checkThreeFourths) {
      structure.push(handleRefThreeFourths.current.value);
    }

    if (checkThreeFourths === false) {
      if (structure.includes(handleRefThreeFourths.current.value)) {
        setN(structure.indexOf(handleRefThreeFourths.current.value));
        setStructure(structure.splice(n, 1));
      }
    }

    setArrayeStructure(Array.from(new Set(structure)));
  }, [checkSolid, checkOne, checkTwo, checkThreeFourths]);

  //useEffect для категорий мастерской

  useEffect(() => {
    if (checkMoscow) {
      workshop.push(handleRefMoscow.current.value);
    }
    if (checkMoscow === false) {
      if (workshop.includes(handleRefMoscow.current.value)) {
        setN(workshop.indexOf(handleRefMoscow.current.value));
        setWorkshop(workshop.splice(n, 1));
      }
    }

    if (checkTropin) {
      workshop.push(handleRefTropin.current.value);
    }

    if (checkTropin === false) {
      if (workshop.includes(handleRefTropin.current.value)) {
        setN(workshop.indexOf(handleRefTropin.current.value));
        setWorkshop(workshop.splice(n, 1));
      }
    }

    if (checkKorolev) {
      workshop.push(handleRefKorolev.current.value);
    }

    if (checkKorolev === false) {
      if (workshop.includes(handleRefKorolev.current.value)) {
        setN(workshop.indexOf(handleRefKorolev.current.value));
        setWorkshop(workshop.splice(n, 1));
      }
    }

    if (checkMironova) {
      workshop.push(handleRefMironova.current.value);
    }

    if (checkMironova === false) {
      if (workshop.includes(handleRefMironova.current.value)) {
        setN(workshop.indexOf(handleRefMironova.current.value));
        setWorkshop(workshop.splice(n, 1));
      }
    }

    setArrayeWorkshop(Array.from(new Set(workshop)));
  }, [checkMoscow, checkTropin, checkKorolev, checkMironova]);

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
        <button onClick={() => Filter(arrayPlay, arrayStructure, arrayWorkshop, min, max)} className={s.filter_button}>
          Показать
        </button>
      </div>
    </div>
  );
};

export default FilterKiy;
