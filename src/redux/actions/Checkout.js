import axios from "../axiosInstance";
import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";

export const choosePlan = (index) => {
  return {
    type: actionTypes.CHOOSE_PLAN,
    index: index,
  };
};

export const noDiscount = () => {
  return {
    type: actionTypes.NO_DISCOUNT,
  };
};

export const selectFaq = (index) => {
  return {
    type: actionTypes.SELECT_FAQ,
    index: index,
  };
};

export const sendPlanId = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(goToLogin());
    }, 1000);
  };
};

export const preToCheckout = () => {
  return (dispatch, getState) => {
    dispatch(actionCreators.loadingTrue());
    console.log("pre-checkout to checkout");
    setTimeout(() => {
      axios
        .get(
          "checkout.php?Authorization=" +
            getState().quiz.token +
            "&type=" +
            getState().quiz.type +
            "&code=" +
            getState().quiz.code
        )
        .then((res) => {
          console.log("goNext-checkout", res);
          const code = res.data.result.code;
          const result = res.data.result;
          const token = res.data.result.token;
          window.scrollTo(0, 0);
          dispatch(actionCreators.loadingFalse());
          dispatch(actionCreators.saveFetchedCheckoutData(code, result, token));
          dispatch(actionCreators.goToCheckout2());
        });
    }, 1000);
  };
};

export const goToLogin = () => {
  return {
    type: actionTypes.GO_TO_LOGIN,
  };
};

export const saveCheckoutData = (result) => {
  return {
    type: actionTypes.SAVE_FETCHED_PRECHECKOUT_DATA,
    PreCheckoutResult: result,
  };
};

export const onLoginInputChange = (value) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    value: value,
  };
};

export const purchase = () => {
  return (dispatch, getState) => {
    dispatch(actionCreators.loadingTrue());
    let result = getState().quiz.CheckoutResult;
    let planIndex = getState().checkout.planSelectedIndex;
    let planId = result.plans[planIndex].planId;
    setTimeout(() => {
      axios
        .get(
          "/login/request.php?code=" +
            getState().quiz.code +
            "&Authorization=" +
            getState().quiz.token +
            "&phoneNumber=" +
            getState().checkout.phoneNumber +
            "&plan=" +
            planId +
            "&discount=" +
            getState().checkout.discount
        )
        .then((res) => {
          dispatch(actionCreators.loadingFalse);
          console.log("goNext-login", res);

          if (res.data.success === "true") {
            window.location = res.data.result.resultLink;
          } else {
            alert(res.data.message);
          }
        });
    }, 1000);
  };
};
