import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  answerIndex: null,
  answerIndexes: [null, null, null, null, null, null, null],
  questionNum: 0,
  heightScale: "FT",
  weightScale: "LBS",
  inputValue: {
    height_ft: "",
    height_in: "",
    height_cm: "",
    weight_current_lbs: "",
    weight_current_kg: "",
    weight_goal_lbs: "",
    weight_goal_kg: "",
  },
  code: "",
  aid: "",
  result: {},
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ANSWER_QUESTION:
      return updateObject(state, {
        answerIndex: action.index,
        answerIndexes: state.answerIndexes.map((item, index) => {
          // eslint-disable-next-line
          if (index == action.index) {
            return item === null ? action.aid : null;
          } else {
            return item;
          }
        }),
      });
    case actionTypes.CHANGE_QUESTION_PAGE:
      return updateObject(state, {
        questionNum: state.questionNum + 1,
        answerIndex: null,
        answerIndexes: [null, null, null, null, null, null, null],
      });
    case actionTypes.RETURN_TO_PREVIUS_QUESTION:
      return updateObject(state, { questionNum: state.questionNum - 1 });
    case actionTypes.ON_SCALE_CHANGE:
      return updateObject(state, {
        heightScale: state.heightScale === "FT" ? "CM" : "FT",
        weightScale: state.weightScale === "LBS" ? "KG" : "LBS",
      });
    case actionTypes.ON_INPUT_CHANGE:
      return action.qNum === 2
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              height_cm:
                action.scale === "cm"
                  ? action.value
                  : state.inputValue.height_cm,
              height_ft:
                action.scale === "ft"
                  ? action.value
                  : state.inputValue.height_ft,
              height_in:
                action.scale === "in"
                  ? action.value
                  : state.inputValue.height_in,
            },
          })
        : action.qNum === 3
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              weight_current_lbs:
                action.scale === "lbs"
                  ? action.value
                  : state.inputValue.weight_current_lbs,
              weight_current_kg:
                action.scale === "kg"
                  ? action.value
                  : state.inputValue.weight_current_kg,
            },
          })
        : action.qNum === 4
        ? updateObject(state, {
            inputValue: {
              ...state.inputValue,
              weight_goal_lbs:
                action.scale === "lbs"
                  ? action.value
                  : state.inputValue.weight_goal_lbs,
              weight_goal_kg:
                action.scale === "kg"
                  ? action.value
                  : state.inputValue.weight_goal_kg,
            },
          })
        : state;
    case actionTypes.SAVE_FETCHED_DATA:
      return updateObject(state, {
        code: action.code,
        result: action.result,
      });
    case actionTypes.NULL_ANSWER_INDEX:
      return updateObject(state, {
        answerIndex: null,
        answerIndexes: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      });
    default:
      return state;
  }
};

export default quizReducer;
