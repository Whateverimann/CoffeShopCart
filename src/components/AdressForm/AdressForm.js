import React, { Component } from "react";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import "./AdressForm.css";
import { connect } from "react-redux";
import * as actionTypes from "./../../store/actionTypes";

const InputGroup = Input.Group;

class AdressForm extends Component {
  formRef = React.createRef();  

  componentDidMount() {
    this.formRef.current.setFieldsValue(this.props.values);
      }


  render() {
    return (
      <>
        <Form
          name="adressForm"
          onFinish={this.props.onFinish}
          ref={this.formRef}
        >
          <Row>
            <Col sx={24} md={12} className="custom-col">
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Imię jest wymagane."
                  },
                  {
                    type: "string",
                    message: "Niepoprawny format!"
                  }
                ]}
              >
                <Input placeholder="Imię" />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Nazwisko jest wymagane." },
                  {
                    type: "string",
                    message: "Niepoprawny format!"
                  }
                ]}
              >
                <Input placeholder="Nazwisko" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "E-mail jest wymagany." },
                  {
                    type: "email",
                    message: "Niepoprawny format e-mail!"
                  }
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Numer telefonu jest wymagany."
                  },
                  {
                    type: "regexp",
                    pattern: new RegExp(/^[0-8]{8,12}$/g),
                    message: "Niepoprawny format!"
                  }
                ]}
              >
                <Input
                  addonBefore="+48"
                  placeholder="Numer telefonu"
                  type="number"
                />
              </Form.Item>

              <Form.Item
                name="adress"
                rules={[{ required: true, message: "Adres jest wymagany." }]}
              >
                <Input placeholder="Adres" />
              </Form.Item>

              <Form.Item>
                <InputGroup>
                  <Row gutter={2} className="input-group-row">
                    <Col span={12}>
                      <Form.Item
                        name="city"
                        rules={[
                          { required: true, message: "Miasto jest wymagane." }
                        ]}
                      >
                        <Input placeholder="Miasto" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="zip"
                        rules={[
                          {
                            required: true,
                            message: "Kod pocztowy jest wymagane."
                          }
                        ]}
                      >
                        <Input placeholder="Kod pocztowy" />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
              </Form.Item>
              <Form.Item>
                <Checkbox
                  type="checkbox"
                  name="invoiceNeeded"
                  checked={this.props.invoiceNeeded}
                  onChange={this.props.handleCheckbox}
                >
                  Czy potrzebujesz faktury na firmę?
                </Checkbox>
              </Form.Item>
            </Col>
            <Col
              sx={24}
              md={12}
              className={
                this.props.invoiceNeeded ? "visible custom-col" : "hidden"
              }
            >
              <Form.Item
                name="companyName"
                rules={[
                  {
                    required: this.props.invoiceNeeded,
                    message: "Nazwa firmy jest wymagana."
                  }
                ]}
              >
                <Input placeholder="Nazwa firmy" />
              </Form.Item>

              <Form.Item
                name="NIP"
                rules={[
                  {
                    required: this.props.invoiceNeeded,
                    message: "NIP jest wymagane."
                  },
                  {
                    type: "regexp",
                    pattern: new RegExp(/^[0-9]{10}$/g),
                    message: "Niepoprawny format!"
                  }
                ]}
              >
                <Input placeholder="NIP" type="number" />
              </Form.Item>

              <Form.Item
                name="companyEmail"
                rules={[
                  {
                    required: this.props.invoiceNeeded,
                    message: "E-mail jest wymagany."
                  },
                  {
                    type: "email",
                    message: "Niepoprawny format e-mail!"
                  }
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="companyPhone"
                rules={[
                  {
                    required: this.props.invoiceNeeded,
                    message: "Numer telefonu jest wymagany."
                  },
                  {
                    type: "regexp",
                    pattern: new RegExp(/^[0-8]{8,12}$/g),
                    message: "Niepoprawny format!"
                  }
                ]}
              >
                <Input addonBefore="+48" placeholder="Numer telefonu" />
              </Form.Item>

              <Form.Item
                name="companyAdress"
                rules={[
                  {
                    required: this.props.invoiceNeeded,
                    message: "Adres jest wymagany."
                  }
                ]}
              >
                <Input placeholder="Adres Firmy" />
              </Form.Item>

              <Form.Item>
                <InputGroup>
                  <Row gutter={2} className="input-group-row">
                    <Col span={12}>
                      <Form.Item
                        name="companyCity"
                        rules={[
                          {
                            required: this.props.invoiceNeeded,
                            message: "Miasto jest wymagane."
                          }
                        ]}
                      >
                        <Input placeholder="Miasto" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="companyZip"
                        rules={[
                          {
                            required: this.props.invoiceNeeded,
                            message: "Kod pocztowy jest wymagany."
                          }
                        ]}
                      >
                        <Input placeholder="Kod pocztowy" />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
              </Form.Item>
            </Col>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </>
    );
  }
}

// REDUX
const mapStateToProps = state => {
  return {
    invoiceNeeded: state.adressFormReducer.invoiceNeeded,
    values: state.adressFormReducer.values
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckbox: e =>
      dispatch({ type: actionTypes.FORM_CHECKBOX, event: e }),
    onFinish: values =>
      dispatch({
        type: actionTypes.ADD_FORM_VALUES,
        values: values
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdressForm);

// onFinish = values => {
//   console.log(values);
//   this.setState({
//     values: values
//   });
// };

// handleCheckbox = e => {
//   const checked = e.target.checked;
//   this.setState({
//     invoiceNeeded: checked
//   });
// };
