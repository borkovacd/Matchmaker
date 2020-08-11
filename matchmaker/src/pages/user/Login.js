import React from "react";
import Page from "../../common/Page";
import Validators from "../../constants/ValidatorTypes";
import { login } from "../../base/OAuth";
import strings from "../../localization";
import { Link, withRouter } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Page {
  validationList = {
    email: [{ type: Validators.EMAIL }],
    password: [{ type: Validators.REQUIRED }]
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {}
    };

    //this.props.toggleLogo(false);
    //this.props.toggleMenu(false);

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.key == "Enter") {
      this.login();
    }
  }

  login() {
    if (!this.validate()) {
      return;
    }

    login(this.state.data.email, this.state.data.password).then(response => {
      if (!response || !response.ok) {
        this.setError("email", strings.login.wrongCredentials);
        return;
      }

      this.props.login(response.data.user);

      this.props.history.push({
        pathname: this.state.redirectUrl
      });
    });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1>{strings.menu.Login}</h1>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              <h3>{strings.loginForm.title}</h3>
            </Form.Label>
            <Form>
              <Form.Group>
                <Form.Label>{strings.loginForm.username} *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={strings.loginForm.username}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{strings.loginForm.password} *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={strings.loginForm.password}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label={strings.loginForm.rememberMe}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Link to={"/#"}>{strings.loginForm.forgotYourPassword}</Link>
                </Col>
              </Row>
              <Button className="btn btn-danger">
                {strings.loginForm.continue}
              </Button>
            </Form>
            <Row className="mt-3 ml-2">
              {strings.loginForm.notMember}
              <Link className="ml-1" to={"/registration"}>
                {strings.menu.Register}
              </Link>
            </Row>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
