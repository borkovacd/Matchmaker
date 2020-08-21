import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import strings from "../localization";
import { getSearchDataParams } from "../constants/DefaultSearchData";
import { searchUsers } from "../services/SearchService";

class SearchResults extends Page {
  params = getSearchDataParams();

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      result: undefined,
      resultCount: 0
    };
  }

  componentDidMount() {
    this.loadSearchResults();
  }

  loadSearchResults() {
    this.props.showLoader();

    this.loadParams();

    searchUsers(this.state.searchData).then(response => {
      this.props.hideLoader();

      this.setState({
        result: response.data,
        resultCount: response.data.length
      });
    });
  }

  render() {
    return (
      <div className="blogs-page">
        <div className="blogs-page-header">SERBIA</div>
        <div className="blogs-page-title">{strings.blogs.blogPage}</div>
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
  connect(mapStateToProps, mapDispatchToProps)(SearchResults)
);
