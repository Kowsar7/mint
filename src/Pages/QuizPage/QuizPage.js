import React, { useEffect } from "react";

import { Navigate } from "react-router";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import Parasite from "./Parasite/Parasite";
import ProgressContainer from "./Quiz/progressContainer/progressContainer";

const QuizPage = (props) => {
  useEffect(() => {
    props.fetchData();
    if (props.type === "") {
      const params = new URLSearchParams(window.location.search);
      let type = params.get("type");

      props.onSaveType(type);
    }
    return () => {
      window.scrollTo(0, 0);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Auxiliary>
      {props.questionType === "parasite" ? (
        <div
          className={classes.ParContainer}
          style={{
            backgroundColor: props.parasite.bgColor,
            color: props.parasite.textColor,
          }}
        >
          <ProgressContainer result={props.result} currentProgress />
          <Parasite
            result={props.result}
            goNext={props.goNext}
            loading={props.loading}
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
              src={props.result.borderImage}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            <Quiz result={props.result} loading={props.loading} />
            <img
              className={classes.RightImage}
              src={props.result.borderImage}
              alt=""
            />
          </div>
        </div>
      )}
      {props.checkout === true ? <Navigate to="/preCheckout" /> : null}
      {props.checkout2 === true ? <Navigate to="/checkout" /> : null}
    </Auxiliary>
  );
};

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

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(QuizPage)
);
