import React from "react";

import classes from "./bmiListContainer.module.css";
import Item from "./listItem/listItem";
import AnimationArrows from "./animationArrows/animationArrows";

const bmiListContainer = (props) => {
  return (
    <div className={classes.ListContainer}>
      <div className={`${classes.Container} ${classes.IsShown}`}>
        <ul className={classes.List}>
          {props.items.map((item, index) => (
            <Item
              key={index}
              delay={index * 500}
              title={item.title}
              text={item.description}
              descriptionColor={item.descriptionColor}
            />
          ))}
        </ul>
      </div>
      <AnimationArrows />
    </div>
  );
};

export default bmiListContainer;
