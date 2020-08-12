import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage(language) {
    console.log("Language switched to: " + language);
    this.props.changeLanguage(language);
  }

  render() {
    return (
      <div className="language-container">
        <div className="language" onClick={() => this.changeLanguage("rs")}>
          <img
            className={this.props.language === "rs" ? "active" : ""}
            src={"images/flags/rs.png"}
          />
        </div>
        <div className="language" onClick={() => this.changeLanguage("en")}>
          <img
            className={this.props.language === "en" ? "active" : ""}
            src={"images/flags/gb.png"}
          />
        </div>

        <div className="language" onClick={() => this.changeLanguage("de")}>
          <img
            className={this.props.language === "de" ? "active" : ""}
            src={"images/flags/de.png"}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeLanguage: Actions.changeLanguage
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return { language: siteDataReducers.language };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
);
