import React, { Component } from "react";
import "./ShoppingCart.css";
import CartSum from "./CartSum";
import { Row, Col, Table, Button, InputNumber, message, Icon } from "antd";
import picture1 from "../images/baristaespresso.jpg";
import picture2 from "../images/baristacaffecrema.jpg";
import picture3 from "../images/privatkaffeeafricanblue.jpg";
import picture4 from "../images/espressomilanostyle.jpg";
import picture5 from "../images/espressosiciliastyle.jpg";

const { Column } = Table;

class ShoppingCart extends Component {
  state = {
    products: [],
    data: [
      {
        key: 0,
        name: "Barista Espresso 0,5kg",
        amount: 1,
        price: 38.99,
        totalPrice: 38.99,
        picture: picture1
      },
      {
        key: 1,
        name: "Barista Caffe Crema 0,5kg",
        amount: 1,
        price: 40.99,
        totalPrice: 40.99,
        picture: picture2
      },
      {
        key: 2,
        name: "Privat Kaffe African Blue 0,5kg",
        amount: 1,
        price: 44.99,
        totalPrice: 44.99,
        picture: picture3
      },
      {
        key: 3,
        name: "Espresso Milano Style 0,5kg",
        amount: 1,
        price: 39.99,
        totalPrice: 39.99,
        picture: picture4
      },
      {
        key: 4,
        name: "Espresso Sicilia Style 0,5kg",
        amount: 1,
        price: 41.99,
        totalPrice: 41.99,
        picture: picture5
      }
    ]
  };

  handleWarning = () => {
    message.warning("Oops! We don't have more products!");
  };

  handleAddProduct = () => {
    const products = [...this.state.products];
    let data = [...this.state.data];

    if (products.length < 5) {
      const index = Math.floor(Math.random() * data.length);
      const product = data[index];

      data = data.filter(p => p.key !== product.key);
      products.push(product);

      this.setState({
        products,
        data
      });
    } else this.handleWarning();
  };

  changeAmount = (record, value) => {
    const products = [...this.state.products];

    products.forEach(product => {
      if (product.key === record.key) {
        product.amount = value;
        product.totalPrice = (product.amount * product.price).toFixed(2);
      }
    });
    this.setState({
      products
    });
  };

  deleteRow = record => {
    let products = [...this.state.products];
    products = products.filter(product => product.key !== record.key);
    this.setState({
      products
    });
  };

  handleReset = () => {
    this.setState({
      products: [],
      data: [
        {
          key: 0,
          name: "Barista Espresso 0,5kg",
          amount: 1,
          price: 38.99,
          totalPrice: 38.99,
          picture: picture1
        },
        {
          key: 1,
          name: "Barista Caffe Crema 0,5kg",
          amount: 1,
          price: 40.99,
          totalPrice: 40.99,
          picture: picture2
        },
        {
          key: 2,
          name: "Privat Kaffe African Blue 0,5kg",
          amount: 1,
          price: 44.99,
          totalPrice: 44.99,
          picture: picture3
        },
        {
          key: 3,
          name: "Espresso Milano Style 0,5kg",
          amount: 1,
          price: 39.99,
          totalPrice: 39.99,
          picture: picture4
        },
        {
          key: 4,
          name: "Espresso Sicilia Style 0,5kg",
          amount: 1,
          price: 41.99,
          totalPrice: 41.99,
          picture: picture5
        }
      ]
    });
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={24} md={16}>
            <div className="products-list">
              <Table pagination={false} dataSource={this.state.products}>
                <Column
                  title=""
                  dataIndex="picture"
                  key="picture"
                  render={picture => <img alt="kawa" src={picture} />}
                />
                <Column title="Product" dataIndex="name" key="product" />
                <Column
                  title="Amount"
                  dataIndex="amount"
                  key="amount"
                  render={(text, record) => (
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={value => this.changeAmount(record, value)}
                    />
                  )}
                />
                <Column title="Price" dataIndex="totalPrice" key="price" />
                <Column
                  title=""
                  key="delete"
                  render={record => (
                    <Button onClick={() => this.deleteRow(record)}>
                      <Icon type="close" />
                    </Button>
                  )}
                />
              </Table>
              <div className="handle-products-buttons">
                <Button className="add-product" onClick={this.handleAddProduct}>
                  Add Product
                </Button>
                <Button className="reset-products" onClick={this.handleReset}>
                  Reset Cart
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <CartSum />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingCart;
