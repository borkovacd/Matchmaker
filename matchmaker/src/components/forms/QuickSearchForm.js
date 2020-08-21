import React from "react";
import { Link } from "react-router-dom";
import strings from "../../localization";
import { getGenderList } from "../../constants/Gender";
import CheckGroup from "../controls/CheckGroup";
import Select from "../controls/Select";
import { getAgeObject, getAgeObjects } from "../../util/AgeUtil";

const QuickSearch = ({ onSubmit, data, keyPress }) => (
  <form
    id="quick-search-form"
    className="quick-search-form-container"
    onSubmit={event => onSubmit(event)}
  >
    <div className="qs-title">{strings.quickSearch.title}</div>

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
            onChange={this.handleChange}
            selectedItem={getGenderList()[0]}
            displayKey={"name"}
            valueKey={"value"}
            onlyOne={true}
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
            name={"iigender"}
            items={getGenderList()}
            onChange={this.handleChange}
            selectedItem={getGenderList()[1]}
            displayKey={"name"}
            valueKey={"value"}
            onlyOne={true}
          />
        </div>
      </div>
    </div>

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
            name={"age-min"}
            displayKey={"name"}
            valueKey={"value"}
            placeholder={18}
            onlyOne={true}
          />
        </div>
        {strings.quickSearch.and}
        <div id="betweenAges-max" className="between-ages">
          <Select
            items={getAgeObjects(18, 99)}
            name={"age-max"}
            displayKey={"name"}
            valueKey={"value"}
            placeholder={99}
            onlyOne={true}
          />
        </div>
      </div>
    </div>

    <div className="form-row center">
      <a
        onClick={event => onSubmit(event)}
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
  </form>
);

export default QuickSearch;
