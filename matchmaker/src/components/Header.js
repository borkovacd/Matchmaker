import React, { Component } from "react";
import strings from "../localization";
import { isUserLoggedIn, logout } from "../base/OAuth";
import { Link, withRouter } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

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
          <Row>
            <img alt="" src={"images/flags/rs.png"} width="125" height="100" />
            <h1>{strings.menu.Home}</h1>
          </Row>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isUserLoggedIn() && (
              <Button className="btn  mr-2">{strings.menu.Profile}</Button>
            )}
            {isUserLoggedIn() && (
              <Button className="btn btn-danger mr-2">
                {strings.menu.Logout}
              </Button>
            )}
            {!isUserLoggedIn() && (
              <Button className="btn btn-danger mr-2">
                <Link to={"/login"}>{strings.menu.Login}</Link>
              </Button>
            )}
            {!isUserLoggedIn() && (
              <Button className="btn btn-primary mr-2">
                <Link to={"/registration"}>{strings.menu.Register}</Link>
              </Button>
            )}
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
