import React from "react";
import Page from "../../common/Page";
import Validators from "../../constants/ValidatorTypes";
import { login } from "../../base/OAuth";
import strings from "../../localization";
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
              <a href="#" className="fb btn">
                <i className="fab fa-facebook-f i"></i>{" "}
                {strings.loginForm.continueWith} Facebook
              </a>
            </div>

            <div className="row">
              <a href="#" className="twitter btn">
                <i className="fab fa-twitter i"></i>{" "}
                {strings.loginForm.continueWith} Twitter
              </a>
            </div>
            <div className="row">
              <a href="#" className="google btn">
                <i className="fab fa-google-plus-g i"></i>{" "}
                {strings.loginForm.continueWith} Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: Actions.login
    },
    dispatch
  );
}

function mapStateToProps({ authReducers }) {
  return authReducers;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
