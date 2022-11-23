import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Checkout.module.css";
import Logo from "../../assets/images/logo.png";
import BurgerButton from "../../Components/UI/BurgerButton/BurgerButton";
import Countdown from "./countdown/countdown";
import CountdownComp from "./countdown/countDownComp/CountDownComp";
import Banner from "./banner/banner";
import Introductory from "./Introductory/Introductory";
import Plans from "./plans/plans";
import MealPlan from "./mealPlan/mealPlan";
import Exercises from "./exercises/exercises";
import FeedbacksSection from "./feedbacksSection/feedbacksSection";
import LegalSection from "./legalSection/legalSection";
import Modal from "./Modal/modal";
import * as actionTypes from "../../redux/actions/actionTypes";

class Checkout extends Component {
  state = {
    faq: { Q1: false, Q2: false, Q3: false },
    modal: false,
    modalName: "",
    modalTitle: "",
    modalDate: "",
    modalComment: "",

    visible: false,
    date: Date.now(),
  };

  componentDidMount = () => {
    const handleScroll = () => {
      let position = window.pageYOffset;
      this.setState({ visible: position > 100 });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  onfaqQuestion = (q) => {
    if (q === "Q1") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q1: !prevState.faq.Q1 },
      }));
    } else if (q === "Q2") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q2: !prevState.faq.Q2 },
      }));
    } else if (q === "Q3") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q3: !prevState.faq.Q3 },
      }));
    }
  };

  onModalHandler = (title, date, name, comment) => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      modalTitle: title,
      modalDate: date,
      modalName: name,
      modalComment: comment,
    }));
  };

  render() {
    return (
      <div
        className={classes.PageContainer}
        data-page="checkout-affiliates-introductory-3-subs"
        id="page"
      >
        <main className={classes.Main}>
          <div className={classes.HeaderWithCountdownDesktop}>
            <header className={classes.headerwithcountdown}>
              <div className={classes.Logo}>
                <span>
                  <a href="/">
                    <img className={classes.LogoImage} src={Logo} alt="Home" />
                  </a>
                </span>
              </div>
              <Countdown date={this.state.date} />
              <div className={classes.BurgerButton}>
                <BurgerButton />
              </div>
            </header>
          </div>
          <div className={classes.HeaderWithCountdownMobile}>
            <header className={classes.Header}>
              <span>
                <a href="/">
                  <img className={classes.Logo} src={Logo} alt="Home" />
                </a>
              </span>
              <BurgerButton />
            </header>
            <section className={classes.TitleSection}>
              <div className={classes.Container}>
                <span className={classes.Title}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.result.title,
                    }}
                  />
                  {/* Start{" "} */}
                  {/* <b className={classes.HighlightedTitle}>losing weight</b>{" "}
                  right now */}
                </span>
                <span className={classes.SubTitle}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.result.description,
                    }}
                  />
                  {/* <span>10,000,000</span> members of BetterMe family */}
                </span>
              </div>
            </section>

            <div className={classes.StickyCountdown}>
              <div>
                <div className={classes.CountdownText}>
                  اعتبار تخفیف تا:{" "}
                  <span className={classes.CountdownTimeUnit}>
                    <CountdownComp date={this.state.date} />
                  </span>
                </div>
              </div>
            </div>

            <div
              className={classes.StickyfixedCountdown}
              style={{
                display: this.state.visible === true ? "block" : "none",
              }}
            >
              <div className={classes.StickyCountdownContainer}>
                <div className={classes.StickyCountdownTime}>
                  <div className={classes.StickyCountdownTimeNumbers}>
                    <CountdownComp date={this.state.date} />
                  </div>
                  <div className={classes.StickyCountdownTimeUnits}>
                    <span className={classes.StickyCountdownTimeUnit}>
                      minutes
                    </span>
                    <span className={classes.StickyCountdownTimeUnit}>
                      seconds
                    </span>
                  </div>
                </div>
                <div className={classes.StickyCountdownCtaContainer}>
                  <button
                    className={classes.StickyPulsingButton}
                    data-button="countdown-button"
                  >
                    دریافت رژیم
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Banner}>
            <Banner />
          </div>
          <section className={classes.IntroductoryMainSection}>
            <Introductory />
            <Plans
              result={this.props.result}
              planSelectedIndex={this.props.planSelectedIndex}
              clicked={this.props.choosePlan}
            />
            <MealPlan />
            <Exercises />
          </section>
          <section className={classes.FeedbacksSection}>
            <FeedbacksSection openModal={this.onModalHandler} />
          </section>
          <section className={classes.LegalSection}>
            <LegalSection
              faq={this.state.faq}
              faqClicked={this.onfaqQuestion}
            />
          </section>
        </main>
        {/* sidebarBackdrop */}
        {this.state.modal === true ? (
          <Modal
            name={this.state.modalName}
            date={this.state.modalDate}
            title={this.state.modalTitle}
            text={this.state.modalComment}
            clicked={this.onModalHandler}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planSelectedIndex: state.checkout.planSelectedIndex,
  result: state.quiz.result,
});

const mapDispatchToProps = (dispatch) => ({
  choosePlan: (index) =>
    dispatch({ type: actionTypes.CHOOSE_PLAN, index: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
