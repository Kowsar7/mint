import React from "react";

import classes from "./highlights.module.css";
// import Graph from "./graph/graph";
import GraphImg from "./graph/graph.PNG";
import RightContainer from "./rightContainer/rightContainer";

const highlights = (props) => {
  return (
    <div className={classes.HighlightsContainer}>
      <div className={`${classes.Container} ${classes.IsShown}`}>
        <div className={classes.SubContainer}>
          <div className={classes.LeftContainer}>
            <h3 className={classes.Title}>Get Excited!</h3>
            <p className={classes.Text}>
              Start today, follow the plan, and you should{" "}
              <span className={classes.AnimationLabel1}>Lose 5 kg </span>{" "}
              <span className={classes.AnimationLabel2}>by</span>{" "}
              <span className={classes.AnimationLabel3}>January 2023</span>
            </p>
            {/* <Graph /> */}
            <img src={GraphImg} alt="" style={{ width: "100%" }} />
            <p className={classes.DisclaimerText}>
              *Based on the data of users who log their progress in the app.
              Consult your physician first. The chart is a non-customized
              illustration and results may vary
            </p>
          </div>
          <div className={classes.Divider}></div>
          <RightContainer />
          <div className={classes.NoteContainer}>
            <p className={classes.NoteText}>
              Customized according to your <b>Body Type &amp; BMI</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default highlights;
