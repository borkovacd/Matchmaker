import React from "react";
import Page from "../../common/Page";
import Validators from "../../constants/ValidatorTypes";
import { login } from "../../base/OAuth";
import strings from "../../localization";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import LoginForm from "../../components/forms/user/LoginForm";

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
      <div id="login-page" className="page-container">
        <Link to={"/"}>
          <img src={"images/logo.png"} />
        </Link>

        <div id="language-switcher">
          <LanguageSwitcher />
        </div>

        <p>{/*{ strings.login.text }*/}</p>

        <LoginForm
          errors={this.state.errors}
          data={this.state.data}
          keyPress={this.keyPress}
          onChange={this.changeData}
          onSubmit={() => this.login()}
        />
      </div>
    );
  }
}

export default Login;
