import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import siteDataReducers from "./SiteDataReducers";
import filterReducers from "./FilterReducers";

const appReducers = combineReducers({
  authReducers,
  siteDataReducers,
  filterReducers
});

export default appReducers;
