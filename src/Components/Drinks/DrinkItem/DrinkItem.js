import React from "react";
import style from "./DrinkItem.module.css";
import Counter from "../../UI/Counter";

const DrinkItem = (props) => {
  return (
    <div className={style.Drink}>
      <div className={style.ImgBox}>
        <img src={props.drink.img} />
      </div>
      <div className={style.DescBox}>
        <h2 className={style.Title}>{props.drink.title}</h2>
        {/* delete desc on cart list */}
        {props.noDesc ? null : <p className={style.Desc}>{props.drink.desc}</p>}
        <div className={style.Wrapper}>
          <span className={style.Price}>{props.drink.price}</span>
          <Counter drink={props.drink} />
        </div>
      </div>
    </div>
  );
};

export default DrinkItem;
