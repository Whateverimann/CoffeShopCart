import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionTypes";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AdressForm from "./components/AdressForm/AdressForm";
import DeliveryPayment from "./components/DeliveryPayment/DeliveryPayment";
import { Steps, Button, Modal, message } from "antd";
import { ReloadOutlined, SmileOutlined } from "@ant-design/icons";

const { Step } = Steps;

class App extends Component {
  state = {
    current: 0,
    visible: false
  };

  steps = [
    {
      title: "Koszyk",
      content: <ShoppingCart />
    },
    {
      title: "Twoje dane",
      content: <AdressForm addressForm={ref => (this.child = ref)} />
    },
    {
      title: "Dostawa i płatność",
      content: <DeliveryPayment />
    }
  ];

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ visible: false });
  };
  handleBack = () => {
    this.setState({ current: 0, visible: false });
    window.location.reload(false);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  next() {
    if (this.state.current === 0) {
      if (!this.props.cart.length) {
        return message.warning("Dodaj produkt!");
      } else {
        this.props.handleCartTotal();
        const current = this.state.current + 1;
        this.setState({ current });
      }
    } else if (this.state.current === 1) {
      this.child.formRef.current
        .validateFields()
        .then(values => {
          this.props.onFinish(values);
          const current = this.state.current + 1;
          this.setState({ current });
        })
        .catch(errorInfo => {
          return message.error("Wypełnij formularz!");
        });
    } else {
      const current = this.state.current + 1;
      this.setState({ current });
    }
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
          {this.steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{this.steps[current].content}</div>
        <div className="steps-action">
          {current < this.steps.length - 1 && (
            <Button
              className="next-button"
              // disabled={!this.props.cart.length}
              onClick={() => this.next()}
            >
              Dalej
            </Button>
          )}
          {current === this.steps.length - 1 && (
            <Button className="next-button" onClick={this.showModal}>
              Zamów i zapłać!
            </Button>
          )}
          {current > 0 && (
            <Button className="previous-button" onClick={() => this.prev()}>
              Powrót
            </Button>
          )}
        </div>
        <Modal
          visible={this.state.visible}
          title="Dziękujemy za zakupy!"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="back"
              className="previous-button"
              onClick={this.handleBack}
            >
              Jeszcze raz! <ReloadOutlined />
            </Button>,
            <Button
              key="submit"
              className="previous-button"
              onClick={this.handleOk}
            >
              Ok!
            </Button>
          ]}
        >
          <p>
            Nie martw się! Kawa zaraz dotrze! <SmileOutlined />
          </p>
        </Modal>
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
    handleCartTotal: () => dispatch({ type: actionTypes.CART_TOTAL }),
    onFinish: values =>
      dispatch({
        type: actionTypes.ADD_FORM_VALUES,
        values: values
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
