import strings from "../localization";

export function getCountryName(id) {
  switch (id) {
    case 1:
      return strings.countries.rs;
    case 2:
      return strings.countries.gb;
    case 3:
      return strings.countries.de;
    default:
      return "undefined";
  }
}
