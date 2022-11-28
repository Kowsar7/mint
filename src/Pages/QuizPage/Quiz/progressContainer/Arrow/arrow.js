import React from "react";
import { connect } from "react-redux";

import classes from "./arrow.module.css";
import { goNext } from "../../../../../redux/actions";

const arrow = (props) => {
  return (
    <svg
      onClick={() => props.onClickArrow(props.preAid, props.code)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={classes.ArrowBack}
      style={{
        display:
          props.result.preAid === "main" || props.result.isResult === "true"
            ? "none"
            : "block",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.414 10.657L3.071 11 2 12.071l1.414 1.414 6.364 6.364a1 1 0 101.414-1.414L5.757 13h14.314a1 1 0 100-2H5.9l5.293-5.293a1 1 0 00-1.414-1.414l-6.364 6.364z"
      ></path>
    </svg>
  );
};

const mapStateToProps = (state) => ({
  result: state.quiz.QuizResult,
  code: state.quiz.code,
});

const mapDispatchToProps = (dispatch) => ({
  onClickArrow: (preaid, code) => dispatch(goNext(preaid, code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(arrow);
