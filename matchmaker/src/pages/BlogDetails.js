import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getBlogs } from "../services/BlogService";
import { stringToDate } from "../util/DateUtil";
import strings from "../localization";
import BlogPreview from "../components/BlogPreview";

class BlogDetails extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>BLOG</h1>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return siteDataReducers;
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogDetails)
);
