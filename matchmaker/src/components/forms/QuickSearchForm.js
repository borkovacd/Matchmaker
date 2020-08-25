import React from "react";
import { Link } from "react-router-dom";
import strings from "../../localization";
import { getGenderList } from "../../constants/Gender";
import Select from "../controls/Select";
import { getAgeObjects } from "../../util/AgeUtil";
import { getSearchDataParams } from "../../constants/DefaultSearchData";
import Page from "../../common/Page";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import * as Actions from "../../actions/Actions";

class QuickSearch extends Page {
  params = getSearchDataParams();

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      result: undefined,
      resultCount: 0,
    };

    this.doSearch = this.doSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let searchData = this.state.searchData;

    searchData[event.target.name] = event.target.value;

    this.setState({
      searchData: searchData,
    });
  }

  doSearch() {
    this.props.history.push("/search" + this.buildParams());
  }

  render() {
    return (
      <form id="quick-search-form" className="quick-search-form-container">
        <div className="qs-title">{strings.quickSearch.title}</div>

        <div className="container">
          <div>
            <div className="form-row mb-5">
              <div className="column column-half ">
                <div className="label">
                  <label htmlFor="gender">{strings.quickSearch.gender}</label>
                </div>
              </div>
              <div id="gender-select" className="column column-half">
                <div className="language-switcher">
                  <Select
                    name="gender"
                    items={getGenderList()}
                    selectedItem={this.state.searchData.gender}
                    displayKey={"name"}
                    valueKey={"value"}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-row mb-5">
              <div className="column column-half">
                <div className="label">
                  <label htmlFor="intrestedInGender">
                    {strings.quickSearch.intrestedInGender}
                  </label>
                </div>
              </div>

              <div id="iigender-select" className="column column-half">
                <div className="language-switcher">
                  <Select
                    name="interestedInGender"
                    items={getGenderList()}
                    selectedItem={this.state.searchData.interestedInGender}
                    displayKey={"name"}
                    valueKey={"value"}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="form-row mb-5">
              <div className="column column-half">
                <div className="label">
                  <label htmlFor="betweenAges-min">
                    {strings.quickSearch.intrestedInAge}
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div id="betweenAges-min" className="between-ages">
                  <Select
                    items={getAgeObjects(18, 99)}
                    name={"ageMin"}
                    displayKey={"name"}
                    valueKey={"value"}
                    selectedItem={this.state.searchData.ageMin}
                    onChange={this.onChange}
                  />
                </div>
                {strings.quickSearch.and}
                <div id="betweenAges-max" className="between-ages">
                  <Select
                    items={getAgeObjects(18, 99)}
                    name={"ageMax"}
                    displayKey={"name"}
                    valueKey={"value"}
                    selectedItem={this.state.searchData.ageMax}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="form-row center">
              <a
                onClick={this.doSearch}
                className="btn  btn-red wide uppercase "
              >
                {strings.quickSearch.search}
              </a>
            </div>

            <div className="form-row center">
              <Link
                to={"/registration"}
                className="btn  btn-blue wide uppercase center"
              >
                {strings.quickSearch.signUp}
              </Link>
            </div>
            <div className="form-row">
              <div className="column not-a-member ">
                <div className="space">{strings.quickSearch.signUpWith}</div>

                <a href="#">
                  <i className="fab fa-google-plus-g i space gray-text"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter i space gray-text"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f i space gray-text"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram space gray-text"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader,
      //setFilterData: Actions.setData,
    },
    dispatch
  );
}

function mapStateToProps() {
  return {
    //filter: filterReducers,
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuickSearch)
);
