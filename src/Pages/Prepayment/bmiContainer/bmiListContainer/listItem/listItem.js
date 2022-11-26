import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./listItem.module.css";

const item = (props) => {
  return (
    <AnimatedOnScroll animationIn="fadeInUp" animationInDuration={props.delay}>
      <li className={classes.Item}>
        <div className={classes.IconContainer}>{props.svg}</div>
        <div>
          <h4 className={classes.ItemTitle}>{props.title}</h4>
          <p className={classes.ItemText}>{props.text}</p>
        </div>
      </li>
    </AnimatedOnScroll>
  );
};

export default item;
