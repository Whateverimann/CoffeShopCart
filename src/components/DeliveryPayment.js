import React, { Component } from "react";
import { Row, Col, Radio, Typography, Button } from "antd";
import "./DeliveryPayment.css";

const { Text } = Typography;

class DeliveryPayment extends Component {
  state = {
    deliveryValue: 1,
    paymentValue: 1,
    cartTotalDelivery: "",
    paczkomat: ""
  };

  prices = {
    courierPrice: 14.99,
    postPrice: 9.99,
    paczkomatPrice: 8.99,
    cashOnDelivery: 9.99,
    cashTransfer: "0.00"
  };

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getPoint = point => {
    if (window.point) {
      this.setState({
        paczkomat: window.point.name
      });
    }
  };

  handleChangePoint = () => {
    this.getPoint();
    this.setState({
      paczkomat: ""
    });
  };

  render() {
    return (
      <Row className="custom-row">
        <Col className="custom-col delivery-col" xs={24} md={12}>
          <Text className="custom-title">Delivery options:</Text>
          <Radio.Group
            name="deliveryValue"
            onChange={this.onChange}
            value={this.state.deliveryValue}
          >
            <Radio className="custom-radio" value={1}>
              Kurier AtYourDoor{" "}
              <span className="price-style">{this.prices.courierPrice}</span>
            </Radio>
            <Radio className="custom-radio" value={2}>
              Poczta Polska{" "}
              <span className="price-style">{this.prices.postPrice}</span>
            </Radio>
            <Radio className="custom-radio" value={3}>
              Paczkomaty{" "}
              <span className="price-style">{this.prices.paczkomatPrice}</span>
            </Radio>
          </Radio.Group>
          {this.state.paczkomat ? (
            <div className="paczkomaty-map">
              <p>Wybrałeś paczkomat: {this.state.paczkomat}</p>
              <Button onClick={this.handleChangePoint} className="add-product">
                Zmień paczkomat
              </Button>
            </div>
          ) : (
            <div className="paczkomaty-map" onClick={this.getPoint}>
              {this.state.deliveryValue === 3 ? (
                <div id="easypack-map"></div>
              ) : null}
            </div>
          )}
        </Col>
        <Col className="custom-col delivery-col" xs={24} md={12}>
          <Text className="custom-title">Payment options:</Text>
          <Radio.Group
            name="paymentValue"
            onChange={this.onChange}
            value={this.state.paymentValue}
          >
            <Radio className="custom-radio" value={1}>
              Cash on delivery{" "}
              <span className="price-style">{this.prices.cashOnDelivery}</span>
            </Radio>
            <Radio className="custom-radio" value={2}>
              Cash transfer{" "}
              <span className="price-style">{this.prices.cashTransfer}</span>
            </Radio>
          </Radio.Group>
          <Text className="custom-title total">Total:</Text>
        </Col>
      </Row>
    );
  }
}

export default DeliveryPayment;
