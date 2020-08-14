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
    return (
      <div id="header">
        <div className="brand">
          <div className="logo">
            <Link to={"/"}>
              <img src={"images/logo.png"} />
            </Link>
          </div>
          <div className="title">{strings.menu.Home}</div>
        </div>
        <div className="menu">
          {!isUserLoggedIn() && (
            <React.Fragment>
              <div className="btn-login">
                <Link to={"/login"}>{strings.menu.Login}</Link>
              </div>
              <div className="btn-register">
                <Link to={"/registration"}>{strings.menu.Register}</Link>
              </div>
            </React.Fragment>
          )}
          {isUserLoggedIn() && (
            <React.Fragment>
              <div>
                <Link to={"/profile"}>{strings.menu.Profile}</Link>
              </div>
              <div onClick={this.logout}>
                <a href="#">{strings.menu.Logout}</a>
              </div>
            </React.Fragment>
          )}
          <div className="btn-language-switcher" id="language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    );
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
    language: siteDataReducers.language,
    languages: siteDataReducers.languages
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
