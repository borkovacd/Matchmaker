import React from "react";
import BaseControl from "./BaseControl";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class CheckGroup extends BaseControl {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items ? props.items : [],
      selectedItems: props.selectedItems ? props.selectedItems : [],
      displayKey: props.displayKey,
      valueKey: props.valueKey,
      onlyOne: props.onlyOne
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.selectedItems = nextProps.selectedItems
      ? nextProps.selectedItems
      : [];
    this.state.items = nextProps.items ? nextProps.items : [];
  }

  isItemSelected(item) {
    for (let listItem of this.state.selectedItems) {
      if (item[this.state.valueKey] === listItem[this.state.valueKey]) {
        return true;
      }
    }

    return false;
  }

  selectItem(item) {
    let result = this.state.selectedItems;

    let index = result.indexOf(item);

    if (index === -1) {
      if (this.state.onlyOne) {
        result = [];
      }

      result.push(item);
    } else {
      if (!this.state.onlyOne) {
        result.splice(index, 1);
      }
    }

    let eventResult;

    if (result.length === 1) {
      eventResult = result[0][this.state.valueKey];
    }

    this.createEvent(eventResult);

    this.setState({
      selectedItems: result
    });
  }

  renderOptions() {
    let result = [];

    for (let item of this.state.items) {
      result.push(
        <div
          key={"check-group-item-" + result.length}
          className="item"
          onClick={() => this.selectItem(item)}
        >
          <span className={this.isItemSelected(item) ? "active" : ""}></span>
          <p>{item[this.state.displayKey]}</p>
        </div>
      );
    }

    return result;
  }

  render() {
    return <div className="check-group">{this.renderOptions()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setFilterData: Actions.setData
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return { sideData: siteDataReducers };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckGroup)
);
