import * as actionTypes from "./../actionTypes";
import picture1 from "../../images/baristaespresso.jpg";
import picture2 from "../../images/baristacaffecrema.jpg";
import picture3 from "../../images/privatkaffeeafricanblue.jpg";
import picture4 from "../../images/espressomilanostyle.jpg";
import picture5 from "../../images/espressosiciliastyle.jpg";

const initialState = {
  cart: [],
  cartTotal: "",
  products: [
    {
      key: 0,
      name: "Barista Espresso 0,5kg",
      amount: 1,
      price: 38.99,
      totalPrice: 38.99,
      picture: picture1
    },
    {
      key: 1,
      name: "Barista Caffe Crema 0,5kg",
      amount: 1,
      price: 40.99,
      totalPrice: 40.99,
      picture: picture2
    },
    {
      key: 2,
      name: "Privat Kaffe African Blue 0,5kg",
      amount: 1,
      price: 44.99,
      totalPrice: 44.99,
      picture: picture3
    },
    {
      key: 3,
      name: "Espresso Milano Style 0,5kg",
      amount: 1,
      price: 39.99,
      totalPrice: 39.99,
      picture: picture4
    },
    {
      key: 4,
      name: "Espresso Sicilia Style 0,5kg",
      amount: 1,
      price: 41.99,
      totalPrice: 41.99,
      picture: picture5
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      const index = Math.floor(Math.random() * state.products.length);
      const product = state.products[index];
      return {
        ...state,
        cart: state.cart.concat(product),
        products: state.products.filter(p => p.key !== product.key)
      };

    case actionTypes.CHANGE_AMOUNT_PRODUCT:
      const cart = [...state.cart];
      cart.forEach(product => {
        if (product.key === action.payload.record.key) {
          product.amount = action.payload.value;
          product.totalPrice = (product.amount * product.price).toFixed(2);
          product.totalPrice = product.totalPrice * 1;
        }
      });
      return {
        ...state,
        cart: cart
      };

    case actionTypes.CART_TOTAL:
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        total += state.cart[i].totalPrice;
      }
      total = total.toFixed(2);
      return {
        ...state,
        cartTotal: total
      };

    case actionTypes.REMOVE_PRODUCT:
      const removedProduct = state.cart.find(
        product => product.key === action.record.key
      );
      return {
        ...state,
        cart: state.cart.filter(product => product.key !== removedProduct.key),
        products: state.products.concat(removedProduct)
      };

    case actionTypes.CART_RESET:
      return {
        cart: [],
        cartTotal: "",
        products: [
          {
            key: 0,
            name: "Barista Espresso 0,5kg",
            amount: 1,
            price: 38.99,
            totalPrice: 38.99,
            picture: picture1
          },
          {
            key: 1,
            name: "Barista Caffe Crema 0,5kg",
            amount: 1,
            price: 40.99,
            totalPrice: 40.99,
            picture: picture2
          },
          {
            key: 2,
            name: "Privat Kaffe African Blue 0,5kg",
            amount: 1,
            price: 44.99,
            totalPrice: 44.99,
            picture: picture3
          },
          {
            key: 3,
            name: "Espresso Milano Style 0,5kg",
            amount: 1,
            price: 39.99,
            totalPrice: 39.99,
            picture: picture4
          },
          {
            key: 4,
            name: "Espresso Sicilia Style 0,5kg",
            amount: 1,
            price: 41.99,
            totalPrice: 41.99,
            picture: picture5
          }
        ]
      };
    default:
      return state;
  }
};

export default reducer;
