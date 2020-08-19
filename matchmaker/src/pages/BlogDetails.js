import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getBlogDetails, getRelatedPosts } from "../services/BlogService";
import strings from "../localization";
import BlogPreview from "../components/BlogPreview";

class BlogDetails extends Page {
  params = [{ name: "blog", defaultValue: -1 }];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadBlog();
    this.loadRelatedPosts();
  }

  loadBlog() {
    this.loadParams();

    this.props.showLoader();

    getBlogDetails(this.state.searchData.blog).then(response => {
      this.props.hideLoader();

      console.log("RESPONSE STATUS: " + response.status);
      console.log("Response data: " + response.data.title);

      if (!response || !response.ok) {
        console.log("HERE");
        if (!response) {
          console.log("HERE !response");
        }
        if (!response.ok) {
          console.log("HERE !response.ok");
        }
        return;
      }

      this.setState({
        blogDetails: response.data
      });
    });
  }

  loadRelatedPosts() {
    this.props.showLoader();

    getRelatedPosts().then(response => {
      this.props.hideLoader();

      if (!response || !response.ok) {
        //console.log("Nema odgovora ili je status razlicit od OK"); //
        return;
      }

      console.log(response.data); //
      this.setState({
        relatedPosts: response.data,
        visible: 3
      });
    });
  }

  renderRelatedPosts() {
    let result = [];

    if (!this.state.relatedPosts) {
      return result;
    }

    {
      this.state.relatedPosts
        .slice(0, this.state.visible)
        .map((item, index) => {
          result.push(<BlogPreview onlyTitle={true} blog={item} />);
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
                background: "url(" + this.state.blogDetails.image + ")"
              }}
            ></div>
            <div className="content">
              <div className="content-title">
                {this.state.blogDetails.title}
                <div className="content-buttons-container">
                  <a href="#" className="button-round-container">
                    <i className="fab fa-twitter i"></i>
                  </a>
                  <a href="#" className="button-round-container">
                    <i className="fab fa-facebook-f i"></i>
                  </a>
                  <a href="#" className="button-round-container">
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
            <div className="post-container">{this.renderRelatedPosts()}</div>
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
