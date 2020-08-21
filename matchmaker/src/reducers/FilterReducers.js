import * as Actions from "../actions/Actions";
import Gender from "../constants/Gender";

const defaultData = {
  gender: Gender.Male,
  interestedInGender: Gender.Female,
  ageMin: 20,
  ageMax: 30
};

const initialState = {
  data: defaultData
};

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
};

export default filterReducers;
