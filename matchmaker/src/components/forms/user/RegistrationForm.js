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
  onSubmit,
  onChange,
  onFileChanged,
  profileImageZoomChange,
  profileImageZoom,
  setEditorRef,
  file,
  errors,
  data,
  countries,
  edit,
  rotateImage,
  refs
}) => (
  <div className="form-container">
    <form id="login-form">
      <div className="form-row">
        <div className="column">
          <div className=" title">{strings.registrationForm.title}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="label-container">
          <label className="required" htmlFor="username">
            {strings.loginForm.username}
          </label>
          <ErrorViewer data={data} errors={errors} type={"username"} />
        </div>
        <input
          placeholder={strings.loginForm.username}
          type="text"
          name="username"
          className={getErrorClass(errors, "username")}
          value={data.username}
          onChange={onChange}
        />
      </div>
      <div className="form-row">
        <div className="column column-half">
          <div className="label-container">
            <label className="required" htmlFor="username">
              {strings.loginForm.username}
            </label>
            <ErrorViewer data={data} errors={errors} type={"username"} />
          </div>
          <div className="column column-half">
            <input
              placeholder={strings.loginForm.username}
              type="text"
              name="username"
              className={getErrorClass(errors, "username")}
              value={data.username}
              onChange={onChange}
            />
          </div>
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="firstName">
                  {strings.registrationForm.firstName}
                </label>
                <ErrorViewer data={data} errors={errors} type={"firstName"} />
              </div>
              <input
                type="text"
                name="firstName"
                className={getErrorClass(errors, "firstName")}
                value={data.firstName}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="middleName">
                  {strings.registrationForm.middleName}
                </label>
                <ErrorViewer data={data} errors={errors} type={"middleName"} />
              </div>
              <input
                type="text"
                name="middleName"
                className={getErrorClass(errors, "middleName")}
                value={data.middleName}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="lastName">
                  {strings.registrationForm.lastName}
                </label>
                <ErrorViewer data={data} errors={errors} type={"lastName"} />
              </div>
              <input
                type="text"
                name="lastName"
                className={getErrorClass(errors, "lastName")}
                value={data.lastName}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="column column-half">
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="email">{strings.registrationForm.email}</label>
                <ErrorViewer data={data} errors={errors} type={"email"} />
              </div>
              <input
                type="text"
                name="email"
                className={getErrorClass(errors, "email")}
                value={data.email}
                onChange={onChange}
                disabled={edit}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="password">
                  {strings.registrationForm.password}
                </label>
                <ErrorViewer data={data} errors={errors} type={"password"} />
              </div>
              <input
                type="password"
                name="password"
                className={getErrorClass(errors, "password")}
                value={data.password}
                onChange={onChange}
                disabled={edit}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <div className="label-container">
                <label htmlFor="repeatPassword">
                  {strings.registrationForm.repeatPassword}
                </label>
                <ErrorViewer
                  data={data}
                  errors={errors}
                  type={"repeatPassword"}
                />
              </div>
              <input
                type="password"
                name="repeatPassword"
                className={getErrorClass(errors, "repeatPassword")}
                value={data.repeatPassword}
                onChange={onChange}
                disabled={edit}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-separator" />
      <div className="form-row">
        <div className="column column-half">
          <div className="label-container">
            <label htmlFor="gender">{strings.registrationForm.gender}</label>
            <ErrorViewer data={data} errors={errors} type={"gender"} />
          </div>
          <Select
            items={getGenderList()}
            onChange={onChange}
            selectedItem={data.gender}
            name={"gender"}
            displayKey={"name"}
            valueKey={"value"}
          />
        </div>
        <div className="column column-half">
          <div className="form-row">
            <div className="column column-half placeholder-input">
              <div className="label-container">
                <label htmlFor="weight">
                  {strings.registrationForm.weight}
                </label>
                <ErrorViewer data={data} errors={errors} type={"weight"} />
              </div>
              <input
                type="text"
                name="weight"
                className={getErrorClass(errors, "weight")}
                value={data.weight}
                onChange={onChange}
              />
              <p>kg</p>
            </div>
            <div className="column column-half placeholder-input">
              <div className="label-container">
                <label htmlFor="height">
                  {strings.registrationForm.height}
                </label>
                <ErrorViewer data={data} errors={errors} type={"height"} />
              </div>
              <input
                type="text"
                name="height"
                className={getErrorClass(errors, "height")}
                value={data.height}
                onChange={onChange}
              />
              <p>cm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-separator" />
      <div className="form-row">
        <div className="column column-70">
          <div className="label-container">
            <label htmlFor="dateOfBirth">
              {strings.registrationForm.dateOfBirth}
            </label>
            <ErrorViewer data={data} errors={errors} type={"dateOfBirth"} />
          </div>
          <DateSelect
            name={"dateOfBirth"}
            onChange={onChange}
            date={data.dateOfBirth}
            displayKey={"name"}
            valueKey={"value"}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="column column-half">
          <div className="label-container">
            <label htmlFor="nationality">
              {strings.registrationForm.nationality}
            </label>
            <ErrorViewer data={data} errors={errors} type={"countryId"} />
          </div>
          <Select
            items={countries}
            displayKey={"name"}
            valueKey={"id"}
            onChange={onChange}
            showSearch={true}
            name={"countryId"}
            selectedItem={data.countryId}
          />
        </div>
        <div className="column column-half">
          <div className="label-container">
            <label htmlFor="placeOfBirth">
              {strings.registrationForm.placeOfBirth}
            </label>
            <ErrorViewer data={data} errors={errors} type={"placeOfBirth"} />
          </div>
          <input
            type="text"
            name="placeOfBirth"
            className={getErrorClass(errors, "placeOfBirth")}
            value={data.placeOfBirth}
            onChange={onChange}
          />
        </div>
      </div>
    </form>

    <div className="form-row">
      <div className="column">
        <div className="navigation">
          <div className="navigation-element disabled">
            <img
              className="regular-arrow"
              src={"images/arrows/arrow-left.png"}
            />
            <img
              className="disabled-arrow"
              src={"images/arrows/arrow-left-disabled.png"}
            />
            <span>{strings.back}</span>
          </div>
          <div className="navigation-element" onClick={onSubmit}>
            <span>{strings.next}</span>
            <img
              className="regular-arrow"
              src={"images/arrows/arrow-right.png"}
            />
            <img
              className="disabled-arrow"
              src={"images/arrows/arrow-right-disabled.png"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegistrationForm;
