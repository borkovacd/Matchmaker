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
      <div id="login-page">
        <div className="title">{strings.menu.Login}</div>

        <div className="form-grid-container">
          <div className="form-grid-item">
            <LoginForm
              errors={this.state.errors}
              data={this.state.data}
              keyPress={this.keyPress}
              onChange={this.changeData}
              onSubmit={() => this.login()}
            />
          </div>

          <div id="login-with-buttons">
            <div className="title">{strings.loginForm.loginWith}</div>

            <div className="row">
              <a href="#" class="fb btn">
                <i class="fab fa-facebook-f i"></i>{" "}
                {strings.loginForm.continueWith} Facebook
              </a>
            </div>

            <div className="row">
              <a href="#" class="twitter btn">
                <i class="fab fa-twitter i"></i>{" "}
                {strings.loginForm.continueWith} Twitter
              </a>
            </div>
            <div className="row">
              <a href="#" class="google btn">
                <i class="fab fa-google-plus-g i"></i>{" "}
                {strings.loginForm.continueWith} Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
