import React from "react";

import classes from "./Introductory.module.css";
import IntItem from "./intItem/intItem";

const introductory = (props) => {
  return (
    <div className={classes.ContentContainer} style={{ display: "none" }}>
      <div className={classes.CheckoutPlanBenefits}>
        <div className={classes.PicsListWithImageContainer}>
          <div>
            <div className={classes.PicsListWithImageTitle}>
              <h2 className={classes.Title}>آنچه دریافت می‌کنید</h2>
            </div>
            <ul>
              {props.result.wyg.map((item, index) => (
                <IntItem
                  key={index}
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </ul>
            <div className={classes.PicsListWithImageNote}>
              <p className={classes.Footnote}>
                Workouts &amp; Coach support are currently available on our
                mobile apps for Android &amp; iOS
              </p>
            </div>
          </div>
          <div className={classes.ColImg}>
            <img
              className={classes.Image}
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default introductory;
