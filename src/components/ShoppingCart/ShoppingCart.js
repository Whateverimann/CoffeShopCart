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
    console.log(this.props.cart);
    if (this.props.cart.length < 5) {
      return this.props.addProduct();
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
                className="update-cart-button"
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

//  handleAddProduct = () => {
//     const cart = [...this.state.cart];
//     let products = [...this.state.products];

//     if (cart.length < 5) {
//       const index = Math.floor(Math.random() * products.length);
//       const product = products[index];

//       products = products.filter(p => p.key !== product.key);
//       cart.push(product);

//       this.setState({
//         cart,
//         products
//       });
//     } else this.handleWarning();
//   };

//   changeAmount = (record, value) => {
//     const cart = [...this.state.products];

//     cart.forEach(product => {
//       if (product.key === record.key) {
//         product.amount = value;
//         product.totalPrice = (product.amount * product.price).toFixed(2);
//         product.totalPrice = product.totalPrice * 1;
//       }
//     });
//     this.setState({
//       cart
//     });
//   };

//   handleCartTotal = () => {
//     const cart = [...this.state.cart];
//     let total = 0;

//     for (let i = 0; i < cart.length; i++) {
//       total += cart[i].totalPrice;
//     }
//     total = total.toFixed(2);

//     this.setState({
//       cartTotal: total
//     });
//   };

//   deleteRow = record => {
//     let cart = [...this.state.cart];
//     let products = [...this.state.products];

//     const product = cart.find(product => product.key === record.key);
//     cart = cart.filter(product => product.key !== record.key);

//     products = products.concat(product);
//     this.setState({
//       cart,
//       products
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       cart: [],
//       cartTotal: "",
//       products: [
//         {
//           key: 0,
//           name: "Barista Espresso 0,5kg",
//           amount: 1,
//           price: 38.99,
//           totalPrice: 38.99,
//           picture: picture1
//         },
//         {
//           key: 1,
//           name: "Barista Caffe Crema 0,5kg",
//           amount: 1,
//           price: 40.99,
//           totalPrice: 40.99,
//           picture: picture2
//         },
//         {
//           key: 2,
//           name: "Privat Kaffe African Blue 0,5kg",
//           amount: 1,
//           price: 44.99,
//           totalPrice: 44.99,
//           picture: picture3
//         },
//         {
//           key: 3,
//           name: "Espresso Milano Style 0,5kg",
//           amount: 1,
//           price: 39.99,
//           totalPrice: 39.99,
//           picture: picture4
//         },
//         {
//           key: 4,
//           name: "Espresso Sicilia Style 0,5kg",
//           amount: 1,
//           price: 41.99,
//           totalPrice: 41.99,
//           picture: picture5
//         }
//       ]
//     });
//   };

