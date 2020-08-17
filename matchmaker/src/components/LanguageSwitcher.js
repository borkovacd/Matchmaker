import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Select from ".//controls/Select";
import { stringToDate } from "../util/DateUtil";
import strings from "../localization";
import { changeLanguage } from "../actions/Actions";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage(language) {
    this.props.changeLanguage(language);
  }

  /*changeLanguageDD(selectedItem) {
    console.log("Language switched to: " + selectedItem.target.value);
    //console.log("Language -> " + selectedItem);
    //this.props.changeLanguage(selectedItem.target.value);
    changeLanguage("rs");
  }*/

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
    {
      /*<div className="language-switcher">
        <Select
          placeholder={this.props.language}
          items={this.props.languages}
          selectedItem={this.props.language}
          onChange={this.changeLanguageDD}
          displayKey={"name"}
          valueKey={"name"}
        />
    </div>*/
    }
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
  return {
    language: siteDataReducers.language,
    languages: siteDataReducers.languages
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
);
