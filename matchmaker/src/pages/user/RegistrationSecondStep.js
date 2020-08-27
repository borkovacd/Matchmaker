import React from "react";
import Page from "../../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import strings from "../../localization";
import RegistrationSecondStepForm from "../../components/forms/user/RegistrationSecondStepForm";

class RegistrationSecondStep extends Page {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {},
      file: undefined,
      redirectUrl: props.location.state ? props.location.state.redirectUrl : "/"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    //window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="registration-step-2" className="login-registration-page">
        <div className="lrp-title">{strings.menu.Register}</div>

        <div className="lrp-grid-container second-step">
          <RegistrationSecondStepForm
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
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return siteDataReducers;
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegistrationSecondStep)
);
