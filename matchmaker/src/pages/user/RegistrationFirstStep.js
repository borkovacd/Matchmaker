import React from "react";
import Page from "../../common/Page";
import {
  login,
  setTokenToLocalStorage,
  setUserToLocalStorage,
} from "../../base/OAuth";
import Validators from "../../constants/ValidatorTypes";
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegistrationFirstStepForm from "../../components/forms/user/RegistrationFirstStepForm";
import {
  editUser,
  getUserRegistrationDetailsData,
  register,
  uploadProfileImage,
} from "../../services/UserService";
import { dateToString, stringToDate } from "../../util/DateUtil";
import strings from "../../localization";

class RegistrationFirstStep extends Page {
  registerValidationList = {
    email: [{ type: Validators.EMAIL }],
    password: [{ type: Validators.REQUIRED }],
    repeatPassword: [{ type: Validators.REQUIRED }],
    firstName: [{ type: Validators.REQUIRED }],
    lastName: [{ type: Validators.REQUIRED }],
    weight: [{ type: Validators.IS_NUMBER }],
    height: [{ type: Validators.IS_NUMBER }],
    position: [{ type: Validators.REQUIRED }],
    gender: [{ type: Validators.REQUIRED }],
    dateOfBirth: [{ type: Validators.REQUIRED }],
    countryId: [{ type: Validators.REQUIRED }],
    profileImage: [{ type: Validators.REQUIRED }],
  };

  editValidationList = {
    email: [{ type: Validators.EMAIL }],
    firstName: [{ type: Validators.REQUIRED }],
    lastName: [{ type: Validators.REQUIRED }],
    weight: [{ type: Validators.IS_NUMBER }],
    height: [{ type: Validators.IS_NUMBER }],
    position: [{ type: Validators.REQUIRED }],
    gender: [{ type: Validators.REQUIRED }],
    dateOfBirth: [{ type: Validators.REQUIRED }],
    countryId: [{ type: Validators.REQUIRED }],
    profileImage: [{ type: Validators.REQUIRED }],
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      file: undefined,
      profileImageZoom: 1,
      errors: {},
      redirectUrl: props.location.state
        ? props.location.state.redirectUrl
        : "/",
      profileImageChanged: false,
      refs: {
        ytLinks: React.createRef(),
        otherLinks: React.createRef(),
      },
    };
    this.submit = this.submit.bind(this);

    this.validationList = this.props.edit
      ? this.editValidationList
      : this.registerValidationList;
  }

  componentDidMount() {
    if (!this.props.edit) {
      return;
    }

    this.props.showLoader();

    getUserRegistrationDetailsData().then((response) => {
      this.props.hideLoader();

      if (!response || !response.ok) {
        return;
      }

      let dateOfBirth = stringToDate(response.data.user.dateOfBirth);

      this.setState({
        data: {
          id: response.data.user.id,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          gender: response.data.user.gender,
          middleName: response.data.user.middleName,
          email: response.data.user.email,
          weight: response.data.user.playerInfo.weight,
          height: response.data.user.playerInfo.height,
          position: response.data.user.playerInfo.position,
          euPassport: response.data.user.playerInfo.euPassport,
          countryId: response.data.user.playerInfo.nationality.id,
          placeOfBirth: response.data.user.playerInfo.placeOfBirth,
          dateOfBirth: dateToString(response.data.user.dateOfBirth),
          youtubeLink: this.transformLinks(response.data.youtubeLinks),
          otherLinks: this.transformLinks(response.data.otherLinks),
          day: dateOfBirth.day(),
          month: dateOfBirth.month(),
          year: dateOfBirth.year(),
          profileImage: "test",
        },
        file: response.data.imageData,
      });
    });
  }

  setEditorRef = (editor) => (this.editor = editor);

  checkPassword() {
    return this.state.data.password === this.state.data.repeatPassword;
  }

  submit() {
    for (let [key, value] of Object.entries(this.state.refs)) {
      value.current.add();
    }

    this.createLinksRequest();

    if (!this.validate()) {
      return;
    }

    if (!this.checkPassword()) {
      this.setError("password", strings.registrationForm.passwordNotMatch);
      return;
    }

    this.props.showLoader();

    let image = this.editor.getImage();
    this.state.data.profileImage = image.toDataURL();
    image.crossOrigin = "Anonymous";

    if (this.props.edit) {
      if (this.state.profileImageChanged) {
        uploadProfileImage({
          profileImage: image.toDataURL("image/jpeg", 0.8),
        }).then((response) => {});
      }

      editUser(this.state.data).then((response) => {
        this.props.history.push("/edit-profile-details");
      });
    } else {
      register(this.state.data).then((response) => {
        if (!response || !response.ok) {
          this.setError("email", strings.registrationForm.emailExists);
          this.props.hideLoader();
          return;
        }

        setTokenToLocalStorage(
          response.data.token.access_token,
          response.data.token.refresh_token
        );
        setUserToLocalStorage(response.data.user);

        uploadProfileImage({
          profileImage: image.toDataURL("image/jpeg", 0.8),
        }).then((response) => {
          this.props.history.push("/registration-details");
        });
      });
    }
  }

  render() {
    return (
      <div className="login-registration-page">
        <div className="lrp-title">{strings.menu.Register}</div>

        <div className="lrp-grid-container">
          <RegistrationFirstStepForm
            data={this.state.data}
            errors={this.state.errors}
            onFileChanged={this.onFileChanged}
            file={this.state.file}
            profileImageZoomChange={this.profileImageZoomChange}
            profileImageZoom={this.state.profileImageZoom}
            rotateImage={this.rotateImage}
            setEditorRef={this.setEditorRef}
            edit={this.props.edit}
            onSubmit={this.submit}
            onChange={this.changeData}
            refs={this.state.refs}
          />

          <div className="lrp-social-buttons">
            <div className="lrp-social-buttons-title longer">
              {strings.registrationForm.continueWithDescription}
            </div>

            <div className="row">
              <a href="#" className="fb social-btn">
                <i className="fab fa-facebook-f i"></i>{" "}
                {strings.registrationForm.continueWith} Facebook
              </a>
            </div>

            <div className="row">
              <a href="#" className="twitter social-btn">
                <i className="fab fa-twitter i"></i>{" "}
                {strings.registrationForm.continueWith} Twitter
              </a>
            </div>
            <div className="row">
              <a href="#" className="google social-btn">
                <i className="fab fa-google-plus-g i"></i>{" "}
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
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers, authReducers }) {
  return siteDataReducers;
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegistrationFirstStep)
);
