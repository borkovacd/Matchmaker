import React, { Component } from "react";
import strings from "../localization";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: props.blog ? props.blog : undefined,
      onlyTitle: props.onlyTitle ? props.onlyTitle : false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      blog: nextProps.blog,
      onlyTitle: nextProps.onlyTitle
    });
  }

  renderBlog() {
    if (!this.state.onlyTitle) {
      return (
        <React.Fragment>
          <div
            className="header"
            style={{
              background: "url(" + this.state.blog.image + ")"
            }}
          ></div>

          <div className="content">
            <div className="content-title-buttons">
              <div className="content-title">
                <Link
                  className="content-title"
                  to={"/blog?blog=" + this.state.blog.id}
                >
                  {this.state.blog.title}
                </Link>
              </div>
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
              <Link
                className="blue-link"
                to={"/blog?blog=" + this.state.blog.id}
              >
                {strings.blogs.readMore}
              </Link>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="related-post">
          <div
            className="header"
            style={{
              background: "url(" + this.state.blog.image + ")"
            }}
          ></div>

          <Link className="title" to={"/blog?blog=" + this.state.blog.id}>
            {this.state.blog.title}
          </Link>
        </div>
      );
    }
  }

  render() {
    if (!this.state.blog) {
      console.log("Nije prosledjen blog kao props!"); //
      return "";
    }

    console.log("BLOG:" + this.state.blog); //

    return (
      <div id={this.state.blog.id} className="blog-preview-container">
        {this.renderBlog()}
      </div>
    );
  }
}

export default BlogPreview;
