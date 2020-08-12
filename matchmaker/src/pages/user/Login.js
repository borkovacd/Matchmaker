import React from "react";
import Page from "../../common/Page";
import Validators from "../../constants/ValidatorTypes";
import { login } from "../../base/OAuth";
import strings from "../../localization";
import { Link, withRouter } from "react-router-dom";

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
    return <h1>{strings.menu.Login}</h1>;
  }
}

export default Login;
