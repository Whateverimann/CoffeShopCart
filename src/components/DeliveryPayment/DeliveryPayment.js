import React, { Component } from "react";
import { Row, Col, Radio, Typography, Divider } from "antd";
import "./DeliveryPayment.css";
import { connect } from "react-redux";
import * as actionTypes from "./../../store/actionTypes";

const { Text } = Typography;

class DeliveryPayment extends Component {
  state = {
    cost: "14.99 zł"
  };

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (target.value === 2) {
      window.easyPack.mapWidget("easypack-map", function(point) {
        window.point = point;
      });
    }

    this.props.setValues(name, value);
    this.props.handleOrderTotal(this.props.cartTotal);
    this.handleDeliveryCost(e);
  };

  componentDidMount() {
    this.props.handleOrderTotal(this.props.cartTotal);

    window.easyPackAsyncInit = function() {
      window.easyPack.init({
        points: {
          types: ["parcel_locker"],
          functions: ["parcel_collect"]
        },
        map: {
          initialTypes: ["parcel_locker"]
        }
      });
    };

    if (this.props.deliveryValue === 2) {
      window.easyPack.mapWidget("easypack-map", function(point) {
        window.point = point;
      });
    }
  }

  getPoint = point => {
    if (window.point) {
      const selectedPoint = window.point;
      return this.props.setPoint(selectedPoint);
    }
  };

  handleDeliveryCost = e => {
    let cost = this.state.cost;
    if (e.target.value === 0) {
      cost = "14.99 zł";
    } else if (e.target.value === 1) {
      cost = "9.99 zł";
    } else {
      cost = "8.99 zł";
    }
    this.setState({
      cost: cost
    });
  };

  render() {
    return (
      <Row className="custom-row">
        <Col className="delivery-col" xs={24} md={12}>
          <Text className="custom-title">Opcje dostawy:</Text>
          <Radio.Group
            name="deliveryValue"
            onChange={this.onChange}
            value={this.props.deliveryValue}
          >
            <Radio className="custom-radio" value={0}>
              Kurier AtYourDoor <span className="price-style">14.99 zł</span>
            </Radio>
            <Radio className="custom-radio" value={1}>
              Poczta Polska <span className="price-style">9.99 zł</span>
            </Radio>
            <Radio className="custom-radio" value={2}>
              Paczkomaty <span className="price-style">8.99 zł</span>
            </Radio>
          </Radio.Group>
          {this.props.paczkomat && this.props.deliveryValue === 2 ? (
            <div className="center-div">
              <Text className="custom-text">
                Wybrałeś paczkomat:{" "}
                <span className="point">{this.props.paczkomat}</span>
              </Text>
            </div>
          ) : null}
          <div className="paczkomaty-map" onClick={this.getPoint}>
            {this.props.deliveryValue === 2 ? (
              <div id="easypack-map"></div>
            ) : null}
          </div>
        </Col>
        <Col className="payment-col" xs={24} md={12}>
          <Text className="custom-title">Opcje płatności:</Text>
          <Radio.Group
            name="paymentValue"
            onChange={this.onChange}
            value={this.props.paymentValue}
          >
            <Radio className="custom-radio" value={3}>
              Płatność za pobraniem <span className="price-style">9.99 zł</span>
            </Radio>
            <Radio className="custom-radio" value={4}>
              Płatność przelewem <span className="price-style">0.00 zł</span>
            </Radio>
          </Radio.Group>
          <div className="summary-div">
            <p>
              Wartość koszyka: <strong>{this.props.cartTotal} zł</strong>
            </p>
            <p>
              Koszt dostawy: <strong>{this.state.cost}</strong>
            </p>
            <p>
              Koszt płatności:{" "}
              <strong>
                {this.props.paymentValue === 3 ? "9.99 zł" : "0.00 zł"}
              </strong>
            </p>
            <Divider />
            <Text className="custom-title total">
              Razem do zapłaty: <br />
              <span className="price-style">{this.props.orderTotal} zł</span>
            </Text>
          </div>
        </Col>
      </Row>
    );
  }
}

// REDUX
const mapStateToProps = state => {
  return {
    deliveryValue: state.deliveryPaymentReducer.deliveryValue,
    paymentValue: state.deliveryPaymentReducer.paymentValue,
    paczkomat: state.deliveryPaymentReducer.paczkomat,
    cartTotal: state.shoppingCartReducer.cartTotal,
    orderTotal: state.deliveryPaymentReducer.orderTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValues: (name, value) =>
      dispatch({
        type: actionTypes.SET_DELIVERY_PAYMENT_VALUES,
        payload: { name: name, value: value }
      }),
    setPoint: selectedPoint =>
      dispatch({
        type: actionTypes.SET_POINT,
        selectedPoint: selectedPoint
      }),
    handleOrderTotal: cartTotal =>
      dispatch({ type: actionTypes.ORDER_TOTAL, cartTotal: cartTotal })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPayment);
