import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./bmiContainer.module.css";
import BmiNote from "./bmiNote/bmiNote";
import BmiListContainer from "./bmiListContainer/bmiListContainer";

const bmiContainer = (props) => {
  let lineBar = props.summery.lineBar;
  return (
    <AnimatedOnScroll animationIn="fadeInUp">
      <div className={classes.BmiContainer}>
        <div className={` ${classes.Container} ${classes.IsShown} `}>
          <div className={classes.SubContainer}>
            <h4 className={classes.VideoTitle}>{props.summery.video.text}</h4>
            <video
              src={props.summery.video.link}
              controls
              controlsList="nodownload"
              className={classes.Video}
            />
            <div className={classes.LeftContainer}>
              <div className={classes.HeaderRow} style={{ display: "none" }}>
                <span className={classes.Header}>BMI</span>
                <span className={classes.Label}>Normal - 21.5</span>
              </div>
              <div className={classes.ScaleContainer}>
                <div
                  className={` ${classes.ScaleSlider} ${classes.ScaleSliderIsShown} `}
                  style={{ left: lineBar.value + "%" }}
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
                    animationIn="fadeInLeftBig"
                    animationInDuration={2000}
                  >
                    <span className={classes.SliderDot}></span>
                  </AnimatedOnScroll>
                </div>
                <div className={classes.Scale}></div>

                <span className={classes.MinimumScaleValue}>پایین</span>
                <span className={classes.MinimumScaleValue}>متوسط</span>
                <span
                  className={` ${classes.MinimumScaleValue} ${classes.IsSelected} `}
                >
                  بالا
                </span>
                <span className={classes.MinimumScaleValue}>
                  بالاترین حد ممکن
                </span>
              </div>
              <BmiNote
                warningDescription={lineBar.warningDescription}
                warningTitle={lineBar.warningTitle}
              />
            </div>
            <div className={classes.Divider}></div>
            <div className={`${classes.RightContainer} ${classes.IsListShown}`}>
              <AnimatedOnScroll
                animationIn="fadeInRight"
                animationInDuration={2000}
              >
                <img
                  src={props.summery.borderImage}
                  alt=""
                  className={classes.Image}
                />
              </AnimatedOnScroll>
              <BmiListContainer items={props.summery.items} />

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
