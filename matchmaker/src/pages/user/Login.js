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
import { OK } from "http-status-codes";

class Login extends Page {
  validationList = {
    username: [{ type: Validators.REQUIRED }],
    password: [{ type: Validators.REQUIRED }]
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {},
      redirectUrl: props.location.state ? props.location.state.redirectUrl : "/"
    };

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.key === "Enter") {
      this.login();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}

  login() {
    if (!this.validate()) {
      return;
    }

    login(this.state.data.username, this.state.data.password).then(response => {
      if (response.status !== OK) {
        this.setError("username", strings.loginForm.wrongCredentials);
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
      <div className="login-registration-page">
        <div className="lrp-title">{strings.menu.Login}</div>

        <div className="lrp-grid-container">
          <LoginForm
            errors={this.state.errors}
            data={this.state.data}
            keyPress={this.keyPress}
            onChange={this.changeData}
            onSubmit={() => this.login()}
          />

          <div className="lrp-social-buttons">
            <div className="lrp-social-buttons-title">
              {strings.loginForm.loginWith}
            </div>

            <div className="row">
              <a className="fb social-btn">
                <i className="fab fa-facebook-f i"></i>{" "}
                {strings.loginForm.continueWith} Facebook
              </a>
            </div>

            <div className="row">
              <a className="twitter social-btn">
                <i className="fab fa-twitter i"></i>{" "}
                {strings.loginForm.continueWith} Twitter
              </a>
            </div>
            <div className="row">
              <a className="google social-btn">
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
