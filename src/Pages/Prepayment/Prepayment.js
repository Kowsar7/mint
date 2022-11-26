import React from "react";

import classes from "./Prepayment.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Navigate } from "react-router";
import Header from "./header/header";
import Banner from "./banner/banner";
import BmiContainer from "./bmiContainer/bmiContainer";
import Highlights from "./highlights/highlights";
import SuccessPercent from "./successPercent/successPercent";
import { connect } from "react-redux";

const PrePayment = (props) => {
  return (
    <Auxiliary>
      <div className={classes.PageContainer} data-page="general" id="page">
        <div>
          <Header />
          <Banner />
          <div className={classes.SubContainer}>
            <h2 className={classes.Title}>Personal Summary</h2>
            <BmiContainer />
            <h2 className={classes.Title}>Highlights of Your Plan</h2>
            <Highlights />
            <SuccessPercent />
            <div className={classes.FixedToBottomBlock}>
              <button type="button" className={classes.Container}>
                <span as="span" className={classes.Body1Bold}>
                  دریافت برنامه
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <div class="page_sidebarBackdrop__0CPrH">
        <div class="page_sidebar__lpV_0">
          <div class="page_sidebarCloseButton__KlKkY"></div>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              Contact Us
            </a>
          </span>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              FAQ
            </a>
          </span>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              Terms of Service
            </a>
          </span>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              Privacy Policy
            </a>
          </span>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              Subscription Policy
            </a>
          </span>
          <span>
            <a href="/" class="page_sidebarLink__tCaZq">
              Money-Back Policy
            </a>
          </span>
        </div>
      </div> */}
      </div>
      {this.props.checkout2 === true ? <Navigate to="/checkout" /> : null}
    </Auxiliary>
  );
};

const mapStateToProps = (state) => ({
  checkout2: state.quiz.checkout2,
});

export default connect(mapStateToProps)(PrePayment);
