import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import strings from "../localization";
import Image from "react-bootstrap/Image";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguage(language) {
    //console.log(language);
    this.props.changeLanguage(language);
  }

  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={strings.menu.LanguageSwitch}
      >
        <Dropdown.Item
          className={this.props.language === "rs" ? "active" : ""}
          onClick={() => this.changeLanguage("rs")}
        >
          <Image fluid alt="RS" src={"images/flags/rs.png"} />
        </Dropdown.Item>
        <Dropdown.Item
          className={this.props.language === "en" ? "active" : ""}
          onClick={() => this.changeLanguage("en")}
        >
          <Image fluid alt="EN" src={"images/flags/gb.png"} />
        </Dropdown.Item>
        <Dropdown.Item
          className={this.props.language === "de" ? "active" : ""}
          onClick={() => this.changeLanguage("de")}
        >
          <Image fluid alt="DE" src={"images/flags/de.png"} />
        </Dropdown.Item>
      </DropdownButton>
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
