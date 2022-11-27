import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./bmiNote.module.css";

const bmiNote = (props) => {
  return (
    <AnimatedOnScroll animationIn="fadeInUp" animationInDelay={2000}>
      <div className={` ${classes.BMINote} ${classes.IsShown} `}>
        <div className={` ${classes.Container} ${classes.Overweight} `}>
          <div className={classes.WarningIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="7" width="4" height="13" fill="white"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5752 16.3364L14.7165 4.55455C14.1524 3.58636 13.1273 3 11.9991 3C10.8709 3 9.8459 3.58636 9.28179 4.55455L2.42308 16.3364C1.85897 17.3045 1.85897 18.4773 2.42308 19.4455C2.98719 20.4136 4.01221 21 5.14042 21H18.8716C19.9998 21 21.0248 20.4136 21.5889 19.4455C22.1393 18.4773 22.1393 17.3045 21.5752 16.3364ZM11.2011 7.73182C11.3594 7.56818 11.5589 7.48636 11.7928 7.48636H12.2055C12.4394 7.48636 12.6389 7.56818 12.7971 7.73182C12.9554 7.89545 13.0379 8.1 13.0242 8.325L12.8178 14.0182C12.804 14.4545 12.4394 14.8023 11.9991 14.8023C11.5589 14.8023 11.1942 14.4545 11.1805 14.0182L10.9741 8.325C10.9604 8.09318 11.0429 7.89545 11.2011 7.73182ZM11.9991 18.7432C11.4213 18.7432 10.9466 18.2795 10.9466 17.7C10.9466 17.1273 11.4144 16.6568 11.9991 16.6568C12.577 16.6568 13.0517 17.1205 13.0517 17.7C13.0517 18.2795 12.577 18.7432 11.9991 18.7432Z"
                fill="#FBC677"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className={classes.Title}>{props.warningTitle}:</h3>
            <p className={classes.Text}>{props.warningDescription}</p>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
};

export default bmiNote;
