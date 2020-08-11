import React, { Component } from "react";
import strings from "../localization";
import { isUserLoggedIn, logout } from "../base/OAuth";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

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
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={"images/flags/rs.png"}
            width="125"
            height="100"
            className="d-inline-block align-top"
          />
          {strings.menu.Home}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="mr-auto">
          <Nav>
            <Button className="btn btn-danger">{strings.menu.Login}</Button>

            <Button className="btn ">{strings.menu.Register}</Button>

            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    {
      /*<div>
        <div id="menu" className="active">
          <div className="menu-item">
            <Link to={"/"}>{strings.menu.Home}</Link>
          </div>
          <div className="menu-item">
            <Link to={"/about"}>{strings.menu.About}</Link>
          </div>

          {isUserLoggedIn() && (
            <div>
              <div className="menu-item">
                <Link to={"/profile"}>{strings.menu.Profile}</Link>
              </div>
              <div className="menu-item" onClick={this.logout}>
                <a href="#">{strings.menu.Logout}</a>
              </div>
            </div>
          )}

          {!isUserLoggedIn() && (
            <div>
              <div className="menu-item">
                <Link to={"/registration"}>{strings.menu.Register}</Link>
              </div>
              <div className="menu-item">
                <Link to={"/login"}>{strings.menu.Login}</Link>
              </div>
            </div>
          )}

          <div className="menu-item">
            <a
              href="https://www.facebook.com/Handball-Hunters-1788753857916778/"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/handballhunter/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </div>

          <LanguageSwitcher />
        </div>

        <div id="header">
          <div className="filter-icon active" onClick={this.toggleFilter}>
            <i className="fas fa-sliders-h" />
          </div>

          <div className="menu-icon">
            {
              <button
                onClick={this.toggleMenu}
                className="hamburger hamburger--elastic is-active"
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            }
          </div>

          <div className="logo">
            <Link to={"/"}>
              <img src={"images/logo.png"} />
            </Link>
          </div>
        </div>
          </div> */
    }
  }
}

export default Header;
