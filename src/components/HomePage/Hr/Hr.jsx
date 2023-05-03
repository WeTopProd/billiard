import s from './Hr.module.css'

const Hr = ({title}) => {
  return (
    <div className="container">
      <div className={s.blockHr}>
        <p className={s.titleHr}>{title}</p>
        <div className={s.hr}></div>
      </div>
    </div>
  );
};

export default Hr;
