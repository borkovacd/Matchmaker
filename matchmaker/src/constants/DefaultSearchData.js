import Gender from "./Gender";

const DefaultSearchData = {
  gender: Gender.Male,
  interestedInGender: Gender.Female,
  ageMin: 20,
  ageMax: 30,
  page: 1,
  perPage: 2,
};

export function getSearchDataParams() {
  return [
    { name: "gender", default: DefaultSearchData.gender },
    {
      name: "interestedInGender",
      default: DefaultSearchData.interestedInGender,
    },
    { name: "ageMin", default: DefaultSearchData.ageMin },
    { name: "ageMax", default: DefaultSearchData.ageMax },
    { name: "page", default: DefaultSearchData.page },
    { name: "perPage", default: DefaultSearchData.perPage },
    { name: "search", default: false },
  ];
}

export default DefaultSearchData;
