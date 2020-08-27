import React from "react";
import Page from "../../common/Page";
import {
  setTokenToLocalStorage,
  setUserToLocalStorage
} from "../../base/OAuth";
import Validators from "../../constants/ValidatorTypes";
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegistrationFirstStepForm from "../../components/forms/user/RegistrationFirstStepForm";
import { register } from "../../services/UserService";
import strings from "../../localization";
import { OK } from "http-status-codes";

class RegistrationFirstStep extends Page {
  registerValidationList = {
    username: [{ type: Validators.REQUIRED }],
    name: [{ type: Validators.REQUIRED }],
    email: [{ type: Validators.EMAIL }]
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {},
      redirectUrl: props.location.state ? props.location.state.redirectUrl : "/"
    };

    this.submit = this.submit.bind(this);

    this.validationList = this.registerValidationList;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    //window.scrollTo(0, 0);
  }

  submit() {
    if (!this.validate()) {
      return;
    }

    this.props.showLoader();

    register(this.state.data).then(response => {
      if (response.status !== OK) {
        this.setError("email", strings.registrationForm.emailExists);
        this.props.hideLoader();
        return;
      }

      this.props.hideLoader();
      setTokenToLocalStorage(
        response.data.access_token,
        response.data.refresh_token
      );
      setUserToLocalStorage(response.data.user);
      this.props.login(response.data.user);

      this.props.history.push("/registration2");
    });
  }

  render() {
    return (
      <div className="login-registration-page">
        <div className="lrp-title">{strings.menu.Register}</div>

        <div className="lrp-grid-container">
          <RegistrationFirstStepForm
            data={this.state.data}
            errors={this.state.errors}
            onSubmit={this.submit}
            onChange={this.changeData}
            handle={this.handle}
            rangeChange={event => this.rangeChange(event, "interestedInAge")}
          />

          <div className="lrp-social-buttons">
            <div className="lrp-social-buttons-title longer">
              {strings.registrationForm.continueWithDescription}
            </div>

            <div className="row">
              <a className="fb social-btn">
                <i className="fab fa-facebook-f i"></i>
                {strings.registrationForm.continueWith} Facebook
              </a>
            </div>

            <div className="row">
              <a className="twitter social-btn">
                <i className="fab fa-twitter i"></i>{" "}
                {strings.registrationForm.continueWith} Twitter
              </a>
            </div>
            <div className="row">
              <a className="google social-btn">
                <i className="fab fa-google-plus-g i"></i>
                {strings.registrationForm.continueWith} Google
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
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader,
      login: Actions.login
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers, authReducers }) {
  return siteDataReducers, authReducers;
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegistrationFirstStep)
);
