import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import strings from "../localization";
import { getSearchDataParams } from "../constants/DefaultSearchData";
import { searchUsers } from "../services/SearchService";
import { Link } from "react-router-dom";
import UserPreview from "../components/UserPreview";
import Pagination from "../components/Pagination";

class SearchResults extends Page {
  params = getSearchDataParams();

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      result: undefined,
      resultCount: 0,
    };
  }

  componentDidMount() {
    this.loadSearchResults();
  }

  loadSearchResults() {
    this.props.showLoader();

    this.loadParams();

    searchUsers(this.state.searchData).then((response) => {
      this.props.hideLoader();

      this.setState({
        result: response.data,
        resultCount: response.total,
      });
    });
  }

  renderUsers() {
    let result = [];

    if (!this.state.result) {
      return result;
    }

    {
      for (let user of this.state.result) {
        result.push(<UserPreview user={user} />);
      }
    }

    return result;
  }

  render() {
    return (
      <div className="search-results-page">
        <div className="find-your-match">{strings.searchResults.findMatch}</div>
        <div className="center-and-margin">
          <Link className="btn btn-blue uppercase" to={"/registration"}>
            {strings.menu.Register}
          </Link>
        </div>
        <div className="search-results-component">
          <div className="header">
            <div className="header-title">{strings.searchResults.title}</div>
          </div>
          <div className="content">
            <div className="first-column">
              <div className="space-between">
                <div className="column-row">
                  {strings.searchResults.searchResults}
                  <div className="value-color">500 pages</div>
                </div>
              </div>
              <div className="space-between">
                <div className="column-row">
                  {strings.searchResults.membersOnline}
                  <div className="value-color">? </div>
                </div>
              </div>
              <div className="space-between">
                <div className="column-row">
                  {strings.searchResults.orderBy}
                </div>
              </div>
            </div>
            <div className="empty-column"></div>
            <div className="last-column">
              <button className="transparent-btn">
                {strings.searchResults.quickSearch}
              </button>
            </div>
          </div>
        </div>
        <div className="users-grid-container">{this.renderUsers()}</div>
        <div className="pagination-time">
          <Pagination
            page={this.state.searchData.page}
            perPage={2}
            total={this.state.resultCount}
            setPage={this.setPage}
          />
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResults)
);
