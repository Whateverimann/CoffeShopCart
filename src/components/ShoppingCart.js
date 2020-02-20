import React, { Component } from "react";
import "./ShoppingCart.css";
import { Row, Col, Table, Button, InputNumber } from "antd";

const { Column } = Table;

class ShoppingCart extends Component {
  state = {
    products: []
  };

  handleAddProduct = () => {
    const key = Math.floor(Math.random() * this.props.data.length);
    const product = this.props.data.find(product => product.key === key);
    console.log(product);
    const products = [...this.state.products];

    // miejsce na warunek?!?!?!??!?!?!??!?!

    products.push(product);
    this.setState({
      products
    });
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
