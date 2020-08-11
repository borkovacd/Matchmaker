import strings from '../localization';
import ValidatorTypes from '../constants/ValidatorTypes';
import {isNumeric} from "../util/DataValidation";


export  function hasError(errors, type) {
    return errors[type] && errors[type].length > 0;
}

export default function getErrorClass(errors, type) {
    return hasError(errors, type) ? 'error' : '';
}

export function validate(formData, validationList) {

    let errors = {};

    for (let propertyKey of Object.keys(validationList)) {

        let fieldErrors = [];

        validationList[propertyKey].forEach((validationItem) => {

            if (validationItem.type === ValidatorTypes.REQUIRED) {
                if (!required(formData[propertyKey])) {

                    fieldErrors.push(
                        {
                            message: strings.validation.RequiredErrorMessage
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.MIN_LENGTH) {
                if (!minLength(formData[propertyKey], validationItem.min)) {
                    fieldErrors.push(
                        {
                            message: `${strings.validation.MinLengthErrorMessage}${validationItem.min}`
                        });
                }

            }
            else if (validationItem.type === ValidatorTypes.MAX_LENGTH) {
                if (!maxLength(formData[propertyKey], validationItem.max)) {
                    fieldErrors.push(
                        {
                            message: `${strings.validation.MaxLengthErrorMessage}${validationItem.max}`
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.EMAIL) {
                if (!email(formData[propertyKey])) {
                    fieldErrors.push(
                        {
                            message: strings.validation.EmailErrorMessage
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.PASSWORD) {
                if (!password(formData[propertyKey])) {
                    fieldErrors.push(
                        {
                            message: strings.validation.PasswordErrorMessage
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.NOT_EMPTY_ARRAY) {
                if (!notEmptyArray(formData[propertyKey])) {
                    fieldErrors.push(
                        {
                            message: strings.validation.RequiredErrorMessage
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.SELECTED_OPTION) {

                if (!formData[propertyKey] || formData[propertyKey] == '-1') {
                    fieldErrors.push(
                        {
                            message: strings.validation.RequiredErrorMessage
                        });
                }
            }
            else if (validationItem.type === ValidatorTypes.IS_NUMBER) {

                if (!isNumeric(formData[propertyKey])) {
                    fieldErrors.push(
                        {
                            message: strings.validation.notNumber
                        });
                }
            }

        });

        errors[propertyKey] = fieldErrors;
    }

    return errors;
}

function notEmptyArray(data) {
    return !(!data || data.length === 0);
}

function required(data) {
    return !(!data || data === '');
}

function minLength(data, minLength) {
    return data && data.length >= minLength;
}

function maxLength(data, maxLength) {
    return data && data.length <= maxLength;
}

function email(data) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(data);
}

function password(data) {
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regexp.test(data);
}

export function isFormValid(errors) {
    for (let key in errors) {
        let error = errors[key];
        if (error.length !== 0){
            return false;
        }
    }
    return true;
}