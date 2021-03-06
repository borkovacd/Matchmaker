import strings from "../localization";

const Gender = {
  Male: 1,
  Female: 2,
};

export default Gender;

export function getGenderList() {
  return [
    {
      name: strings.gender.male,
      value: Gender.Male,
    },
    {
      name: strings.gender.female,
      value: Gender.Female,
    },
  ];
}

export function getGenderString(number) {
  switch (number) {
    case 1:
      return strings.gender.male;
    case 2:
      return strings.gender.female;
  }
}
