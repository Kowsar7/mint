import React, { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../hoc/withRouter/withRouter";

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
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as actionTypes from "../../redux/actions/actionTypes";
import * as actionCreators from "../../redux/actions";
import { Navigate } from "react-router";

class Checkout extends Component {
  state = {
    modal: false,
    modalName: "",
    modalTitle: "",
    modalDate: "",
    modalComment: "",
    modalImage: "",

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

  onModalHandler = (title, date, name, comment, image) => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      modalTitle: title,
      modalDate: date,
      modalName: name,
      modalComment: comment,
      modalImage: image,
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
                    <div className={classes.StickyText}>اعتبار تخفیف تا: </div>
                    <CountdownComp date={this.state.date} />
                  </div>
                  {/* <div className={classes.StickyCountdownTimeUnits}>
                    <span className={classes.StickyCountdownTimeUnit}>
                      minutes
                    </span>
                    <span className={classes.StickyCountdownTimeUnit}>
                      seconds
                    </span>
                  </div> */}
                </div>
                <div className={classes.StickyCountdownCtaContainer}>
                  <button
                    className={classes.StickyPulsingButton}
                    data-button="countdown-button"
                    onClick={() => this.props.onButton()}
                    // onClick={() => this.props.router.navigate("/")}
                  >
                    دریافت برنامه
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Banner}>
            <Banner imageLeft={this.props.result.bannerImage} />
          </div>
          <section className={classes.IntroductoryMainSection}>
            <Introductory result={this.props.result} />
            <Plans
              result={this.props.result}
              planSelectedIndex={this.props.planSelectedIndex}
              clicked={this.props.choosePlan}
            />
            <MealPlan />
            <Exercises />
          </section>
          <section className={classes.FeedbacksSection}>
            <FeedbacksSection
              openModal={this.onModalHandler}
              comments={this.props.result.comments}
            />
          </section>
          <section className={classes.LegalSection}>
            <LegalSection result={this.props.result} />
          </section>
        </main>
        {/* sidebarBackdrop */}
        {this.state.modal === true ? (
          <Modal
            name={this.state.modalName}
            date={this.state.modalDate}
            title={this.state.modalTitle}
            text={this.state.modalComment}
            image={this.state.modalImage}
            clicked={this.onModalHandler}
          />
        ) : null}
        {this.props.login === true ? <Navigate to="/signIn" /> : null}
        {this.props.loading === true ? <Spinner /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planSelectedIndex: state.checkout.planSelectedIndex,
  result: state.quiz.CheckoutResult,
  login: state.checkout.login,
  loading: state.quiz.loading,
});

const mapDispatchToProps = (dispatch) => ({
  choosePlan: (index) =>
    dispatch({ type: actionTypes.CHOOSE_PLAN, index: index }),
  onButton: () => dispatch(actionCreators.sendPlanId()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Checkout));
