import React, { useContext } from "react";
import style from "./Counter.module.css";
import CartContext from "../Store/Cart.context";

const Counter = (props) => {
  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
    //ctx.addItem(props.drink);
    ctx.cartDispatch({type:'ADD', drink:props.drink})
  };

  const subButtonHandler = () => {
    // ctx.removeItem(props.drink);
    ctx.cartDispatch({type:'REMOVE',drink:props.drink})
  };

  return (
    <div>
      {props.drink.amount && props.drink.amount !== 0 ? (
        <>
          <button onClick={subButtonHandler} className={style.Sub}>
            -
          </button>
          <span className={style.Count}>{props.drink.amount}</span>
        </>
      ) : null}

      <button onClick={addButtonHandler} className={style.Add}>
        +
      </button>
    </div>
  );
};

export default Counter;
