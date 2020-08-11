import React from 'react';
import strings from '../../../localization';
import ErrorViewer from "../../ErrorViewer";
import getErrorClass from "../../../functions/Validation";

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    data,
    keyPress
}) => (
    <form id="login-form" onSubmit={ (event) => onSubmit(event) }>

        <div className='form-row'>
            <div className='column'>
                <div className='label-container'>
                    <label htmlFor="email">{strings.loginForm.email}</label>
                    <ErrorViewer data={data} errors={errors} type={'email'}/>
                </div>
                <input type="text" name="email" onKeyPress={keyPress}
                       className={getErrorClass(errors, 'email')}
                       value={data.email} onChange={onChange}/>
            </div>
        </div>
        <div className='form-row'>
            <div className='column'>
                <div className='label-container'>
                    <label htmlFor="password">{strings.loginForm.password}</label>
                    <ErrorViewer data={data} errors={errors} type={'password'}/>
                </div>
                <input type="password" name="password" className={getErrorClass(errors, 'password')}
                       value={data.password} onChange={onChange} onKeyPress={keyPress}/>
            </div>
        </div>

        <div className='form-row'>
            <div className='column controls'>
                <a onClick={ (event) => onSubmit(event) } className="btn btn-orange">{ strings.loginForm.login }</a>
            </div>
        </div>
    </form>
);

export default LoginForm;