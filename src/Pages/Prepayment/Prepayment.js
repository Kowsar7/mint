import React, { useEffect } from "react";
import { connect } from "react-redux";

import classes from "./Prepayment.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Navigate } from "react-router";
import Header from "./header/header";
import Banner from "./banner/banner";
import BmiContainer from "./bmiContainer/bmiContainer";
import Highlights from "./highlights/highlights";
import SuccessPercent from "./successPercent/successPercent";
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as actionCreators from "../../redux/actions";

const PrePayment = (props) => {
  // const { fetchPreCheckoutData } = props.fetchPreCheckoutData;

  useEffect(() => {
    props.fetchPreCheckoutData();
    // eslint-disable-next-line
  }, []);

  return (
    <Auxiliary>
      {props.checkout === true ? (
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
                <button
                  type="button"
                  className={classes.Container}
                  onClick={props.goTocheckout}
                >
                  <span as="span" className={classes.Body1Bold}>
                    دریافت برنامه
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.checkout2 === true ? <Navigate to="/checkout" /> : null}
      {props.loading === true ? <Spinner /> : null}
    </Auxiliary>
  );
};

const mapStateToProps = (state) => ({
  checkout: state.quiz.checkout,
  checkout2: state.quiz.checkout2,
  result: state.quiz.PreCheckoutResult,
  loading: state.quiz.loading,
});

const mapDispatchToProps = (dispatch) => ({
  goTocheckout: () => dispatch(actionCreators.preToCheckout()),
  fetchPreCheckoutData: () => dispatch(actionCreators.fetchPreCheckoutData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrePayment);
