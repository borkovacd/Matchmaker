import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getBlogDetails, getRelatedBlogs } from "../services/BlogService";
import strings from "../localization";
import BlogPreview from "../components/BlogPreview";
import { OK } from "http-status-codes";

class BlogDetails extends Page {
  params = [{ name: "blog", defaultValue: -1 }];

  componentDidMount() {
    this.loadBlog();
  }

  loadBlog() {
    this.loadParams();

    this.props.showLoader();

    getBlogDetails(this.state.searchData.blog).then(response => {
      this.props.hideLoader();

      if (response.status !== OK) {
        return;
      }

      this.setState({
        blogDetails: response.data
      });

      this.loadRelatedBlogs(this.state.blogDetails.id);
    });
  }

  loadRelatedBlogs(id) {
    this.props.showLoader();

    getRelatedBlogs(id).then(response => {
      this.props.hideLoader();

      if (response.status !== OK) {
        return;
      }

      this.setState({
        relatedBlogs: response.data,
        visible: 3 //number of related posts
      });
    });
  }

  renderRelatedBlogs() {
    let result = [];

    if (!this.state.relatedBlogs) {
      return result;
    }

    {
      this.state.relatedBlogs
        .slice(0, this.state.visible)
        .map((item, index) => {
          result.push(
            <BlogPreview
              onlyTitle={true}
              blog={item}
              key={item.id}
              onClick={this.handleChange}
            />
          );
        });
    }

    return result;
  }

  render() {
    if (!this.state.blogDetails) {
      return "";
    }

    return (
      <div className="blog-details-page">
        <div className="blog-details-header">SERBIA</div>
        <div className="blog-details-title">{strings.blogs.blogPage}</div>
        <div className="blog-details-grid-container">
          <div
            id={this.state.blogDetails.id}
            className="blog-details-container"
          >
            <div
              className="header"
              style={{
                background:
                  "url(images/blogs_photos/" +
                  this.state.blogDetails.id +
                  "/header_photo.png)"
              }}
            ></div>
            <div className="content">
              <div className="content-title">
                {this.state.blogDetails.title}
                <div className="content-buttons-container">
                  <a className="button-round-container">
                    <i className="fab fa-twitter i"></i>
                  </a>
                  <a className="button-round-container">
                    <i className="fab fa-facebook-f i"></i>
                  </a>
                  <a className="button-round-container">
                    <i className="fa fa-share-alt i"></i>
                  </a>
                </div>
                <div className="line-separator gray"></div>
              </div>

              <div className="content-text">
                {this.state.blogDetails.content}
              </div>
            </div>
          </div>

          <div className="related-posts-container">
            <div className="title-container">{strings.blogs.relatedPosts}</div>
            <div className="post-container">{this.renderRelatedBlogs()}</div>
          </div>
        </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogDetails)
);
