import React from "react";

import classes from "./listItem.module.css";

const listItem = (props) => {
  return (
    <li className={classes.Item}>
      <div className={classes.IconContainer}>{props.svg}</div>
      <div>
        <h4 className={classes.ItemTitle}>{props.title}</h4>
        <p className={classes.ItemText}>{props.text}</p>
      </div>
    </li>
  );
};

export default listItem;
