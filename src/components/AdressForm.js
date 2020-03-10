import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import "./AdressForm.css";

const InputGroup = Input.Group;

class AdressForm extends Component {
  formRef = React.createRef();

  state = {
    values: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      adress: "",
      city: "",
      zip: "",

      companyname: "",
      NIP: "",
      companyEmail: "",
      companyPhone: "",
      companyAdress: "",
      companyCity: "",
      companyZip: ""
    },
    invoiceNeeded: false
  };

  onFinish = values => {
    console.log(values);
    this.setState({
      values: values
    })
  };

  handleCheckbox = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState({
      [name]: checked
    });
  };

  render() {
    return (
      <>
        <Row className="custom-row">
          <Col className="custom-col" xs={24} md={12}>
            <Form name="adressForm" ref={this.formRef} onFinish={this.onFinish}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item name="lastName" rules={[{ required: true }]}>
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item name="email" rules={[{ required: true }]}>
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input addonBefore="+48" placeholder="Phone Number" />
              </Form.Item>

              <Form.Item name="adress" rules={[{ required: true }]}>
                <Input placeholder="Adress" />
              </Form.Item>

              <Form.Item>
                <InputGroup>
                  <Row gutter={10}>
                    <Col>
                      <Form.Item name="city" rules={[{ required: true }]}>
                        <Input placeholder="City" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item name="zip" rules={[{ required: true }]}>
                        <Input placeholder="Zip" />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Checkbox
            type="checkbox"
            name="invoiceNeeded"
            checked={this.state.invoiceNeeded}
            onChange={this.handleCheckbox}
          >
            Do you need an invoice for company?
          </Checkbox>
          <Col className="custom-col" xs={24} md={12}>
            <Form className={this.state.invoiceNeeded ? "visible" : "hidden"}>
              <Form.Item name="companyName">
                <Input placeholder="Company Name" />
              </Form.Item>

              <Form.Item name="NIP">
                <Input placeholder="NIP" />
              </Form.Item>

              <Form.Item name="email">
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item name="phone">
                <Input addonBefore="+48" placeholder="Phone Number" />
              </Form.Item>

              <Form.Item name="adress">
                <Input placeholder="Adress" />
              </Form.Item>

              <Form.Item>
                <InputGroup>
                  <Row gutter={10}>
                    <Col>
                      <Form.Item name="city">
                        <Input placeholder="City" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item name="zipCode">
                        <Input placeholder="Zip" />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default AdressForm;

// const name = e.target.name;
// const type = e.target.type;
// if (type === "text" || type === "email") {
//   const value = e.target.value;

//   this.setState({
//     [name]: value
//   });
// } else if (type === "checkbox") {
//   const checked = e.target.checked;
//   this.setState({
//     [name]: checked
//   });
// }
