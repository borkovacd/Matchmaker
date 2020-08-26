import React, { Component } from "react";
import Loader from "../components/Loader";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

class BaseLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {this.props.loader && <Loader />}

        <Header />

        {children}

        <Footer />
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ siteDataReducers }) {
  return {
    loader: siteDataReducers.loader,
    language: siteDataReducers.language
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BaseLayout)
);
