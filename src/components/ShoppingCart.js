import React, {Component}from "react";
import { Row, Col } from "antd";

class ShoppingCart extends Component {
  state = {
    products: [
      { key: 1, name: "Barista Espresso 0,5kg", amount: 0, price: 38.99, picture: "" },
      {
        key: 2,
        name: "Barista Caffe Crema 0,5kg",
        amount: 0,
        price: 40.99,
        picture: ""
      },
      {
        key: 3,
        name: "Privat Kaffe African Blue 0,5kg",
        amount: 0,
        price: 44.99,
        picture: ""
      },
      {
        key: 4,
        name: "Espresso Milano Style 0,5kg",
        amount: 0,
        price: 39.99,
        picture: ""
      },
      {
        key: 5,
        name: "Espresso Sicilia Style 0,5kg",
        amount: 0,
        price: 41.99,
        picture: ""
      }
    ]
  };

const columns = [
  {
    title: 'Picture',
    dataIndex: 'picture',
    key: 'picture',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

  render() {
    return (
      <div>
        <Row>
          <Col xs={24} md={12}>
            <div>
            
            </div>
          </Col>
          <Col xs={24} md={12}>
            col-12
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingCart;
