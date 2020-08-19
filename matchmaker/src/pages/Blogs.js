import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getBlogs } from "../services/BlogService";
import strings from "../localization";
import BlogPreview from "../components/BlogPreview";

class Blogs extends Page {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.props.showLoader();

    getBlogs().then((response) => {
      this.props.hideLoader();

      /*if (!response || !response.ok) {
        console.log("Nema odgovora ili je status razlicit od OK"); 
        return;
      }*/

      console.log(response.data); //
      this.setState({
        blogs: response.data,
        visible: 3,
      });
    });
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 3 };
    });
  }

  renderBlogs() {
    let result = [];

    if (!this.state.blogs) {
      return result;
    }

    {
      this.state.blogs.slice(0, this.state.visible).map((item, index) => {
        result.push(<BlogPreview blog={item} id={item.id} />);
      });
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
        <div className="center">
          {this.state.visible < this.state.blogs.length && (
            <React.Fragment>
              <div className="load-more-dots">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div>
                <button onClick={this.loadMore} className="load-more-text">
                  Load more
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader,
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return siteDataReducers;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blogs));
