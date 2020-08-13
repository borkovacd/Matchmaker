import React from "react";
import BaseControl from "./BaseControl";

class CheckBox extends BaseControl {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      label: props.label ? props.label : "",
      name: props.name
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(
      {
        value: !this.state.value
      },
      () => {
        this.createEvent(this.state.value);
      }
    );
  }

  render() {
    return (
      <div className="check-box-container" onClick={this.toggle}>
        <span
          className={this.state.value ? "control active" : "control"}
        ></span>
        <label>{this.state.label}</label>
      </div>
    );
  }
}

export default CheckBox;
