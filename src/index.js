import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import shoppingCartReducer from "./store/reducers/shoppingCartReducer";
import adressFormReducer from "./store/reducers/adressFormReducer";
import deliveryPaymentReducer from "./store/reducers/deliveryPaymentReducer";

const rootReducer = combineReducers({
  shoppingCartReducer: shoppingCartReducer,
  adressFormReducer: adressFormReducer,
  deliveryPaymentReducer: deliveryPaymentReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
