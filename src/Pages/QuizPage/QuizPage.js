import React, { Component } from "react";

import { Navigate } from "react-router";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import Parasite from "./Parasite/Parasite";
// import LinearProgressbar from "../../Components/Progressbar/linear/linearProgressbar";
// import CircularStatic from "../../Components/Progressbar/circular/circularProgressbar";
import ProgressContainer from "./Quiz/progressContainer/progressContainer";

class QuizPage extends Component {
  componentDidMount = () => {
    const params = new URLSearchParams(window.location.search); // id=123
    let type = params.get("type");

    this.props.onSaveType(type);
    console.log(type);

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
            <Parasite result={this.props.result} goNext={this.props.goNext} />
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
              <Quiz result={this.props.result} />
              <img
                className={classes.RightImage}
                src={this.props.result.borderImage}
                alt=""
              />
            </div>
          </div>
        )}
        {/* {this.props.isGenderSelected === false ? <Navigate to="/" /> : null} */}
        {this.props.checkout === true ? <Navigate to="/preCheckout" /> : null}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => ({
  // isGenderSelected: state.genderSel.isAnswered,
  code: state.quiz.code,
  aid: state.quiz.aid,
  result: state.quiz.result,
  questionType: state.quiz.result.questionType,
  parasite: state.quiz.result.parasite,
  checkout: state.quiz.checkout,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actionCreators.fetchData()),
  goNext: (aid, code) => dispatch(actionCreators.goNext(aid, code)),
  onSaveType: (linkType) => dispatch(actionCreators.saveType(linkType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
