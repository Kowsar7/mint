import React from "react";
import { connect } from "react-redux";

import classes from "./Prepayment.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Navigate } from "react-router";
import Header from "./header/header";
import Banner from "./banner/banner";
import BmiContainer from "./bmiContainer/bmiContainer";
import Highlights from "./highlights/highlights";
import SuccessPercent from "./successPercent/successPercent";

const PrePayment = (props) => {
  return (
    <Auxiliary>
      <div className={classes.PageContainer}>
        <div>
          <Header />
          <Banner header={props.result.header} />
          <div className={classes.SubContainer}>
            <h2 className={classes.Title}>{props.result.summery.title}</h2>
            <BmiContainer summery={props.result.summery} />
            <h2 className={classes.Title}>{props.result.highlight.title}</h2>
            <Highlights highlight={props.result.highlight} />
            <SuccessPercent percentage={props.result.highlight.percentage} />
            <div className={classes.FixedToBottomBlock}>
              <button type="button" className={classes.Container}>
                <span as="span" className={classes.Body1Bold}>
                  دریافت برنامه
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {props.checkout2 === true ? <Navigate to="/checkout" /> : null}
    </Auxiliary>
  );
};

const mapStateToProps = (state) => ({
  checkout2: state.quiz.checkout2,
  result: state.quiz.result,
});

export default connect(mapStateToProps)(PrePayment);
