import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  isMale: false,
  isFemale: false,
  isAnswered: false,
};

const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENDER_SELECTION:
      return action.gender === "Male"
        ? updateObject(state, { isMale: true, isFemale: false })
        : updateObject(state, { isMale: false, isFemale: true });
    case actionTypes.CHANGE_PAGE:
      return updateObject(state, { isAnswered: true });
    case actionTypes.RETURN_TO_FIRST_PAGE:
      return updateObject(state, { isAnswered: false });
    default:
      return state;
  }
};

export default genderReducer;
