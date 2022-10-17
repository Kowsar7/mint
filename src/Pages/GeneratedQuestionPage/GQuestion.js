import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import { Navigate } from "react-router";

class GQuestion extends Component {
  state = {
    isAnswered: null,
    questionNum: 0,
    changePage: null,
  };

  answerHandler = (idx) => {
    this.setState({
      isAnswered: idx,
    });
    if (this.state.questionNum !== 16) {
      setTimeout(
        () =>
          this.setState((prevState) => ({
            ...prevState,
            questionNum: prevState.questionNum + 1,
            isAnswered: false,
          })),
        1000
      );
    }
  };

  onArrowHandler = () => {
    if (this.state.questionNum === 0) {
      setTimeout(
        () =>
          this.setState({
            changePage: <Navigate to="/" />,
          }),
        1000
      );
    } else {
      setTimeout(
        () =>
          this.setState((prevState) => ({
            ...prevState,
            questionNum: prevState.questionNum - 1,
          })),
        1000
      );
    }
  };

  render() {
    return (
      <Auxiliary>
        <div className={classes.Container}>
          <div
            className={classes.ImageContainer}
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.25))",
            }}
          >
            <img
              className={classes.LeftImage}
              {...Questions[this.state.questionNum].leftImage}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            <Quiz
              isAnswered={this.state.isAnswered}
              onArrow={this.onArrowHandler}
              questionNum={this.state.questionNum}
              onAnswer={this.answerHandler}
            />
            <img
              className={classes.RightImage}
              {...Questions[this.state.questionNum].rightImage}
              alt=""
            />
          </div>
        </div>
        {this.state.changePage}
      </Auxiliary>
    );
  }
}

export default GQuestion;
