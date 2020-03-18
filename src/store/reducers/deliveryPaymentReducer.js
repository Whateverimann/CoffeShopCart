import * as actionTypes from "./../actionTypes";

const initialState = {
  deliveryValue: 1,
  paymentValue: 1,
  cartTotalDelivery: "",
  paczkomat: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DELIVERY_PAYMENT_VALUES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case actionTypes.SET_POINT:
          return {
        ...state,
        paczkomat: action.selectedPoint.name
      };

    //    case actionTypes.ORDER_TOTAL:
    //       return {
    //     ...state,
    //     cartTotalDelivery: action.selectedPoint.name
    //   };
    default:
      return state;
  }
};

export default reducer;
