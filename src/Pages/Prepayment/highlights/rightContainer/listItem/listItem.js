import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./listItem.module.css";

const listItem = (props) => {
  return (
    <AnimatedOnScroll animationIn="fadeInUp" animationInDelay={props.delay}>
      <li className={classes.Item}>
        <div className={classes.IconContainer}>
          <img src={props.icon} alt="" className={classes.Icon} />{" "}
        </div>
        <div>
          <h4 className={classes.ItemTitle}>{props.title}</h4>
          <div
            className={classes.ItemText}
            style={{ color: props.descriptionColor }}
          >
            <div dangerouslySetInnerHTML={{ __html: props.text }} />
          </div>
        </div>
      </li>
    </AnimatedOnScroll>
  );
};

export default listItem;
