import { combineReducers } from 'redux';
import authReducers from './AuthReducers';
import siteDataReducers from "./SiteDataReducers";


const appReducers = combineReducers({
    authReducers,
    siteDataReducers,
});

export default appReducers;