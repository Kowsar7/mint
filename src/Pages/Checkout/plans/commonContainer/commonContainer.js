import React from "react";

import classes from "./commonContainer.module.css";

const commonContainer = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.PersonalizationItem}>
        <img
          src="https://mint-family.com/api/files/v2/wyg/target.png"
          alt=""
          className={classes.Icon}
        />
        <div className={classes.Column}>
          <span className={classes.Label}>هدف</span>
          <span className={classes.Value}>{props.result.target}</span>
        </div>
      </div>
      <div className={classes.Separator}></div>
      <div className={classes.PersonalizationItem}>
        <img
          src="https://mint-family.com/api/files/v2/wyg/regime.png"
          alt=""
          className={classes.Icon}
        />
        <div className={classes.Column}>
          <span className={classes.Label}>نوع رژیم</span>
          <span className={classes.Value}>{props.result.regimeType}</span>
        </div>
      </div>
    </div>
  );
};

export default commonContainer;
