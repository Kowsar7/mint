import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./banner.module.css";

const banner = (props) => {
  return (
    <section
      className={classes.Banner}
      style={{
        background: props.header.bgColor,
      }}
    >
      <div
        style={{
          "--neutral900Color": "var(--whiteColor)",
          "--background1Color": "transparent",
        }}
      >
        <div className={classes.BannerContainer}>
          <div className={classes.BannerContent}>
            <AnimatedOnScroll animationIn="fadeInUp">
              <div className={classes.BannerTextContainer}>
                <div className={classes.BannerText}>{props.header.text}</div>
              </div>
            </AnimatedOnScroll>
            <div className={classes.BannerImageContainer}>
              <img
                className={classes.BannerImage}
                src={props.header.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
