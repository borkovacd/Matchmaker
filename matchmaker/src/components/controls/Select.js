import React from "react";
import strings from "../../localization";
import enhanceWithClickOutside from "react-click-outside";
import BaseControl from "./BaseControl";

class Select extends BaseControl {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items ? props.items : [],
      selectedItem:
        props.selectFirst && props.items ? props.items[0] : props.selectedItem,
      displayKey: props.displayKey,
      valueKey: props.valueKey,
      open: false,
      placeholder: props.placeholder
        ? props.placeholder
        : strings.select.placeholder,
      disabled: props.disabled,
      searchText: "",
    };

    this.customAdd = this.customAdd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.items = nextProps.items ? nextProps.items : [];
    this.state.selectedItem = this.getSelectedItem(nextProps.selectedItem);
    this.state.disabled = nextProps.disabled;
  }

  getSelectedItem(value) {
    if (!value) {
      return undefined;
    }

    for (let item of this.state.items) {
      if (item[this.state.valueKey] === value) {
        return item;
      }
    }

    return value;
  }

  toggleSelect() {
    if (this.state.disabled) {
      return;
    }

    this.setState({
      open: !this.state.open,
    });
  }

  handleClickOutside() {
    this.setState({
      open: false,
    });
  }

  selectItem(item) {
    let value = this.state.valueKey ? item[this.state.valueKey] : item;

    this.createEvent(value);

    this.setState({
      selectedItem: item,
      open: false,
    });
  }

  isCustomAddAllowed() {
    return this.state.searchText && this.state.searchText !== "";
  }

  customAdd() {
    let item = {
      text: this.state.searchText,
      [this.state.displayKey]: this.state.searchText,
    };

    this.selectItem(item);
  }

  renderOptions() {
    let result = [];

    if (this.props.showSearch && !this.props.allowAdd) {
      result.push(
        <input
          className="search"
          type="text"
          onChange={(event) => this.onChange(event)}
          placeholder={strings.select.search}
          value={this.state.searchText}
        />
      );
    }

    if (this.props.showSearch && this.props.allowAdd) {
      result.push(
        <div className="add-container">
          <input
            className="search"
            type="text"
            onChange={(event) => this.onChange(event)}
            placeholder={strings.select.search}
            value={this.state.searchText}
          />
          <span
            className={this.isCustomAddAllowed() ? "" : "disabled"}
            onClick={this.customAdd}
          >
            <i className="fas fa-check" />
          </span>
        </div>
      );
    }

    for (let item of this.getItems()) {
      result.push(
        <div
          key={"select-item-" + result.length}
          className="item"
          onClick={() => this.selectItem(item)}
        >
          <p>{item[this.state.displayKey]}</p>
        </div>
      );
    }

    return result;
  }

  getItems() {
    if (!this.state.searchText || this.state.searchText === "") {
      return this.state.items;
    }

    let result = [];

    for (let item of this.state.items) {
      if (
        item[this.state.displayKey]
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
      ) {
        result.push(item);
      }
    }

    return result;
  }

  onChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    let icon = this.state.open ? (
      <i onClick={() => this.toggleSelect()} className="fas fa-caret-up" />
    ) : (
      <i onClick={() => this.toggleSelect()} className="fas fa-caret-down" />
    );

    return (
      <div className={this.state.disabled ? "select disabled" : "select"}>
        {this.state.selectedItem &&
          this.state.selectedItem[this.state.displayKey] && (
            <p onClick={() => this.toggleSelect()}>
              {this.state.selectedItem[this.state.displayKey]}
            </p>
          )}

        {!(
          this.state.selectedItem &&
          this.state.selectedItem[this.state.displayKey]
        ) && (
          <p onClick={() => this.toggleSelect()}>{this.state.placeholder}</p>
        )}

        {icon}

        <div className={this.state.open ? "options active" : "options"}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(Select);
