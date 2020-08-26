import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Select from ".//controls/Select";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Switching language to: " + e.target.value);
    this.props.changeLanguage(e.target.value);
  }

  render() {
    return (
      <div className="language-switcher">
        <Select
          placeholder={this.props.language}
          items={this.props.languages}
          selectedItem={this.props.language}
          onChange={this.handleChange}
          displayKey={"name"}
          valueKey={"name"}
        />
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
  return {
    language: siteDataReducers.language,
    languages: siteDataReducers.languages
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
);
