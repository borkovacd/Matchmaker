import strings from "../localization";

const Gender = {
  Female: 1,
  Male: 2
};

export default Gender;

export function getGenderList() {
  return [
    {
      name: strings.gender.female,
      value: Gender.Female
    },
    {
      name: strings.gender.male,
      value: Gender.Male
    }
  ];
}
