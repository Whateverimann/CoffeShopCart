import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./ShoppingCart";
import Adress from "./Adress";
import DeliveryPayment from "./DeliveryPayment";
import { Steps, Button, message } from "antd";
import picture1 from "../images/baristaespresso.jpg";
import picture2 from "../images/baristacaffecrema.jpg";
import picture3 from "../images/privatkaffeeafricanblue.jpg";
import picture4 from "../images/espressomilanostyle.jpg";
import picture5 from "../images/espressosiciliastyle.jpg";

const { Step } = Steps;

const data = [
      {
        key: 0,
        name: "Barista Espresso 0,5kg",
        amount: 1,
        price: 38.99,
        totalPrice: 0,
        picture: picture1
      },
      {
        key: 1,
        name: "Barista Caffe Crema 0,5kg",
        amount: 1,
        price: 40.99,
        totalPrice: 0,
        picture: picture2
      },
      {
        key: 2,
        name: "Privat Kaffe African Blue 0,5kg",
        amount: 1,
        price: 44.99,
        totalPrice: 0,
        picture: picture3
      },
      {
        key: 3,
        name: "Espresso Milano Style 0,5kg",
        amount: 1,
        price: 39.99,
        totalPrice: 0,
        picture: picture4
      },
      {
        key: 4,
        name: "Espresso Sicilia Style 0,5kg",
        amount: 1,
        price: 41.99,
        totalPrice: 0,
        picture: picture5
      }
    ]

const steps = [
  {
    title: "Shopping cart",
    content: <ShoppingCart data={data} />
  },
  {
    title: "Adress",
    content: <Adress />
  },
  {
    title: "Delivery & payment",
    content: <DeliveryPayment />
  }
];

class App extends Component {
  state = {
    current: 0
  };

  next() {
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
          {current > 0 && (
            <Button className="previous-button" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className="next-button" type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button className="next-button"
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
