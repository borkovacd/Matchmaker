import React from "react";
import { Link } from "react-router-dom";
import getErrorClass from "../../../functions/Validation";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";

const LoginForm = ({ onSubmit, onChange, errors, data, keyPress }) => (
  <form id="login-form" onSubmit={event => onSubmit(event)}>
    <div className="form-row">
      <div className="column">
        <div className="label-container">
          <label htmlFor="email">{strings.loginForm.email}</label>
          <ErrorViewer data={data} errors={errors} type={"email"} />
        </div>
        <input
          type="text"
          name="email"
          onKeyPress={keyPress}
          className={getErrorClass(errors, "email")}
          value={data.email}
          onChange={onChange}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="column">
        <div className="label-container">
          <label htmlFor="password">{strings.loginForm.password}</label>
          <ErrorViewer data={data} errors={errors} type={"password"} />
        </div>
        <input
          type="password"
          name="password"
          className={getErrorClass(errors, "password")}
          value={data.password}
          onChange={onChange}
          onKeyPress={keyPress}
        />
      </div>
    </div>

    <div className="form-row">
      <div className="column">
        <Link to={"/forgot-password"} className="forget-link">
          {strings.loginForm.forgotYourPassword}
        </Link>
      </div>
    </div>

    <div className="form-row">
      <div className="column controls">
        <Link to={"/registration"} className="btn btn-blue">
          {strings.loginForm.register}
        </Link>
        <a onClick={event => onSubmit(event)} className="btn btn-orange">
          {strings.loginForm.login}
        </a>
      </div>
    </div>
  </form>
);

export default LoginForm;
