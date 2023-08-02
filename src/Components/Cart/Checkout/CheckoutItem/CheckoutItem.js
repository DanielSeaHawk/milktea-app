import React from "react";
import style from "./CheckoutItem.module.css";
import Counter from '../../.././UI/Counter'

const CheckoutItem = (props) => {
  return (
    <div className={style.CheckoutItem}>
      <div className={style.DrinksImg}>
        <img src={props.drink.img} />
      </div>
      <div className={style.Desc}>
        <h2 className={style.Title}>{props.drink.title}</h2>
        <div className={style.PriceOuter}>
          <Counter drink={props.drink}/>
          <div className={style.Price}>{props.drink.price * props.drink.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
