import React, { Component } from "react";
import strings from "../localization";
import { isUserLoggedIn, logout } from "../base/OAuth";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Header extends Component {
  constructor(props) {
    super(props);
    //this.toggleFilter = this.toggleFilter.bind(this);
    //this.toggleMenu = this.toggleMenu.bind(this);
  }

  logout() {
    logout();
    //this.props.push('/');
  }

  render() {
    return <LanguageSwitcher />;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      //toggleFilter: Actions.toggleFilter,
      // toggleMenu: Actions.toggleMenu
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return {
    language: siteDataReducers.language
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
