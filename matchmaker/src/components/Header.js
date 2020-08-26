import React, { Component } from "react";
import strings from "../localization";
import { isUserLoggedIn, logout } from "../base/OAuth";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Header extends Component {
  logout() {
    logout();
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
              <div className="btn-login">
                <Link to={"/profile"}>{strings.menu.Profile}</Link>
              </div>
              <div className="btn-register" onClick={this.logout}>
                <a>{strings.menu.Logout}</a>
              </div>
            </React.Fragment>
          )}

          <LanguageSwitcher />
        </div>
      </div>
    );
  }
}

export default Header;
