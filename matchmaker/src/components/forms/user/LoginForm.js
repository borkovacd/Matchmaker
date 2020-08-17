import React from "react";
import { Link } from "react-router-dom";
import getErrorClass from "../../../functions/Validation";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";
import CheckBox from "../../controls/CheckBox";

const LoginForm = ({ onSubmit, onChange, errors, data, keyPress }) => (
  <form
    id="login-form"
    className="lrp-form-container"
    onSubmit={event => onSubmit(event)}
  >
    <div className="lrp-form-title">{strings.loginForm.title}</div>

    <div className="form-row">
      <div className="column">
        <div className="label">
          <label className="required" htmlFor="username">
            {strings.loginForm.username}
          </label>
          <ErrorViewer data={data} errors={errors} type={"username"} />
        </div>
        <input
          placeholder={strings.loginForm.username}
          type="text"
          name="username"
          onKeyPress={keyPress}
          className={getErrorClass(errors, "username") + "placeholder-input"}
          value={data.username}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="column">
        <div className="label">
          <label className="required" htmlFor="password">
            {strings.loginForm.password}
          </label>
          <ErrorViewer data={data} errors={errors} type={"password"} />
        </div>
        <input
          placeholder={strings.loginForm.password}
          type="password"
          name="password"
          className={getErrorClass(errors, "password") + "placeholder-input"}
          value={data.password}
          onChange={onChange}
          onKeyPress={keyPress}
        />
      </div>
    </div>

    <div className="form-row">
      <div className="column">
        <CheckBox
          name={strings.loginForm.rememberMe}
          label={strings.loginForm.rememberMe}
          value={false}
        ></CheckBox>
      </div>
      <div className="column">
        <Link to={"/forgot-password"}>
          {strings.loginForm.forgotYourPassword}
        </Link>
      </div>
    </div>

    <div className="form-row">
      <div className="column controls">
        <a
          onClick={event => onSubmit(event)}
          className="btn lrp-btn btn-red uppercase"
        >
          {strings.loginForm.continue}
        </a>
      </div>
    </div>

    <div className="form-row">
      <div className="column not-a-member">
        {strings.loginForm.notMember}
        <Link className="space" to={"/registration"}>
          {strings.loginForm.signUpNow}
        </Link>
      </div>
    </div>
  </form>
);

export default LoginForm;
