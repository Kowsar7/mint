import React from "react";

import classes from "./MultiSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";
import QuizImageCard from "../quizImageCard/quizImageCard";
import Button from "../../../../../Components/UI/Button/button";
import { connect } from "react-redux";
import { clickedonNextButton } from "../../../../../redux/actions";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";
import * as actionTypes from "../../../../../redux/actions/actionTypes";

const MultiSelectQuestion = (props) => {
  let dataCard = props.dataCard;

  return (
    <Auxiliary>
      <div className={classes.QuizContent}>
        <div className={classes.Header}>
          <h1 className={classes.HeaderTitle}>{props.header}</h1>
        </div>
        <section className={classes.QuestionsSection}>
          {!props.optionwithimage
            ? dataCard.map((opt, index) => (
                <QuizCard
                  {...opt}
                  key={opt.aid}
                  idx={index}
                  backgroundImg={props.borderImage}
                  onAnswer={props.clickedonMultiSelectCard}
                  multiSelect="true"
                />
              ))
            : dataCard.map((opt) => (
                <QuizImageCard
                  {...opt}
                  key={opt.dataCardId}
                  idx={opt.dataCardIdx}
                  onAnswer={props.clickedonMultiSelectCard}
                  multiSelect="true"
                />
              ))}
        </section>
      </div>
      <div className={classes.FixedButtonContainer}>
        <div className={classes.ButtonContainer}>
          <Button
            text="NEXT"
            onAnswer={() =>
              props.clickedonButton(props.code, props.answerIndexes)
            }
          />
        </div>
      </div>
    </Auxiliary>
  );
};

const mapStateToProps = (state) => {
  return {
    qNum: state.quiz.questionNum,
    code: state.quiz.code,
    answerIndexes: state.quiz.answerIndexes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickedonButton: (code, answerIndexes) =>
      dispatch(clickedonNextButton(code, answerIndexes)),
    clickedonMultiSelectCard: (index, aid) =>
      dispatch({ type: actionTypes.ANSWER_QUESTION, index: index, aid: aid }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelectQuestion);
