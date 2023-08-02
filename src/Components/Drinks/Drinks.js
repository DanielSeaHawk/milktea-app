import React from "react";
import DrinkItem from "./DrinkItem/DrinkItem";
import style from "./Drinks.module.css";

const Drinks = (props) => {
  return (
    <div className={style.Drinks}>
      {props.drinksData.map((item) => (
        <DrinkItem key={item.id} drink = {item}/>
      ))}
    </div>
  );
};

export default Drinks;
