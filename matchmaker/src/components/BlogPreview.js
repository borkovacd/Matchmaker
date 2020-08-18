import React, { Component } from "react";
import strings from "../localization";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: props.blog ? props.blog : undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.blog = nextProps.blog;
  }

  render() {
    if (!this.state.blog) {
      console.log("Nije prosledjen blog kao props!"); //
      return "";
    }

    console.log("BLOG:" + this.state.blog); //

    return (
      <div className="blog-preview-container">
        <div className="header"></div>
        <div className="content">
          <div className="content-title-buttons">
            <div className="content-title">{this.state.blog.title}</div>
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
          </div>
          <div className="content-text">{this.state.blog.teaser}</div>
          <div className="content-read-more">
            <Link className="blue-link" to={"/blog"}>
              {strings.blogs.readMore}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPreview;
