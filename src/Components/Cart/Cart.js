import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import BagImg from "../../Asset/food bag.png";
import CartContext from "../Store/Cart.context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);

  //set a state to show CartDetails or not
  const [showDetails, setShowDetails] = useState(false);

  //to show CartDetails when click the bar
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };

  //set a state for checkout page
  const [showCheckout, setShowCheckout] = useState(false);

  //add handler to checkout
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  //close checkout page
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  //When re-render, check the total amount of drinks. 
  //If it's 0, change showDetails to false to close cart page and checkout page auto. 
  useEffect(()=>{
    if(ctx.totalAmount === 0){
      setShowDetails(false)
      setShowCheckout(false)
    }
  },[ctx, setShowCheckout, setShowDetails])
  return (
    <div className={style.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {/* show cart details */}
      {showDetails && <CartDetails />}
      <div className={style.ShoppingBag}>
        <img src={BagImg} alt="foodbag" />
        {ctx.totalAmount === 0 ? null : (
          <span className={style.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={style.NoDrinks}>Your cart is empty!</p>
      ) : (
        <p className={style.Price}>{ctx.totalPrice}</p>
      )}

      <button
        onClick={showCheckoutHandler}
        className={`${style.Button} ${
          ctx.totalAmount === 0 ? style.Disabled : ""
        }`}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
