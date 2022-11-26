import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import classes from "./banner.module.css";

const banner = (props) => {
  return (
    <section
      className={classes.Banner}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_375/nhyxlvpmft9c7alvvoqf)",
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
                <div className={classes.BannerText}>
                  Here is your personalized plan
                </div>
              </div>
            </AnimatedOnScroll>
            <div className={classes.BannerImageContainer}>
              <img
                className={classes.BannerImage}
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/ykqr1dn14ygryviwyrqi"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/ykqr1dn14ygryviwyrqi 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/ykqr1dn14ygryviwyrqi 2x"
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
