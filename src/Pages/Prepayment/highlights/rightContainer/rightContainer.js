import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./rightContainer.module.css";
import ListItem from "./listItem/listItem";
import AnimationArrows from "../../bmiContainer/bmiListContainer/animationArrows/animationArrows";

const rightContainer = (props) => {
  return (
    <div className={classes.RightContainer}>
      <AnimatedOnScroll animationIn="fadeInRight" animationInDuration={2000}>
        <img
          src={props.highlight.borderImage}
          alt=""
          className={`${classes.Image} ${classes.IsShown}`}
        />
      </AnimatedOnScroll>
      <div className={classes.ListContainer}>
        <div className={`${classes.Container} ${classes.IsShown}`}>
          <ul className={classes.List}>
            {props.highlight.items.map((item, index) => (
              <ListItem
                key={index}
                delay={index * 500}
                title={item.title}
                text={item.description}
                descriptionColor={item.descriptionColor}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <AnimationArrows />
      </div>
    </div>
  );
};

export default rightContainer;
