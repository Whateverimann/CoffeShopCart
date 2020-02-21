import React, { Component } from "react";
import "./ShoppingCart.css";
import { Row, Col, Table, Button, InputNumber, message } from "antd";
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
  };

  handleWarning = () => {
    message.warning("Oops! We don't have more products!");
  };

  handleAddProduct = () => {
    const products = [...this.state.products];
    let data = [...this.state.data];

    if (products.length < 5) {
      const key = Math.floor(Math.random() * data.length);
      const product = data.find(product => product.key === key);
      
      const hasMatch = Boolean(
        products.find(p => {
          return p.key === key;
        })
      );
      //   console.log(hasMatch);
      if (!hasMatch) {
        products.push(product);
      } else return null;

    //   data.splice(key, 1);

      this.setState({
        products,
        data
      });
    } else this.handleWarning();
  };

  handleReset = () => {
    this.setState({
      products: []
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs={24} md={16}>
            <div>
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
                  key={this.state.products.key}
                  render={() => (
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={this.changeAmount}
                      //onChange={(event) => this.changeAmount(event, this.state.products.key)}
                    />
                  )}
                />
                <Column title="Price" dataIndex="totalPrice" key="price" />
                <Column
                  title=""
                  key="action"
                  render={(text, record) => (
                    <span>
                      <button>X</button>
                    </span>
                  )}
                />
              </Table>

              <Button onClick={this.handleAddProduct}>Add Product</Button>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          </Col>
          <Col xs={24} md={8}>
            col-12
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingCart;
