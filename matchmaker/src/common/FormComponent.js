import React, { Component } from "react";
import { validate, isFormValid } from "../functions/Validation";
import BaseComponent from "../common/BaseComponent";
import update from "immutability-helper";
import Slider from "rc-slider";
import Range from "rc-slider";

const Handle = Range.Handle;

class FormComponent extends BaseComponent {
  validationList = {};

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      errors: {}
    };

    this.changeData = this.changeData.bind(this);
    this.changeCheckBox = this.changeCheckBox.bind(this);
    this.rangeChange = this.rangeChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  changeData(event) {
    this.setState({
      data: update(this.state.data, {
        [event.target.name]: { $set: event.target.value }
      })
    });
  }

  changeCheckBox(event) {
    const field = event.target.name;
    const data = this.state.data;
    data[field] = !data[field];

    this.setState({
      data
    });
  }

  handle = props => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <Handle value={value} {...restProps}>
        <span>{value}</span>
      </Handle>
    );
  };

  rangeChange(event, name) {
    let data = this.state.data;

    if (event[0] > event[1] || event[1] < event[0]) {
      return;
    }

    data[name + "Min"] = event[0];
    data[name + "Max"] = event[1];

    this.setState({
      data: data
    });
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  isFloat(n) {
    return !isNaN(parseFloat(n));
  }

  isInt(n) {
    return isFinite(n);
  }

  validate() {
    let errors = validate(this.state.data, this.validationList);

    this.setState({ errors });

    return isFormValid(errors);
  }

  setError(key, value) {
    this.setState({
      errors: update(this.state.errors, {
        [key]: { $set: [{ message: value }] }
      })
    });
  }
}

export default FormComponent;
