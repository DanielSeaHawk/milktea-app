import React, { useReducer, useState } from "react";
import Drinks from "./Components/Drinks/Drinks";
import CartContext from "./Components/Store/Cart.context";
import FilterDrinks from "./Components/FilterDrinks/FilterDrinks";
import Cart from "./Components/Cart/Cart";

const DRINKS_DATA = [
  {
    id: "1",
    title: "Taro Milk Tea",
    desc: " A boba-fan favorite! Classic taro made with black tea and served with delicious boba.",
    price: 7.5,
    img: "/img/drinks/1.jpeg",
  },
  {
    id: "2",
    title: "Mocha Milk Tea",
    desc: "Macha lovers, this drink s for you! Our Macha Milk Tea is made with green tea and served with delicios boba.",
    price: 8.5,
    img: "/img/drinks/2.jpeg",
  },
  {
    id: "3",
    title: "Brown Sugar Milk Tea",
    desc: "Our home-made brown sugar syrup is a customer favorite! Try it with cold brew and coffee jelly for a coffee twist!",
    price: 6.75,
    img: "/img/drinks/3.jpeg",
  },
  {
    id: "4",
    title: "Mango Milk Tea",
    desc: "This tasty drink is sure to satisfy your sweet tooth!",
    price: 5.5,
    img: "/img/drinks/4.jpeg",
  },
  {
    id: "5",
    title: "Coffee Milk Tea",
    desc: "Love coffee? Love boba? We got you! Our classic milk tea topped with cold brew.",
    price: 6.25,
    img: "/img/drinks/5.jpeg",
  },
  {
    id: "6",
    title: "Claasic Milk Tea",
    desc: "Our Classic Milk Tea is made with black tea and is served with delicious boba.",
    price: 7,
    img: "/img/drinks/6.jpeg",
  },
  {
    id: "7",
    title: "Hokkaido Caramel Milk Tea",
    desc: "Made with black tea & drizzled with delicious caramel, this drink is sure to satisfy your sweet tooth.",
    price: 7.25,
    img: "/img/drinks/7.jpeg",
  },
  {
    id: "8",
    title: "Choclate Milk Tea",
    desc: "Choclate and cookies? Yes, please! Our customers describe this drink as a sweet dessert.",
    price: 7.75,
    img: "/img/drinks/8.jpeg",
  },
];

const cartReducer = (state, action) => {
  //shallow copy
  const newCart = { ...state };
  switch (action.type) {
    //add item to cart
    case "ADD":
      if (newCart.item.indexOf(action.drink) === -1) {
        newCart.item.push(action.drink);
        action.drink.amount = 1;
      } else {
        action.drink.amount += 1;
      }
      newCart.totalAmount += 1;
      newCart.totalPrice += action.drink.price;
      return newCart;
    case "REMOVE":
      action.drink.amount -= 1;
      if (action.drink.amount === 0) {
        newCart.item.splice(newCart.item.indexOf(action.drink), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.drink.price;
      return newCart;
    case "CLEAR":
      newCart.item.forEach((item) => delete item.amount);
      newCart.item = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
    default:
      return newCart;
  }
};

const App = () => {
  const [drinksData, setDrinksData] = useState(DRINKS_DATA);
  // const [cartData, setCartData] = useState({
  //   item: [],
  //   totalAmount: 0,
  //   totalPrice: 0,
  // });
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    item: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const filterHandler = (keyword) => {
    //search keyword
    const newDrinkData = DRINKS_DATA.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      return lowerCaseTitle.includes(keyword);
    });
    setDrinksData(newDrinkData);
  };

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <div>
        <FilterDrinks onFilter={filterHandler} />
        <Drinks drinksData={drinksData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default App;
