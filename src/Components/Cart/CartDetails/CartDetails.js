import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import style from "./CartDetails.module.css";
import CartContext from "../../Store/Cart.context";
import DrinkItem from "../../Drinks/DrinkItem/DrinkItem";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

//set state for confirm box
const [showConfirm, setShowConfirm] = useState(false)

//fn for confirm box
const showConfirmHandler = () => { 
  setShowConfirm(true)
 }
//cancel button
const cancelHandler = (e) => { 
  e.stopPropagation()
  setShowConfirm(false)
 }
//Yes button
const yesHandler = () => { 
//  ctx.clearCart()
ctx.cartDispatch({type:'CLEAR'})
 }

  return (
    <Backdrop >
      {showConfirm && <Confirm onCancel={cancelHandler} onYes={yesHandler} confirmText ={'Do you want to empty your shopping cart?'}/>}
      <div className={style.CartDetails} onClick={e=>e.stopPropagation()}>
        <header className={style.Header}>
          <h2 className={style.Title}>Your Items</h2>
          <span onClick={showConfirmHandler}>🗑️ Empty your Cart</span>
        </header>
        <div className={style.CartList}>
          {ctx.item.map(item =>
          <DrinkItem noDesc key={item.id} drink={item} />)}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
