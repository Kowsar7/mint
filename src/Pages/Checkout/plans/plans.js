import React from "react";
import { connect } from "react-redux";

import classes from "./plans.module.css";
import CommonContainer from "./commonContainer/commonContainer";
import Breakdown from "./breakdown/breakdown";
// import PromoCodeForm from "./promoCodeForm/promoCodeForm";
import Legal from "./legal/legal";
import * as actionCreators from "../../../redux/actions";

const plans = (props) => {
  return (
    <div className={classes.Plans}>
      <div className={classes.Container}>
        <div className={classes.ChoosePlanGenericContainer}>
          <h3 className={classes.ChoosePlanHeader}>انتخاب خدمات مورد نیاز</h3>
          <CommonContainer result={props.result} />
          <div className={classes.PlanListContainer}>
            {props.result.plans.map((plan, index) => (
              <Breakdown
                key={"plan" + index}
                index={index}
                planName={plan.title}
                price={plan.price}
                discountPrice={plan.discountPrice}
                description={plan.description}
                active={props.planSelectedIndex === index ? "true" : "false"}
                id="month"
                clicked={props.clicked}
              />
            ))}
          </div>
          {/* <PromoCodeForm /> */}
        </div>
        <div className={classes.ButtonContainer}>
          <button
            type="button"
            className={classes.Button}
            data-button="checkout-get-plan"
            onClick={() => props.onButton()}
          >
            دریافت برنامه
          </button>
        </div>
        <div style={{ display: "none" }} className={classes.LegalContainer}>
          <Legal />
        </div>
        <div className={classes.SafeCheckout} style={{ display: "none" }}>
          <div className={classes.ChoosePlanSafeCheckout}>
            <span className={classes.SafeCheckoutText}>
              Guaranteed <b>Safe</b> Checkout
            </span>
            <img
              className={classes.ChoosePlanSafeCheckoutCards}
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/Color_siuuw2 2x"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onButton: () => dispatch(actionCreators.sendPlanId()),
});

export default connect(null, mapDispatchToProps)(plans);
