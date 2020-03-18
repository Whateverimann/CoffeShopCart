import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionTypes";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AdressForm from "./components/AdressForm/AdressForm";
import DeliveryPayment from "./components/DeliveryPayment/DeliveryPayment";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Koszyk",
    content: <ShoppingCart />
  },
  {
    title: "Twoje dane",
    content: <AdressForm />
  },
  {
    title: "Dostawa i płatność",
    content: <DeliveryPayment />
  }
];

class App extends Component {
  state = {
    current: 0
  };

  next() {
    this.props.handleCartTotal();
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const current = this.state.current;
    return (
      <div className="form-container">
        <Steps className="ant-steps-label-vertical" current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button
              className="next-button"
              disabled={!this.props.cart.length}
              onClick={() => this.next()}
            >
              Dalej
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
           
              className="next-button"
              disabled={this.state.disabled}
              onClick={() =>
                message.success("Dziękujemy za zakupy! Zapraszamy ponownie ;)")
              }
            >
              Koniec!
            </Button>
          )}
          {current > 0 && (
            <Button className="previous-button" onClick={() => this.prev()}>
              Powrót
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.shoppingCartReducer.cart,
    cartTotal: state.shoppingCartReducer.cartTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCartTotal: () => dispatch({ type: actionTypes.CART_TOTAL })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);