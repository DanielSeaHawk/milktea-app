import React, { useEffect, useState } from "react";
import style from "./FilterDrinks.module.css";

const FilterDrinks = (props) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    //get input and delete space
    setKeyword(e.target.value.toLowerCase().trim());
  };
//Reduce the number of requests sent to the server
  useEffect(() => {
   const timer= setTimeout(() => {
      props.onFilter(keyword);
    },1000);
    return(()=>{
   clearTimeout(timer)     
    })
  
  }, [keyword, props]);

  
  return (
    <div className={style.FilterDrinks}>
      <div className={style.InputOuter}>
        <input
          value={keyword}
          onChange={inputChangeHandler}
          className={style.SearchInput}
          type="text"
          placeholder={"Search"}
        />
        <span className={style.Icon}>🔍</span>
      </div>
    </div>
  );
};

export default FilterDrinks;
