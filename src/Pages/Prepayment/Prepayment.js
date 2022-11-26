import React from "react";
import { Component } from "react";

import classes from "./Prepayment.module.css";
import Header from "./header/header";
import Banner from "./banner/banner";
import BmiContainer from "./bmiContainer/bmiContainer";
import Highlights from "./highlights/highlights";
import SuccessPercent from "./successPercent/successPercent";

class PrePayment extends Component {
  render() {
    return (
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
    );
  }
}

export default PrePayment;
