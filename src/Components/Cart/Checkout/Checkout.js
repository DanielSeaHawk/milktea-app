import React, { useContext } from "react";
import { createPortal } from "react-dom";
import style from "./Checkout.module.css";
import CartContext from "../../Store/Cart.context";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import PayButton from "./PayButton/PayButton";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return createPortal(
    <div className={style.Checkout}>
      <div
        className={style.Close}
        onClick={() => {
          props.onHide();
        }}
      >
        ❌
      </div>
      <div className={style.CheckoutBox}>
        <header className={style.Header}>
          <h2 className={style.Title}>Shooping List</h2>
        </header>
        <div className={style.CheckoutItem}>{ctx.item.map(item=><CheckoutItem key={item.id} drink={item}/>)}</div>
        <footer className={style.Footer}>
          <p className={style.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
      <PayButton totalPrice={ctx.totalPrice}/>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
