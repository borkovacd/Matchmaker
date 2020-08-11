import moment from "moment";

export function getYears(plusYears = 0) {

    let result = [];
    let currentYear = (new Date()).getFullYear();

    currentYear += plusYears;

    for(let i = currentYear; i >= currentYear - 99; i--) {

        result.push({
            name: i,
            value: i
        });
    }

    return result;
}

export function leapYear(year)
{
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

export function stringToDate(date, format = 'DD-MM-YYYY') {
    return moment(date, format);
}

export function dateToString(date, format = 'DD-MM-YYYY') {
    return moment(date).format(format);
}