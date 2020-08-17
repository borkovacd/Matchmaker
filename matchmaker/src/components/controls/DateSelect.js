import React from "react";
import Select from "./Select";
import { getMonthList, getMonthObject } from "../../constants/Month";
import Month from "../../constants/Month";
import strings from "../../localization";
import BaseControl from "./BaseControl";
import { getYears, getYearObject } from "../../util/DateUtil";
import moment from "moment";

class DateSelect extends BaseControl {
  constructor(props) {
    super(props);

    this.state = {
      day: props.day,
      month: props.month,
      year: props.year,
      date: props.date,
      formatString: props.formatString ? props.formatString : "DD-MM-YYYY"
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.date = nextProps.date;

    if (this.state.date) {
      let date = moment(this.state.date, this.state.formatString);

      this.state.day = parseInt(date.format("D"));
      this.state.month = parseInt(date.format("M"));
      this.state.year = parseInt(date.format("YYYY"));
    }
  }

  daysForMonth(month = null, year = null) {
    if (month === null) {
      return 31;
    }

    switch (month) {
      case Month.January:
        return 31;
      case Month.February: {
        if (!year) {
          return 28;
        }

        return this.leapYear(year) ? 29 : 28;
      }
      case Month.March:
        return 31;
      case Month.April:
        return 30;
      case Month.May:
        return 31;
      case Month.Jun:
        return 30;
      case Month.July:
        return 31;
      case Month.August:
        return 31;
      case Month.September:
        return 30;
      case Month.October:
        return 31;
      case Month.November:
        return 30;
      case Month.December:
        return 31;
      default:
        return 0;
    }
  }

  getDaysObjects(month, year) {
    let n = this.daysForMonth(month, year);
    let result = [];

    for (let i = 1; i <= n; i++) {
      result.push({
        name: i,
        value: i
      });
    }

    return result;
  }

  getDayObject(day) {
    return {
      name: day,
      value: day
    };
  }

  isValide() {
    return this.state.day && this.state.month && this.state.year;
  }

  onChange(event) {
    this.state[event.target.name] = event.target.value;

    let value = undefined;

    if (this.isValide()) {
      value = new Date(this.state.year, this.state.month - 1, this.state.day);
      this.createEvent(moment(value).format(this.state.formatString));
    }
  }

  render() {
    return (
      <div className="date-select center">
        <Select
          items={this.getDaysObjects()}
          placeholder={strings.select.day}
          name={"day"}
          displayKey={"name"}
          valueKey={"value"}
          onChange={this.onChange}
          selectedItem={this.getDayObject(this.state.day)}
        />
        <Select
          items={getMonthList()}
          placeholder={strings.select.month}
          name={"month"}
          displayKey={"name"}
          valueKey={"value"}
          onChange={this.onChange}
          selectedItem={getMonthObject(this.state.month)}
        />
        <Select
          items={getYears()}
          placeholder={strings.select.year}
          name={"year"}
          displayKey={"name"}
          valueKey={"value"}
          onChange={this.onChange}
          selectedItem={getYearObject(this.state.year)}
        />
      </div>
    );
  }
}

export default DateSelect;
