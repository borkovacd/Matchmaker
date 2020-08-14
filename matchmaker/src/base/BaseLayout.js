import React, { Component } from "react";
import Loader from "../components/Loader";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {this.props.loader && <Loader />}

        <Header />
        <Footer />

        {children}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps({ authReducers, siteDataReducers }) {
  return {
    loader: siteDataReducers.loader,
    language: siteDataReducers.language,
    languages: siteDataReducers.languages
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BaseLayout)
);
