import React from "react";

import classes from "./appStoreReview.module.css";

const AppStoreReview = (props) => {
  let stars = [];
  for (var i = 0; i < props.rate; i++) {
    stars.push(
      <img
        key={i}
        src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
        alt=""
      />
    );
  }

  return (
    <div className={classes.AppStoreReview}>
      <div className={classes.Title}>
        <div className={classes.TitleGroup}>
          <img
            src={props.profileImage}
            className={classes.ProfileImage}
            alt=""
          />
          <span className={classes.Name}>{props.nameText}</span>

          <div className={classes.DateandStars}>
            <span className={classes.Date}>{props.dateText}</span>
            <br />
            <span className={classes.Starts}>{stars}</span>
          </div>
        </div>

        <div className={classes.TitleGroup}>
          <h3 className={classes.TitleText}>{props.titleText}</h3>
        </div>
      </div>
      <div className={classes.ReviewExpandable}>
        <p>
          {props.comment}
          <br></br>
          <img src={props.image} alt="" className={classes.Image} />
        </p>
        <button
          style={{ display: "none" }}
          className={classes.ExpandButton}
          onClick={() =>
            props.openModal(
              props.titleText,
              props.dateText,
              props.nameText,
              props.comment,
              props.image
            )
          }
        >
          بیشتر
        </button>
      </div>
    </div>
  );
};

export default AppStoreReview;
