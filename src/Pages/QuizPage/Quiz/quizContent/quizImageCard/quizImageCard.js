import React from "react";
import { connect } from "react-redux";

import classes from "./quizImageCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizImageCard = (props) => {
  let cardStyle;
  let cardStyles = [null, null, null, null, null, null, null, null, null];

  if (props.multiSelect === "true") {
    for (let i = 0; i < 10; i++) {
      cardStyles[i] =
        props.answerIndexes[i] !== null
          ? [classes.Answer]
          : [classes.QuizCardContainer];
    }
  } else if (props.multiSelect !== "true") {
    cardStyle =
      props.answerIndex === props.idx
        ? [classes.QuizCardContainer, classes.Answer].join(" ")
        : [classes.QuizCardContainer];
  }

  return (
    <div
      className={
        props.multiSelect === "true" ? cardStyles[props.idx] : cardStyle
      }
    >
      <article
        className={classes.QuizCardContent}
        onClick={() => props.onAnswer(props.idx, props.aid, props.code)}
      >
        <img className={classes.Image} src={props.image} alt="" />
        <div className={classes.TextContainer}>
          <div className={classes.QuizCardHeader}>{props.text}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
      </article>
      {props.multiSelect ? (
        props.answerIndexes[props.idx] !== null ? (
          <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
        ) : null
      ) : props.answerIndex === props.idx ? (
        <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  answerIndex: state.quiz.answerIndex,
  code: state.quiz.code,
  answerIndexes: state.quiz.answerIndexes,
});

export default connect(mapStateToProps)(quizImageCard);
