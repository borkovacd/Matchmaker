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
      <div>
        <div id="header">
          <div className="logo">
            <Link to={"/"}>
              <img src={"images/logo.png"} />
            </Link>
            <div className="title">{strings.menu.Home}</div>
          </div>

          {!isUserLoggedIn() && (
            <div>
              <div className="header-btn-left">
                <Link to={"/login"}>{strings.menu.Login}</Link>
              </div>
              <div className="header-btn-right">
                <Link to={"/registration"}>{strings.menu.Register}</Link>
              </div>
            </div>
          )}
          {isUserLoggedIn() && (
            <div>
              <div className="header-btn-left">
                <Link to={"/profile"}>{strings.menu.Profile}</Link>
              </div>
              <div className="header-btn-right" onClick={this.logout}>
                <a href="#">{strings.menu.Logout}</a>
              </div>
            </div>
          )}
          <div id="language-switcher">
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
    language: siteDataReducers.language
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
