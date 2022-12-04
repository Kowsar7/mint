import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  answerIndex: null,
  answerIndexes: [null, null, null, null, null, null, null],
  heightScale: "CM",
  weightScale: "KG",
  inputValue: {
    height_ft: "",
    height_in: "",
    height_cm: "",
    weight_lbs: "",
    weight_kg: "",
    weight_current_lbs: "",
    weight_current_kg: "",
    weight_goal_lbs: "",
    weight_goal_kg: "",
  },
  code: "",
  aid: "",
  QuizResult: {},
  CheckoutResult: null,
  PreCheckoutResult: {},
  inputError: false,
  token: "",
  type: "",
  checkout: false,
  checkout2: false,
  loading: false,
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
        answerIndex: null,
        answerIndexes: [null, null, null, null, null, null, null],
      });
    case actionTypes.ON_SCALE_CHANGE:
      return updateObject(state, {
        heightScale: state.heightScale === "FT" ? "CM" : "FT",
        weightScale: state.weightScale === "LBS" ? "KG" : "LBS",
      });
    case actionTypes.ON_INPUT_CHANGE:
      return action.HorW === "height"
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
        : updateObject(state, {
            inputValue: {
              ...state.inputValue,
              weight_lbs:
                action.scale === "lbs"
                  ? action.value
                  : state.inputValue.weight_lbs,
              weight_kg:
                action.scale === "kg"
                  ? action.value
                  : state.inputValue.weight_kg,
            },
          });
    case actionTypes.SAVE_FETCHED_QUIZ_DATA:
      return updateObject(state, {
        code: action.code,
        QuizResult: action.result,
        token: action.token,
      });
    case actionTypes.SAVE_FETCHED_CHECKOUT_DATA:
      return updateObject(state, {
        code: action.code,
        CheckoutResult: action.result,
        token: action.token,
      });
    case actionTypes.SAVE_FETCHED_PRECHECKOUT_DATA:
      return updateObject(state, {
        code: action.code,
        PreCheckoutResult: action.result,
        token: action.token,
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
    case actionTypes.GO_NEXT:
      return updateObject(state, {
        code: action.code,
        QuizResult: action.result,
      });
    case actionTypes.SHOW_INPUT_ERROR:
      return updateObject(state, {
        inputError: true,
      });
    case actionTypes.HIDE_INPUT_ERROR:
      return updateObject(state, {
        inputError: false,
      });
    case actionTypes.SAVE_TYPE:
      return updateObject(state, { type: action.linkType });
    case actionTypes.GO_TO_CHECKOUT:
      return updateObject(state, { checkout: true, checkout2: false });
    case actionTypes.GO_TO_CHECKOUT2:
      return updateObject(state, { checkout2: true, checkout: false });
    case actionTypes.LOADING_TRUE:
      return updateObject(state, { loading: true });
    case actionTypes.LOADING_FALSE:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default quizReducer;
