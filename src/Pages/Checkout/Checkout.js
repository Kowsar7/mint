import React from "react";

import classes from "./Checkout.module.css";
import Logo from "../../assets/images/logo.png";
import Countdown from "./countdown/countdown";
import Banner from "./banner/banner";
import Introductory from "./Introductory/Introductory";
import Plans from "./plans/plans";
import MealPlan from "./mealPlan/mealPlan";
import Exercises from "./exercises/exercises";
import FeedbacksSection from "./feedbacksSection/feedbacksSection";

const checkout = (props) => {
  return (
    <div
      className={classes.PageContainer}
      data-page="checkout-affiliates-introductory-3-subs"
      id="page"
    >
      <main className={classes.Main}>
        <div className={classes.HeaderWithCountdown}>
          <header className={classes.headerwithcountdown}>
            <div className={classes.Logo}>
              <span>
                <a href="/">
                  <img className={classes.LogoImage} src={Logo} alt="Home" />
                </a>
              </span>
            </div>
            <Countdown />
            <div className={classes.BurgerButton}>
              <button
                className={classes.BurgerbuttonContainer}
                data-button="burger-menu"
              >
                <span className={classes.BurgerbuttonDash}></span>
                <span className={classes.BurgerbuttonDash}></span>
                <span className={classes.BurgerbuttonDash}></span>
              </button>
            </div>
          </header>
        </div>
        {/* mobile only ? */}
        <div className={classes.Banner}>
          <Banner />
        </div>
        <section className={classes.IntroductoryMainSection}>
          <Introductory />
          <Plans />
          <MealPlan />
          <Exercises />
        </section>
        <section className={classes.FeedbacksSection}>
          <FeedbacksSection />
        </section>
        <section className="checkout-generated-universal_legalSection__nG2MW">
          <div className="checkout-generated-universal_container__oV9Mx">
            <div className="checkout-generated-universal_desktopOnly__aA0Qt">
              <img
                className="checkout-generated-universal_legalSectionBgLeft__XMqeJ"
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 2x"
                alt="Pepper"
              />
              <img
                className="checkout-generated-universal_legalSectionBgRight__jlACf"
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 2x"
                alt="Avocado"
              />
              <div className="checkout-generated-universal_faq__qz2hk">
                <div className="faq-accordion_container__leW8s">
                  <span className="faq-accordion_title__85xZa">
                    People Often Ask
                  </span>
                  <ul className="faq-accordion_questionsList__yRzlP">
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        I’m worried that I’ll quit the Meal Plan halfway
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          We totally get it, and that’s why we made sure that
                          our Meal Plans are as similar to the regular menu as
                          possible. We believe that even those who live off fast
                          food will be satisfied with both the meals and the
                          results, and never feel hungry.
                        </div>
                      </div>
                    </div>
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        I don’t want to give up my sweets!
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          And you don't have to. We know that it’s hard to get
                          rid of the sweet tooth, and included sweet dishes into
                          the meal plan. We’ve picked balanced sweets.
                        </div>
                      </div>
                    </div>
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        Can I lose weight without working out?
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          Sure thing! Nutrition is the most important element in
                          weight loss. However if you incorporate workouts, your
                          body will get more toned and defined. We know it’s a
                          lot to take on, and the workouts are extremely easy,
                          suitable for first-timers, and will take up barely any
                          time.
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="checkout-generated-universal_moneyBackGuarantee__Mmeoa">
              <div className="money-back-guarantee_container__cBo6E">
                <div className="money-back-guarantee_content__HypPy">
                  <div className="money-back-guarantee_contentInner__Kxh3o">
                    <span className="money-back-guarantee_title__IJrzn">
                      30-Day Money-Back Guarantee
                    </span>
                    <span className="money-back-guarantee_text__k4GqU">
                      <p>
                        We believe that our plan may work for you and you’ll get
                        visible results in 4 weeks! We even are ready to return
                        your money back if you don’t see visible results and can
                        demonstrate that you followed our plan. Find more about
                        applicable limitations in our{" "}
                        <a
                          href="/money-back-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          money-back policy
                        </a>
                        .<br></br>
                      </p>
                    </span>
                  </div>
                  <svg
                    className="money-back-guarantee_stamp__nGAGn"
                    width="64"
                    height="89"
                    viewBox="0 0 64 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5235 64.4537C28.0714 64.0237 27.2534 63.7442 26.4569 63.7442C26.0479 63.7442 25.6604 63.8302 25.359 63.9592C24.6917 64.2817 23.9598 64.4537 23.2063 64.4537C21.3119 64.4537 19.5898 63.4432 18.7071 61.8092C18.2766 61.0137 17.0926 60.3472 16.1024 60.3472C16.0163 60.3472 15.9301 60.3472 15.8656 60.3687C15.6503 60.3902 15.435 60.4117 15.2197 60.4117C13.5837 60.4117 12.0768 59.6162 11.1296 58.3691L2.90625 80.9229L16.5329 74.5803L22.8834 88.1899L31.0422 65.7867C30.1165 65.5502 29.2339 65.1202 28.5235 64.4537Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M48.8664 60.3697C48.6511 60.3697 48.4358 60.3482 48.2206 60.3267C48.1345 60.3267 48.0699 60.3052 47.9838 60.3052C46.9935 60.3052 45.8095 60.9717 45.379 61.7672C44.4964 63.4012 42.7742 64.4117 40.8798 64.4117C40.1264 64.4117 39.3945 64.2397 38.7271 63.9172C38.4258 63.7882 38.0383 63.7022 37.6293 63.7022C36.8328 63.7022 36.0147 63.9817 35.5627 64.4117C34.8523 65.0782 33.9912 65.5298 33.0225 65.7018L41.1812 88.105L47.5317 74.4953L61.1583 80.8379L52.935 58.2842C51.9878 59.5742 50.4809 60.3697 48.8664 60.3697Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M63.11 29.779C61.9233 28.5695 61.5631 26.3172 62.3047 24.7948C63.0464 23.2724 62.4107 21.3747 60.9062 20.5822C59.4016 19.7898 58.3633 17.7669 58.5752 16.0985C58.8083 14.4302 57.6004 12.8244 55.9263 12.5116C54.2523 12.1988 52.6206 10.593 52.3027 8.94551C51.9849 7.29801 50.3532 6.10932 48.6579 6.33871C46.9627 6.56811 44.9072 5.52539 44.1019 4.04473C43.2967 2.56408 41.3683 1.9593 39.8214 2.66835C38.2745 3.39825 36.0071 3.04373 34.7568 1.87588C33.5277 0.708039 31.4934 0.708039 30.2432 1.87588C29.0141 3.04373 26.7255 3.39825 25.1786 2.66835C23.6317 1.93844 21.7033 2.56408 20.8981 4.04473C20.0928 5.52539 18.0373 6.54726 16.3421 6.33871C14.6468 6.10932 13.0151 7.29801 12.6973 8.94551C12.3794 10.593 10.7477 12.1988 9.07366 12.5116C7.3996 12.8244 6.19172 14.4302 6.42482 16.0985C6.65792 17.7669 5.59838 19.7898 4.09384 20.5822C2.5893 21.3747 1.97478 23.2724 2.69526 24.7948C3.43694 26.3172 3.07669 28.5486 1.89001 29.779C0.70333 30.9886 0.70333 32.9906 1.89001 34.221C3.07669 35.4305 3.43694 37.6828 2.69526 39.2052C1.95359 40.7275 2.5893 42.6253 4.09384 43.4178C5.59838 44.2102 6.63673 46.2331 6.42482 47.9014C6.19172 49.5698 7.3996 51.1756 9.07366 51.4884C10.7477 51.8012 12.3794 53.407 12.6973 55.0545C13.0151 56.702 14.6468 57.8907 16.3421 57.6613C18.0373 57.4319 20.0928 58.4746 20.8981 59.9553C21.7033 61.4359 23.6317 62.0407 25.1786 61.3317C26.7255 60.6017 28.9929 60.9563 30.2432 62.1241C31.4723 63.292 33.5066 63.292 34.7568 62.1241C35.9859 60.9563 38.2745 60.6017 39.8214 61.3317C41.3683 62.0616 43.2967 61.4359 44.1019 59.9553C44.9072 58.4746 46.9627 57.4527 48.6579 57.6613C50.3532 57.8907 51.9849 56.702 52.3027 55.0545C52.6206 53.407 54.2523 51.8012 55.9263 51.4884C57.6004 51.1756 58.8083 49.5698 58.5752 47.9014C58.3421 46.2331 59.4016 44.2102 60.9062 43.4178C62.4107 42.6253 63.0252 40.7275 62.3047 39.2052C61.5631 37.6828 61.9233 35.4514 63.11 34.221C64.2967 32.9906 64.2967 30.9886 63.11 29.779Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M63.0959 29.8606C61.8904 28.6136 61.5244 26.2916 62.2778 24.7221C63.0313 23.1526 62.3855 21.1961 60.8571 20.3791C59.3286 19.562 58.2738 17.4765 58.4891 15.7565C58.7259 14.0365 57.4988 12.381 55.7982 12.0585C54.0975 11.736 52.44 10.0805 52.1171 8.38198C51.7941 6.68347 50.1366 5.45796 48.4144 5.69446C46.6922 5.93097 44.6041 4.85596 43.7861 3.32945C42.968 1.80294 41.0091 1.17943 39.4376 1.91044C37.8661 2.66294 35.5627 2.29744 34.2926 1.09344C33.0441 -0.110572 30.9775 -0.110572 29.7074 1.09344C28.4588 2.29744 26.1339 2.66294 24.5624 1.91044C22.9909 1.15793 21.032 1.80294 20.2139 3.32945C19.3959 4.85596 17.3078 5.90947 15.5856 5.69446C13.8634 5.45796 12.2059 6.68347 11.8829 8.38198C11.56 10.0805 9.90245 11.736 8.20182 12.0585C6.50118 12.381 5.27413 14.0365 5.51093 15.7565C5.74773 17.4765 4.67137 19.562 3.14295 20.3791C1.61453 21.1961 0.990249 23.1526 1.72217 24.7221C2.47562 26.2916 2.10965 28.5921 0.904137 29.8606C-0.301379 31.1076 -0.301379 33.1716 0.904137 34.4402C2.10965 35.6872 2.47562 38.0092 1.72217 39.5787C0.968722 41.1482 1.61453 43.1047 3.14295 43.9217C4.67137 44.7387 5.7262 46.8242 5.51093 48.5442C5.27413 50.2642 6.50118 51.9198 8.20182 52.2423C9.90245 52.5648 11.56 54.2203 11.8829 55.9188C12.2059 57.6173 13.8634 58.8428 15.5856 58.6063C17.3078 58.3698 19.3959 59.4448 20.2139 60.9713C21.032 62.4978 22.9909 63.1213 24.5624 62.3903C26.1339 61.6378 28.4373 62.0033 29.7074 63.2073C30.9559 64.4113 33.0225 64.4113 34.2926 63.2073C35.5412 62.0033 37.8661 61.6378 39.4376 62.3903C41.0091 63.1428 42.968 62.4978 43.7861 60.9713C44.6041 59.4448 46.6922 58.3913 48.4144 58.6063C50.1366 58.8428 51.7941 57.6173 52.1171 55.9188C52.44 54.2203 54.0975 52.5648 55.7982 52.2423C57.4988 51.9198 58.7259 50.2642 58.4891 48.5442C58.2523 46.8242 59.3286 44.7387 60.8571 43.9217C62.3855 43.1047 63.0098 41.1482 62.2778 39.5787C61.5244 38.0092 61.8904 35.7087 63.0959 34.4402C64.3014 33.1716 64.3014 31.1076 63.0959 29.8606ZM32.0323 56.8648C18.3841 56.8648 7.27615 45.7707 7.27615 32.1396C7.27615 18.5085 18.3841 7.41448 32.0323 7.41448C45.6805 7.41448 56.7884 18.5085 56.7884 32.1396C56.7884 45.7707 45.6805 56.8648 32.0323 56.8648Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M32.0321 9.58594C19.5679 9.58594 9.4502 19.691 9.4502 32.1396C9.4502 44.5883 19.5679 54.6934 32.0321 54.6934C44.4963 54.6934 54.614 44.5883 54.614 32.1396C54.614 19.691 44.4963 9.58594 32.0321 9.58594ZM46.0893 24.3566L28.6308 46.3728C28.0066 47.1468 26.9517 47.1898 26.2844 46.4803L16.2958 35.7302C15.6069 34.9992 15.65 33.8167 16.3389 33.1287L19.4172 30.0541C20.1276 29.3446 21.2686 29.3446 21.979 30.0541L26.4135 34.4832L27.7052 35.7732L28.7815 34.3327L39.7819 19.691C40.3846 18.8955 41.5256 18.745 
      42.3221 19.3255L45.7449 21.8841C46.5629 22.4431 46.7136 23.5826 46.0893 24.3566Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="checkout-generated-universal_aboveButtonElement__w3y2T">
              <div className="checkout-generated-universal_underButtonLegalText__R2UTs">
                <span data-testid="akaTrialLegalTextFull">
                  <b>PLEASE NOTE:</b> After your 1-Month introductory offer,
                  unless you cancel online in your profile before the end of
                  then-current period, your plan will automatically convert to
                  our 1-Month subscription plan at a non-discounted price and
                  you will be charged $28.56 each month before you cancel.
                  Subscriptions renew automatically at the end of each period
                  unless you cancel online in your profile. If you are unsure
                  how to cancel, visit our
                  <a
                    href="/en/subscription-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscription Terms
                  </a>
                  . Prepayment of total plan cost required. You will need an
                  Android or iOS mobile phone to access the full version of the
                  product. You may want to take a screenshot of this information
                  and save it.
                </span>
              </div>
            </div>
            <div className="checkout-generated-universal_paymentButton__xsasU">
              <button
                type="button"
                className="button-module_button__tsbZB button-module_secondary__ESK0e"
                databutton="checkout-get-plan"
              >
                GET MY PLAN
              </button>
            </div>
            <div className="checkout-generated-universal_legal__jgz9Z">
              <div className="checkout-generated-universal_legalAddress__IiW_I">
                Themistokli Dervi 39, 1st floor, Office 104, 1066, Nicosia,
                Cyprus.
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="page_sidebarBackdrop__0CPrH">
        <div className="page_sidebar__lpV_0">
          <div className="page_sidebarCloseButton__KlKkY"></div>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Contact Us
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              FAQ
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Terms of Service
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Privacy Policy
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Subscription Policy
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Money-Back Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default checkout;
