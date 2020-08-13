import strings from "../localization";

const Month = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  Jun: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};

export default Month;

export function getMonthList() {
  return [
    {
      name: strings.months.january,
      value: Month.January
    },
    {
      name: strings.months.february,
      value: Month.February
    },
    {
      name: strings.months.march,
      value: Month.March
    },
    {
      name: strings.months.april,
      value: Month.April
    },
    {
      name: strings.months.may,
      value: Month.May
    },
    {
      name: strings.months.jun,
      value: Month.Jun
    },
    {
      name: strings.months.july,
      value: Month.July
    },
    {
      name: strings.months.august,
      value: Month.August
    },
    {
      name: strings.months.september,
      value: Month.September
    },
    {
      name: strings.months.october,
      value: Month.October
    },
    {
      name: strings.months.november,
      value: Month.November
    },
    {
      name: strings.months.december,
      value: Month.December
    }
  ];
}

export function getMonthObject(month) {
  switch (month) {
    case Month.January:
      return { name: strings.months.january, value: Month.January };
    case Month.February:
      return { name: strings.months.february, value: Month.February };
    case Month.March:
      return { name: strings.months.march, value: Month.March };
    case Month.April:
      return { name: strings.months.april, value: Month.April };
    case Month.May:
      return { name: strings.months.may, value: Month.May };
    case Month.Jun:
      return { name: strings.months.jun, value: Month.Jun };
    case Month.July:
      return { name: strings.months.july, value: Month.July };
    case Month.August:
      return { name: strings.months.august, value: Month.August };
    case Month.September:
      return { name: strings.months.september, value: Month.September };
    case Month.October:
      return { name: strings.months.october, value: Month.October };
    case Month.November:
      return { name: strings.months.november, value: Month.November };
    case Month.December:
      return { name: strings.months.december, value: Month.December };
  }
}

export function getMonthString(month) {
  switch (month) {
    case Month.January:
      return strings.months.january;
    case Month.February:
      return strings.months.february;
    case Month.March:
      return strings.months.march;
    case Month.April:
      return strings.months.april;
    case Month.May:
      return strings.months.may;
    case Month.Jun:
      return strings.months.jun;
    case Month.July:
      return strings.months.july;
    case Month.August:
      return strings.months.august;
    case Month.September:
      return strings.months.september;
    case Month.October:
      return strings.months.october;
    case Month.November:
      return strings.months.november;
    case Month.December:
      return strings.months.december;
  }
}
