import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./highlights.module.css";
// import Graph from "./graph/graph";
// import GraphImg from "./graph/graph.PNG";
import RightContainer from "./rightContainer/rightContainer";

const highlights = (props) => {
  let lineBar = props.highlight.lineBar;
  return (
    <AnimatedOnScroll animationIn="fadeInUp">
      <div className={classes.HighlightsContainer}>
        <div className={`${classes.Container} ${classes.IsShown}`}>
          <div className={classes.SubContainer}>
            {/* <div className={classes.LeftContainer}>
              <h3 className={classes.Title}>Get Excited!</h3>
              <p className={classes.Text}>
                Start today, follow the plan, and you should{" "}
                <span className={classes.AnimationLabel1}>Lose 5 kg </span>{" "}
                <span className={classes.AnimationLabel2}>by</span>{" "}
                <span className={classes.AnimationLabel3}>January 2023</span>
              </p>
              <img src={GraphImg} alt="" style={{ width: "100%" }} />
              <p className={classes.DisclaimerText}>
                *Based on the data of users who log their progress in the app.
                Consult your physician first. The chart is a non-customized
                illustration and results may vary
              </p>
            </div> */}
            <div className={classes.LeftContainer}>
              <div className={classes.HeaderRow} style={{ display: "none" }}>
                <span className={classes.Header}>BMI</span>
                <span className={classes.Label}>Normal - 21.5</span>
              </div>
              <div className={classes.ScaleContainer}>
                <div
                  className={` ${classes.ScaleSlider} ${classes.ScaleSliderIsShown} `}
                  style={{ right: lineBar.value + "%" }}
                >
                  <AnimatedOnScroll
                    animationIn="fadeInUp"
                    animationInDelay={2000}
                  >
                    <span className={classes.SliderLabel}>{lineBar.label}</span>
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
                    animationIn="fadeInRightBig"
                    animationInDelay={2000}
                  >
                    <span className={classes.SliderDot}></span>
                  </AnimatedOnScroll>
                </div>
                <div className={classes.Scale}></div>

                <span className={classes.MinimumScaleValue}>پایین</span>
                <span className={classes.MinimumScaleValue}>متوسط</span>
                <span className={` ${classes.MinimumScaleValue}  `}>بالا</span>
                <span className={classes.MinimumScaleValue}>
                  بالاترین حد ممکن
                </span>
              </div>
            </div>
            <div className={classes.Divider}></div>
            <RightContainer highlight={props.highlight} />
            <div className={classes.NoteContainer} style={{ display: "none" }}>
              <p className={classes.NoteText}>
                Customized according to your <b>Body Type &amp; BMI</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
};

export default highlights;
