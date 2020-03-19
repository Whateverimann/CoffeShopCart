import * as actionTypes from "./../actionTypes";

const initialState = {
  deliveryValue: 0,
  paymentValue: 3,
  orderTotal: 0,
  paczkomat: ""
};

const prices = [
  { id: 0, price: 14.99 },
  { id: 1, price: 9.99 },
  { id: 2, price: 8.99 },
  { id: 3, price: 9.99 },
  { id: 4, price: 0 }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DELIVERY_PAYMENT_VALUES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case actionTypes.SET_POINT:
      return {
        ...state,
        paczkomat: action.selectedPoint.name
      };

    case actionTypes.ORDER_TOTAL:
      const orderTotal =
        action.cartTotal * 1 +
        prices[state.deliveryValue].price +
        prices[state.paymentValue].price;
      return {
        ...state,
        orderTotal: orderTotal.toFixed(2)
      };
    default:
      return state;
  }
};

export default reducer;
