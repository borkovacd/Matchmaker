import React from "react";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";
import getErrorClass from "../../../functions/Validation";
import Select from "../../controls/Select";
import { getGenderList } from "../../../constants/Gender";
import CheckGroup from "../../controls/CheckGroup";
import DateSelect from "../../controls/DateSelect";
import "rc-slider/assets/index.css";

const RegistrationForm = ({
  onChange,
  errors,
  data,
  countries,
  edit,
  onSubmit,
}) => (
  <form id="register-form">
    <div className="title">{strings.registrationForm.title}</div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label className="required" htmlFor="username">
            {strings.registrationForm.username}
          </label>
          <ErrorViewer data={data} errors={errors} type={"username"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.username}
          type="text"
          name="username"
          className={getErrorClass(errors, "username")}
          value={data.username}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label className="required" htmlFor="name">
            {strings.registrationForm.name}
          </label>
          <ErrorViewer data={data} errors={errors} type={"name"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.name}
          type="text"
          name="name"
          className={getErrorClass(errors, "name")}
          value={data.name}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label className="required" htmlFor="email">
            {strings.registrationForm.email}
          </label>
          <ErrorViewer data={data} errors={errors} type={"email"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.email}
          type="email"
          name="email"
          className={getErrorClass(errors, "email")}
          value={data.email}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label htmlFor="birthday">{strings.registrationForm.birthday}</label>
          <ErrorViewer data={data} errors={errors} type={"birthday"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.birthday}
          type="date"
          name="birthday"
          className={getErrorClass(errors, "birthday")}
          value={data.birthday}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label htmlFor="gender">{strings.registrationForm.gender}</label>
          <ErrorViewer data={data} errors={errors} type={"gender"} />
        </div>
      </div>
      <div className="register-grid-item">
        <Select
          items={getGenderList()}
          onChange={onChange}
          selectedItem={data.gender}
          name={"gender"}
          displayKey={"name"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label htmlFor="intrestedInGender">
            {strings.registrationForm.intrestedInGender}
          </label>
          <ErrorViewer data={data} errors={errors} type={"intrestedInGender"} />
        </div>
      </div>
      <div className="register-grid-item">
        <Select
          items={getGenderList()}
          onChange={onChange}
          selectedItem={data.intrestedInGender}
          name={"intrestedInGender"}
          displayKey={"intrestedInGender"}
          valueKey={"value"}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label htmlFor="intrestedInAge">
            {strings.registrationForm.intrestedInAge}
          </label>
          <ErrorViewer data={data} errors={errors} type={"intrestedInAge"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.intrestedInAge}
          type="text"
          name="intrestedInAge"
          className={getErrorClass(errors, "intrestedInAge")}
          value={data.intrestedInAge}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="register-grid">
      <div className="register-grid-item">
        <div className="label-container">
          <label htmlFor="intrestedFor">
            {strings.registrationForm.intrestedFor}
          </label>
          <ErrorViewer data={data} errors={errors} type={"intrestedFor"} />
        </div>
      </div>
      <div className="register-grid-item">
        <input
          placeholder={strings.registrationForm.intrestedFor}
          type="text"
          name="intrestedFor"
          className={getErrorClass(errors, "intrestedFor")}
          value={data.intrestedFor}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="column controls">
        <a
          onClick={(event) => onSubmit(event)}
          className="btn btn-red uppercase"
        >
          {strings.loginForm.continue}
        </a>
      </div>
    </div>
  </form>
);

export default RegistrationForm;
