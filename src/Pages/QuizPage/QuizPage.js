import React, { Component } from "react";

import { Navigate } from "react-router";
import { connect } from "react-redux";
import { fetchData, goNext } from "../../redux/actions";
import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import Parasite from "./Parasite/Parasite";
// import LinearProgressbar from "../../Components/Progressbar/linear/linearProgressbar";
// import CircularStatic from "../../Components/Progressbar/circular/circularProgressbar";

class QuizPage extends Component {
  componentDidMount = () => {
    this.props.fetchData();
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
            <Parasite
              result={this.props.result}
              goNext={this.props.goNext}
              // goToCheckout={this.onCheckout}
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
              <Quiz result={this.props.result} />
              <img
                className={classes.RightImage}
                src={this.props.result.borderImage}
                alt=""
              />
            </div>
          </div>
        )}
        {this.props.isGenderSelected === false ? <Navigate to="/" /> : null}
        {this.state.checkout === true ? <Navigate to="/checkout" /> : null}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  isGenderSelected: state.genderSel.isAnswered,
  code: state.quiz.code,
  aid: state.quiz.aid,
  result: state.quiz.result,
  questionType: state.quiz.result.questionType,
  parasite: state.quiz.result.parasite,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  goNext: (aid, code) => dispatch(goNext(aid, code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
