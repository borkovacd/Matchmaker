import * as Actions from "../actions/Actions";
import strings from "../localization";

const initialState = {
  loader: false,
  loaderCount: 0,
  languages: [],
  villages: [],
  users: [],
  language: "en"
};

const siteDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_LOADER:
      let loaderCount = action.loader
        ? state.loaderCount + 1
        : state.loaderCount - 1;

      return {
        ...state,
        loaderCount: loaderCount,
        loader: loaderCount > 0
      };
    case Actions.FORCE_HIDE_LOADER:
      return {
        ...state,
        loaderCount: 0,
        loader: false
      };
    case Actions.LOAD_DATA:
      return {
        ...state,
        languages: action.languages,
        villages: action.villages,
        users: action.users
      };
    case Actions.CHANGE_LANGUAGE:
      strings.setLanguage(action.language);
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};

export default siteDataReducers;
