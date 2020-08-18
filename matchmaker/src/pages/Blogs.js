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

class Blogs extends Page {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.props.showLoader();

    getBlogs().then(response => {
      this.props.hideLoader();

      if (!response || !response.ok) {
        console.log("Nema odgovora ili je status razlicit od OK"); //
        return;
      }

      console.log(response.data); //
      this.setState({
        blogs: response.data
      });
    });
  }

  renderBlogs() {
    let result = [];

    if (!this.state.blogs) {
      return result;
    }

    for (let blog of this.state.blogs) {
      result.push(<BlogPreview blog={blog} />);
    }

    return result;
  }

  render() {
    if (!this.state.blogs) {
      console.log("Nema blogova..."); //
      return "";
    }

    return (
      <div className="blogs-page">
        <div className="blogs-page-header">SERBIA</div>
        <div className="blogs-page-title">{strings.blogs.blogPage}</div>
        <div className="blogs-grid-container">{this.renderBlogs()}</div>
      </div>
    );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blogs));
