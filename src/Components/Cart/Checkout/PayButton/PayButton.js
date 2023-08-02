import React from 'react'
import style from './PayButton.module.css'

const PayButton = (props) => {
  return (
    <div className={style.PayButton}>
        <div className={style.TotalPrice}>{props.totalPrice}</div>
        <button className={style.Button}>Pay</button>
    </div>
  )
}

export default PayButton