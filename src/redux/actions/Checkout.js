import axios from "axios";
import * as actionTypes from "./actionTypes";
import { goToCheckout2, saveFetchedCheckoutData } from "./Quiz";

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
    console.log("pre-checkout to checkout");
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/checkout.php?Authorization=" +
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
          dispatch(saveFetchedCheckoutData(code, result, token));
          dispatch(goToCheckout2());
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
    let result = getState().quiz.CheckoutResult;
    let planIndex = getState().checkout.planSelectedIndex;
    let planId = result.plans[planIndex].planId;
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/login/request.php?test=true&code=" +
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
          console.log("goNext-login", res);
          console.log(res.data.success);

          if (res.data.success === "true") {
            window.location = res.data.result.resultLink;
          } else {
            alert(res.data.message);
          }
        });
    }, 1000);
  };
};
