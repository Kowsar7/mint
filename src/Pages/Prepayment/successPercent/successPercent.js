import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./successPercent.module.css";
import Count from "./count/count";
import Delayed from "../../../Components/TitleFade/Delayed/Delayed";

const SuccessPercent = (props) => {
  return (
    <AnimatedOnScroll animationIn="fadeInUp">
      <div className={classes.SuccessPercentContainer}>
        <div className={`${classes.Container} ${classes.IsShown}`}>
          <button className={classes.InfoButton}>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.InfoIcon}
            >
              <path
                d="M5.5 0C4.5111 0 3.5444 0.293245 2.72215 0.842652C1.89991 1.39206 1.25904 2.17295 0.880605 3.08658C0.502166 4.00021 0.40315 5.00555 0.596076 5.97545C0.789002 6.94536 1.26521 7.83627 1.96447 8.53553C2.66373 9.2348 3.55465 9.711 4.52455 9.90393C5.49446 10.0969 6.49979 9.99784 7.41342 9.6194C8.32705 9.24096 9.10794 8.6001 9.65735 7.77785C10.2068 6.95561 10.5 5.98891 10.5 5C10.5 4.34339 10.3707 3.69321 10.1194 3.08658C9.86813 2.47995 9.49983 1.92876 9.03554 1.46447C8.57124 1.00017 8.02005 0.631876 7.41342 0.380602C6.80679 0.129329 6.15661 0 5.5 0ZM6 7C6 7.13261 5.94732 7.25979 5.85356 7.35355C5.75979 7.44732 5.63261 7.5 5.5 7.5C5.36739 7.5 5.24022 7.44732 5.14645 7.35355C5.05268 7.25979 5 7.13261 5 7V4.5C5 4.36739 5.05268 4.24022 5.14645 4.14645C5.24022 4.05268 5.36739 4 5.5 4C5.63261 4 5.75979 4.05268 5.85356 4.14645C5.94732 4.24022 6 4.36739 6 4.5V7ZM5.5 3.5C5.40111 3.5 5.30444 3.47068 5.22222 3.41574C5.13999 3.36079 5.07591 3.28271 5.03806 3.19134C5.00022 3.09998 4.99032 2.99945 5.00961 2.90246C5.0289 2.80546 5.07652 2.71637 5.14645 2.64645C5.21638 2.57652 5.30547 2.5289 5.40246 2.50961C5.49945 2.49031 5.59998 2.50022 5.69134 2.53806C5.78271 2.5759 5.8608 2.63999 5.91574 2.72222C5.97068 2.80444 6 2.90111 6 3C6 3.13261 5.94732 3.25979 5.85356 3.35355C5.75979 3.44732 5.63261 3.5 5.5 3.5Z"
                fill="#a3b3c6"
              ></path>
            </svg>
          </button>
          <div>
            <AnimatedOnScroll animationIn="fadeIn">
              <span className={classes.Percent}>
                <Delayed waitBeforeShow={2000}>
                  <Count number={props.percentage.value} duration={2} />
                </Delayed>
              </span>
              {/* <span className={classes.PercentUnit}>%</span> */}
            </AnimatedOnScroll>
          </div>
          <div className={classes.Text}>
            <div
              dangerouslySetInnerHTML={{ __html: props.percentage.description }}
            />
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
};

export default SuccessPercent;
