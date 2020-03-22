import React, { Component } from "react";
import { connect } from "react-redux";
import "./ShoppingCart.css";
import CartSum from "../CartSum/CartSum";
import { Row, Col, Table, Button, InputNumber, message } from "antd";
import { ReloadOutlined, CloseOutlined } from "@ant-design/icons";
import * as actionTypes from "./../../store/actionTypes";

const { Column } = Table;

class ShoppingCart extends Component {

  handleAddProduct = () => {
    if (this.props.cart.length < 5) {
      this.props.addProduct();
      this.props.handleCartTotal();
    } else this.handleWarning();
  };

  handleWarning = () => {
    message.warning("Uuups! Nie mamy więcej produktów!");
  };

  render() {
    return (
      <>
        <Row>
          <div className="products-list">
            <Table
              renderEmpty={false}
              pagination={false}
              dataSource={this.props.cart}
            >
              <Column
                className="picture-column"
                title=""
                dataIndex="picture"
                key="picture"
                render={picture => <img alt="kawa" src={picture} />}
              />
              <Column title="Produkt" dataIndex="name" key="product" />
              <Column
                title="Ilość"
                dataIndex="amount"
                key="amount"
                render={(text, record) => (
                  <InputNumber
                    size="small"
                    min={1}
                    max={10}
                    defaultValue={record.amount}
                    onChange={value => this.props.changeAmount(record, value)}
                  />
                )}
              />
              <Column
                className="total-price"
                title="Suma"
                dataIndex="totalPrice"
                key="price"
              />
              <Column
              className="delete-column"
                title=""
                key="delete"
                render={record => (
                  <Button
                    className={"delete-row-button"}
                    onClick={() => this.props.deleteRow(record)}
                  >
                    <CloseOutlined />
                  </Button>
                )}
              />
            </Table>
          </div>
        </Row>
        <Row className="buttons-row">
          <Col xs={24} md={16}>
            <div className="handle-products-buttons">
              <Button className="add-product" onClick={this.handleAddProduct}>
                Dodaj produkt
              </Button>
              <Button
                className="reset-products"
                onClick={this.props.handleReset}
              >
                Zresetuj koszyk
              </Button>
              <Button
                className="add-product"
                onClick={this.props.handleCartTotal}
              >
                Przelicz wszystko <ReloadOutlined />
              </Button>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <CartSum cartTotal={this.props.cartTotal} />
          </Col>
        </Row>
      </>
    );
  }
}

// REDUX
const mapStateToProps = state => {
  return {
    products: state.shoppingCartReducer.products,
    cart: state.shoppingCartReducer.cart,
    cartTotal: state.shoppingCartReducer.cartTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: () => dispatch({ type: actionTypes.ADD_PRODUCT }),
    changeAmount: (record, value) =>
      dispatch({
        type: actionTypes.CHANGE_AMOUNT_PRODUCT,
        payload: { record: record, value: value }
      }),
    handleCartTotal: () => dispatch({ type: actionTypes.CART_TOTAL }),
    deleteRow: record =>
      dispatch({ type: actionTypes.REMOVE_PRODUCT, record: record }),
    handleReset: () => dispatch({ type: actionTypes.CART_RESET })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
