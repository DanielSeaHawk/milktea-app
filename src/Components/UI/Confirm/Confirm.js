import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import style from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    <Backdrop onClick={props.onCancel} className={style.ConfrimOuter}>
      <div className={style.ConfirmBox}>
        <p className={style.ConfirmText}>{props.confirmText}</p>
        <div>
          <button
            onClick={(e) => {
              props.onYes(e);
            }}
            className={style.Yes}
          >
            Yes
          </button>
          <button
            onClick={(e) => {
              props.onCancel(e);
            }}
            className={style.Cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
