import React from "react";

import classes from "./plans.module.css";
import Breakdown from "./breakdown/breakdown";
import PromoCodeForm from "./promoCodeForm/promoCodeForm";
import Legal from "./legal/legal";

const plans = (peops) => {
  return (
    <div className={classes.Plans}>
      <div className={classes.Container}>
        <div className={classes.ChoosePlanGenericContainer}>
          <h3 className={classes.ChoosePlanHeader}>Choose Your Plan</h3>
          <div className={classes.PlanListContainer}>
            <Breakdown
              palnName="7-DAY PLAN"
              price="9.99"
              singleLine="7 days"
              dollors="1"
              cents="43"
              data="affiliates-introductory-3-subs-1-week"
            />
            <Breakdown
              palnName="1-MONTH PLAN"
              price="28.56"
              singleLine="1 month"
              dollors="1"
              cents="02"
              data="affiliates-introductory-3-subs-1-month"
            />
            <Breakdown
              palnName="3-MONTH PLAN"
              price="42.84"
              singleLine="3 months"
              dollors="0"
              cents="36"
              data="affiliates-introductory-3-subs-3-month"
            />
          </div>
          <PromoCodeForm />
        </div>
        <div className={classes.ButtonContainer}>
          <button
            type="button"
            className={classes.Button}
            data-button="checkout-get-plan"
          >
            GET MY PLAN
          </button>
        </div>
        <div className={classes.LegalContainer}>
          <Legal />
        </div>
        <div className={classes.SafeCheckout}>
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

export default plans;
