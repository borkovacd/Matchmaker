export const TOGGLE_LOADER = "[SITE_DATA] TOGGLE_LOADER";
export const FORCE_HIDE_LOADER = "[SITE_DATA] FORCE_HIDE_LOADER";
export const LOAD_DATA = "[SITE_DATA] LOAD_DATA";
export const CHANGE_LANGUAGE = "[SITE_DATA] CHANGE_LANGUAGE";

export function showLoader() {
  return {
    type: TOGGLE_LOADER,
    loader: true
  };
}

export function forceHideLoader() {
  return {
    type: TOGGLE_LOADER
  };
}

export function hideLoader() {
  return {
    type: TOGGLE_LOADER,
    loader: false
  };
}

export function loadData(languages, countries, villages, users) {
  return {
    type: LOAD_DATA,
    languages: languages,
    countries: countries,
    villages: villages,
    users: users
  };
}

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language: language
  };
}
