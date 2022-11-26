import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./bmiContainer.module.css";
import BmiNote from "./bmiNote/bmiNote";
import BmiListContainer from "./bmiListContainer/bmiListContainer";

const bmiContainer = (props) => {
  return (
    <AnimatedOnScroll animationIn="fadeInUp">
      <div className={classes.BmiContainer}>
        <div className={` ${classes.Container} ${classes.IsShown} `}>
          <div className={classes.SubContainer}>
            <div className={classes.LeftContainer}>
              <div className={classes.HeaderRow}>
                <span className={classes.Header}>BMI</span>
                <span className={classes.Label}>Normal - 21.5</span>
              </div>
              <div className={classes.ScaleContainer}>
                <div
                  className={` ${classes.ScaleSlider} ${classes.ScaleSliderIsShown} `}
                  style={{ left: "63.4766%" }}
                >
                  <AnimatedOnScroll
                    animationIn="fadeInUp"
                    animationInDelay={2000}
                  >
                    <span className={classes.SliderLabel}>You - 25.39</span>
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.SliderLabelArrowImage}
                    >
                      <path
                        d="M6.26822 5.07814C5.86843 5.55789 5.13157 5.55789 4.73178 5.07814L0.499999 8.69637e-07L10.5 0L6.26822 5.07814Z"
                        fill="var(--neutral700Color)"
                      ></path>
                    </svg>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll
                    animationIn="fadeInLeftBig"
                    animationInDuration={2000}
                  >
                    <span className={classes.SliderDot}></span>
                  </AnimatedOnScroll>
                </div>
                <div className={classes.Scale}></div>

                <span className={classes.MinimumScaleValue}>UNDERWEIGHT</span>
                <span className={classes.MinimumScaleValue}>NORMAL</span>
                <span
                  className={` ${classes.MinimumScaleValue} ${classes.IsSelected} `}
                >
                  OVERWEIGHT
                </span>
                <span className={classes.MinimumScaleValue}>OBESE</span>
              </div>
              <BmiNote />
            </div>
            <div className={classes.Divider}></div>
            <div className={`${classes.RightContainer} ${classes.IsListShown}`}>
              <AnimatedOnScroll
                animationIn="fadeInRight"
                animationInDuration={2000}
              >
                <img
                  src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/el3q8xfjj38lwdf6syss"
                  srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/el3q8xfjj38lwdf6syss 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/el3q8xfjj38lwdf6syss 2x"
                  alt=""
                  className={classes.Image}
                />
              </AnimatedOnScroll>
              <BmiListContainer />

              <div className={classes.NoteContainer}>
                <p className={classes.NoteText}>
                  <b>Mesomorph:</b> Medium frame, more muscular{" "}
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </AnimatedOnScroll>
  );
};

export default bmiContainer;
