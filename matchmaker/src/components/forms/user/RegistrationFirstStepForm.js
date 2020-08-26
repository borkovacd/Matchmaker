import React from "react";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";
import getErrorClass from "../../../functions/Validation";
import { getGenderList } from "../../../constants/Gender";
import { getRelationshipTypesList } from "../../../constants/RelationshipType";
import CheckGroup from "../../controls/CheckGroup";
import DateSelect from "../../controls/DateSelect";
import "rc-slider/assets/index.css";
import { Range } from "rc-slider";

const RegistrationFirstStepForm = ({
  onChange,
  errors,
  data,
  onSubmit,
  rangeChange,
  handle
}) => (
  <form id="register-form" className="lrp-form-container">
    <div className="lrp-form-title">{strings.registrationForm.title}</div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label className="required" htmlFor="username">
            {strings.registrationForm.username}
          </label>
          <ErrorViewer data={data} errors={errors} type={"username"} />
        </div>
      </div>
      <div className="column column-half">
        <input
          placeholder={strings.registrationForm.username}
          type="text"
          name="username"
          className={getErrorClass(errors, "username") + "placeholder-input"}
          value={data.username}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label className="required" htmlFor="name">
            {strings.registrationForm.name}
          </label>
          <ErrorViewer data={data} errors={errors} type={"name"} />
        </div>
      </div>
      <div className="column column-half">
        <input
          placeholder={strings.registrationForm.name}
          type="text"
          name="name"
          className={getErrorClass(errors, "name") + "placeholder-input"}
          value={data.name}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label className="required" htmlFor="email">
            {strings.registrationForm.email}
          </label>
          <ErrorViewer data={data} errors={errors} type={"email"} />
        </div>
      </div>
      <div className="column column-half">
        <input
          placeholder={strings.registrationForm.email}
          type="email"
          name="email"
          className={getErrorClass(errors, "email") + "placeholder-input"}
          value={data.email}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label htmlFor="birthday">{strings.registrationForm.birthday}</label>
        </div>
      </div>
      <div className="column column-half">
        <DateSelect
          name="birthday"
          onChange={onChange}
          date={data.birthday}
          displayKey={"name"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label htmlFor="gender">{strings.registrationForm.gender}</label>
        </div>
      </div>
      <div id="gender" className="column column-half">
        <CheckGroup
          name="gender"
          items={getGenderList()}
          onChange={onChange}
          onlyOne={true}
          displayKey={"name"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label htmlFor="intrestedInGender">
            {strings.registrationForm.intrestedInGender}
          </label>
        </div>
      </div>

      <div id="interestedInGender" className="column column-half">
        <CheckGroup
          name="interestedInGender"
          items={getGenderList()}
          onChange={onChange}
          onlyOne={true}
          displayKey={"name"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column column-half">
        <div className="label">
          <label htmlFor="intrestedInAge">
            {strings.registrationForm.intrestedInAge}
          </label>
        </div>
      </div>
      <div className="column column-half mb-5">
        <label className="center">{strings.registrationForm.years}</label>
        <div className="slider-container">
          <span>18</span>
          <Range
            min={18}
            max={100}
            step={1}
            handle={handle}
            onChange={rangeChange}
          />
          <span>100</span>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="column column-half">
        <div className="label">
          <label htmlFor="interestedFor">
            {strings.registrationForm.intrestedFor}
          </label>
        </div>
      </div>
      <div className="column column-half fo-columns">
        <CheckGroup
          name="interestedFor"
          items={getRelationshipTypesList()}
          onChange={onChange}
          displayKey={"name"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="column controls">
        <a onClick={onSubmit} className="btn lrp-btn btn-red uppercase">
          {strings.loginForm.continue}
        </a>
      </div>
    </div>
  </form>
);

export default RegistrationFirstStepForm;
