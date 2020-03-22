import * as actionTypes from "./../actionTypes";

const initialState = {
  values: [
    { name: "" },
    { lastName: "" },
    { email: "" },
    { phone: 0 },
    { adress: "" },
    { city: "" },
    { zip: "" },

    { companyname: "" },
    { NIP: "" },
    { companyEmail: "" },
    { companyPhone: 0 },
    { companyAdress: "" },
    { companyCity: "" },
    { companyZip: "" }
  ],
  invoiceNeeded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_CHECKBOX:
      return {
        ...state,
        invoiceNeeded: action.event.target.checked
      };
    case actionTypes.ADD_FORM_VALUES:
      return {
        ...state,
        values: action.values
      };
    default:
      return state;
  }
};

export default reducer;
