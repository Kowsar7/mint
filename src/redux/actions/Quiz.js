import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";

export const answerQuestion = (index, aid) => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    index: index,
    aid: aid,
  };
};

export const changequestionPage = () => {
  return {
    type: actionTypes.CHANGE_QUESTION_PAGE,
  };
};

export const nullAnswerIndex = () => {
  return {
    type: actionTypes.NULL_ANSWER_INDEX,
  };
};

export const returnToPreviusQuestion = (qNum) => {
  return {
    type: actionTypes.RETURN_TO_PREVIUS_QUESTION,
    qNum: qNum,
  };
};

export const onArrow = (qNum) => {
  return (dispatch) => {
    if (qNum === 0) {
      setTimeout(() => {
        dispatch(actionCreators.returnToFirstPage());
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(returnToPreviusQuestion(qNum));
      }, 1000);
    }
  };
};

export const onScaleChange = () => {
  return {
    type: actionTypes.ON_SCALE_CHANGE,
  };
};

export const onInputChange = (value, scale, HorW) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    value: value,
    scale: scale,
    HorW: HorW,
  };
};

export const goToCalendar = () => {
  return {
    type: actionTypes.GO_TO_CALENDAR,
  };
};

export const showInputError = () => {
  return {
    type: actionTypes.SHOW_INPUT_ERROR,
  };
};

export const hideInputError = () => {
  return {
    type: actionTypes.HIDE_INPUT_ERROR,
  };
};

export const saveType = (linkType) => {
  return {
    type: actionTypes.SAVE_TYPE,
    linkType: linkType,
  };
};

export const goToCheckout = () => {
  return {
    type: actionTypes.GO_TO_CHECKOUT,
  };
};

export const goToCheckout2 = () => {
  return {
    type: actionTypes.GO_TO_CHECKOUT2,
  };
};

export const saveFetchedQuizData = (code, result, token) => {
  return {
    type: actionTypes.SAVE_FETCHED_QUIZ_DATA,
    code: code,
    result: result,
    token: token,
  };
};

export const saveFetchedPreCheckoutData = (code, result, token) => {
  return {
    type: actionTypes.SAVE_FETCHED_PRECHECKOUT_DATA,
    code: code,
    result: result,
    token: token,
  };
};

export const saveFetchedCheckoutData = (code, result, token) => {
  return {
    type: actionTypes.SAVE_FETCHED_CHECKOUT_DATA,
    code: code,
    result: result,
    token: token,
  };
};

export const fetchData = () => {
  return (dispatch, getState) => {
    axios
      .get(
        "https://mintdoctor.ir/process/v2/main/question.php?type=" +
          getState().quiz.type +
          "&aid=start"
      )
      .then((res) => {
        console.log("fetchData", res);
        const code = res.data.result.code;
        const result = res.data.result;
        const token = res.data.result.token;
        window.scrollTo(0, 0);
        dispatch(saveFetchedQuizData(code, result, token));
      });
  };
};

export const clickedonNextButton = (prevCode, answerIndexes) => {
  let aids = "";
  answerIndexes.map((item) => {
    if (item != null) {
      aids = aids + item + ",";
    }
    return aids;
  });

  return (dispatch, getState) => {
    if (aids === "") {
      aids = getState().quiz.QuizResult.answers[0].aid;
    }
    console.log(aids);
    console.log(getState());
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/question.php?Authorization=" +
            getState().quiz.token +
            "&type=" +
            getState().quiz.type +
            "&code=" +
            prevCode +
            "&aid=" +
            aids
        )
        .then((res) => {
          console.log("clickedonNextButton", res);
          const code = res.data.result.code;
          const result = res.data.result;
          const token = res.data.result.token;
          window.scrollTo(0, 0);
          dispatch(saveFetchedQuizData(code, result, token));
          dispatch(nullAnswerIndex());
        });
    }, 1000);
  };
};

export const goNext = (prevAid, prevCode) => {
  return (dispatch, getState) => {
    if (getState().quiz.QuizResult.isResult === "false") {
      prevAid === "main"
        ? setTimeout(() => dispatch(actionCreators.returnToFirstPage()), 1000)
        : setTimeout(() => {
            axios
              .get(
                "https://mintdoctor.ir/process/v2/main/question.php?Authorization=" +
                  getState().quiz.token +
                  "&type=" +
                  getState().quiz.type +
                  "&code=" +
                  prevCode +
                  "&aid=" +
                  prevAid
              )
              .then((res) => {
                console.log("goNext", res);
                const code = res.data.result.code;
                const result = res.data.result;
                const token = res.data.result.token;
                window.scrollTo(0, 0);
                dispatch(saveFetchedQuizData(code, result, token));
              });
          }, 1000);
    } else {
      console.log("pre-checkout");
      setTimeout(() => {
        axios
          .get(
            "https://mintdoctor.ir/process/v2/main/preCheckout.php?code=" +
              prevCode +
              "&Authorization=" +
              getState().quiz.token
          )
          .then((res) => {
            console.log("goNext-preCheckout", res);
            const code = res.data.result.code;
            const result = res.data.result;
            const token = res.data.result.token;
            window.scrollTo(0, 0);
            dispatch(saveFetchedPreCheckoutData(code, result, token));
            dispatch(goToCheckout());
          });
      }, 1000);
    }
  };
};

export const sendInput = (prevAid, prevCode, name) => {
  return (dispatch, getState) => {
    let value;
    switch (name) {
      case "height_cm":
        value = getState().quiz.inputValue.height_cm;
        if (value < 90 || value > 240) {
          dispatch(showInputError());
        } else {
          dispatch(hideInputError());
        }
        break;
      case "height_ft,height_in":
        value =
          getState().quiz.inputValue.height_ft +
          "," +
          getState().quiz.inputValue.height_in;
        if (
          getState().quiz.inputValue.height_ft < 3 ||
          getState().quiz.inputValue.height_ft > 7 ||
          getState().quiz.inputValue.height_in < 1 ||
          getState().quiz.inputValue.height_in > 11
        ) {
          dispatch(showInputError());
        } else {
          dispatch(hideInputError());
        }
        break;
      case "weight_kg":
        value = getState().quiz.inputValue.weight_kg;
        if (value < 25 || value > 300) {
          dispatch(showInputError());
        } else {
          dispatch(hideInputError());
        }
        break;
      case "weight_lbs":
        value = getState().quiz.inputValue.weight_lbs;
        if (value < 60 || value > 700) {
          dispatch(showInputError());
        } else {
          dispatch(hideInputError());
        }
        break;
      default:
        value = "";
    }
    if (getState().quiz.inputError === false) {
      setTimeout(() => {
        axios
          .get(
            "https://mintdoctor.ir/process/v2/main/question.php?Authorization=" +
              getState().quiz.token +
              "&type=" +
              getState().quiz.type +
              "&code=" +
              prevCode +
              "&aid=" +
              prevAid +
              "&" +
              name +
              "=" +
              value
          )
          .then((res) => {
            console.log("sendInput", res);
            const code = res.data.result.code;
            const result = res.data.result;
            const token = res.data.result.token;
            window.scrollTo(0, 0);
            dispatch(saveFetchedQuizData(code, result, token));
            dispatch(nullAnswerIndex());
          });
      }, 1000);
    }
  };
};

export const clickedonQuizCard = (index, prevAid, prevCode) => {
  return (dispatch, getState) => {
    dispatch(answerQuestion(index));
    if (getState().quiz.QuizResult.isResult === "false") {
      setTimeout(() => {
        axios
          .get(
            "https://mintdoctor.ir/process/v2/main/question.php?Authorization=" +
              getState().quiz.token +
              "&type=" +
              getState().quiz.type +
              "&code=" +
              prevCode +
              "&aid=" +
              prevAid
          )
          .then((res) => {
            console.log("clickedonQuizCard", res);
            const code = res.data.result.code;
            const result = res.data.result;
            const token = res.data.result.token;
            window.scrollTo(0, 0);
            dispatch(saveFetchedQuizData(code, result, token));
            dispatch(nullAnswerIndex());
          });
      }, 1000);
    } else {
      setTimeout(() => {
        axios
          .get(
            "https://mintdoctor.ir/process/v2/main/preCheckout.php?code=" +
              prevCode +
              "&Authorization=" +
              getState().quiz.token
          )
          .then((res) => {
            console.log("goNext-preCheckout", res);
            const result = res.data.result;
            const code = res.data.result.code;
            const token = res.data.result.token;
            window.scrollTo(0, 0);
            dispatch(saveFetchedPreCheckoutData(code, result, token));
            dispatch(goToCheckout());
          });
      }, 1000);
    }
  };
};
