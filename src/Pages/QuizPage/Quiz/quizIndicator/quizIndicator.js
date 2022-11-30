import React from "react";

import classes from "./quizIndicator.module.css";

const quizIndicator = (props) => {
  const allQuestions = parseInt(props.result.allQuestions, 10);
  const currentQuestion = parseInt(props.result.currentQuestion, 10);

  const progress = (currentQuestion / allQuestions).toPrecision(3) * 100 + "%";

  return (
    <div className={classes.Container}>
      <div className={classes.Bar}>
        <div
          className={classes.BarFilled}
          style={{ "--bar-width": progress }}
        ></div>
      </div>
    </div>
  );
};

export default quizIndicator;
