import { getMonthString } from "../constants/Month";
import moment, { now } from "moment";

export function getYears(plusYears = 0) {
  let result = [];
  let currentYear = new Date().getFullYear();

  currentYear += plusYears;

  for (let i = currentYear; i >= currentYear - 99; i--) {
    result.push({
      name: i,
      value: i
    });
  }

  return result;
}

export function getYearObject(year) {
  return {
    name: year,
    value: year
  };
}

export function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDateRangeString(
  monthFrom,
  yearFrom,
  monthTo = undefined,
  yearTo = undefined
) {
  let result = getMonthString(monthFrom) + " " + yearFrom;

  if (monthTo && yearTo) {
    result += " - " + getMonthString(monthTo) + " " + yearTo;
  }

  return result;
}

export function stringToDate(date) {
  return moment(date, "YYYY-MM-DD");
}

export function dateToString(date, format = "DD-MM-YYYY") {
  return moment(date).format(format);
}

export function calculateAge(date, format = "DD-MM-YYYY") {
  var age = moment().diff(date, "years");
  return age;
}
