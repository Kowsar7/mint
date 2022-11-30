import React, { Component } from "react";

import { Navigate } from "react-router";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import Parasite from "./Parasite/Parasite";
import ProgressContainer from "./Quiz/progressContainer/progressContainer";

class QuizPage extends Component {
  componentDidMount = () => {
    if (this.props.type === "") {
      const params = new URLSearchParams(window.location.search);
      let type = params.get("type");

      this.props.onSaveType(type);
      console.log(type);
    }

    this.props.fetchData();
    window.scrollTo(0, 0);
  };

  state = {
    checkout: false,
  };

  onCheckout = () => {
    this.setState({ checkout: true });
  };

  render() {
    return (
      <Auxiliary>
        {this.props.questionType === "parasite" ? (
          <div
            className={classes.ParContainer}
            style={{
              backgroundColor: this.props.parasite.bgColor,
              color: this.props.parasite.textColor,
            }}
          >
            <ProgressContainer result={this.props.result} currentProgress />
            <Parasite
              result={this.props.result}
              goNext={this.props.goNext}
              loading={this.props.loading}
            />
          </div>
        ) : (
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
                src={this.props.result.borderImage}
                alt=""
              />
            </div>
            <div className={classes.ContentContainer}>
              <Quiz result={this.props.result} loading={this.props.loading} />
              <img
                className={classes.RightImage}
                src={this.props.result.borderImage}
                alt=""
              />
            </div>
          </div>
        )}
        {this.props.checkout === true ? <Navigate to="/preCheckout" /> : null}
        {this.props.checkout2 === true ? <Navigate to="/checkout" /> : null}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => ({
  type: state.quiz.type,
  code: state.quiz.code,
  aid: state.quiz.aid,
  result: state.quiz.QuizResult,
  questionType: state.quiz.QuizResult.questionType,
  parasite: state.quiz.QuizResult.parasite,
  checkout: state.quiz.checkout,
  checkout2: state.quiz.checkout2,
  loading: state.quiz.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actionCreators.fetchData()),
  goNext: (aid, code) => dispatch(actionCreators.goNext(aid, code)),
  onSaveType: (linkType) => dispatch(actionCreators.saveType(linkType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
