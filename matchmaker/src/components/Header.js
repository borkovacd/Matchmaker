import React, { Component } from "react";
import strings from "../localization";
import { isUserLoggedIn, logout } from "../base/OAuth";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

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
          <div className="header-brand-title">{strings.menu.Home}</div>
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
