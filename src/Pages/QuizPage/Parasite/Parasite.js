import React from "react";
import { connect } from "react-redux";

import classes from "./Parasite.module.css";
import LineChart from "../../../Components/Chart/lineChart";
import PieChart from "../../../Components/Chart/pieChart";
import BarChart from "../../../Components/Chart/barChart";
import CircularStatic from "../../../Components/Progressbar/circular/circularProgressbar";
import LinearProgressbar from "../../../Components/Progressbar/linear/linearProgressbar";

const parasite = (props) => {
  let parasite = props.result.parasite;
  let elements = props.result.parasite.elements;

  let el = [];
  let elementsLength = Object.keys(elements).length;

  for (var i = 0; i < elementsLength; i++) {
    if (elements[i].id === "button") {
      el[i] = (
        <div key="button" className={classes.Element}>
          <button
            className={classes.ParasiteButton}
            style={{
              backgroundColor: elements[i].inputs.bgColor,
              color: elements[i].inputs.textColor,
            }}
            onClick={() => props.goNext(parasite.aid, props.code)}
            // onClick={() => props.goToCheckout()}
          >
            {elements[i].inputs.text}
          </button>
        </div>
      );
    }

    if (elements[i].id === "title") {
      el[i] = (
        <div key="title" className={classes.Element}>
          <h3>{elements[i].inputs.text}</h3>
        </div>
      );
    }

    if (elements[i].id === "description") {
      el[i] = (
        <div key="description" className={classes.Element}>
          <p className={classes.Description}>{elements[i].inputs.text}</p>
        </div>
      );
    }

    if (elements[i].id === "loading") {
      let inputs = elements[i].inputs;
      if (inputs.type === "circleFade") {
        el[i] = (
          <div key="circleFade" className={classes.Element}>
            <CircularStatic
              color={inputs.color}
              maxValue={inputs.maxValue}
              texts={inputs.texts}
              loadingtime={inputs.time}
              aid={parasite.aid}
              onShowButton={props.onShowButton}
            />
          </div>
        );
      }
      if (inputs.type === "circle") {
        el[i] = (
          <div key="circleloading" className={classes.Element}>
            <CircularStatic
              color={inputs.color}
              maxValue={inputs.maxValue}
              loadingtime={inputs.time}
              aid={parasite.aid}
              nextByButton="true"
              onShowButton={props.onShowButton}
            />
          </div>
        );
      }
      if (inputs.type === "linear") {
        el[i] = (
          <div key="linearloading" className={classes.LineLoading}>
            <LinearProgressbar
              loadingtime={inputs.time}
              color={inputs.color}
              onShowButton={props.onShowButton}
            />
          </div>
        );
      }
    }

    if (elements[i].id === "diagram") {
      if (elements[i].type === "line") {
        let inputs = elements[i].inputs;
        el[i] = (
          <div key="line" className={classes.ChartContainer}>
            <LineChart
              color={inputs.color}
              labels={inputs.labels}
              datasets={inputs.datasets}
            />
          </div>
        );
      }
      if (elements[i].type === "pie") {
        let inputs = elements[i].inputs;
        el[i] = (
          <div key="pie" className={classes.ChartContainer}>
            <PieChart
              color={inputs.color}
              labels={inputs.labels}
              datasets={inputs.datasets}
            />
          </div>
        );
      }
      if (elements[i].type === "bar") {
        let inputs = elements[i].inputs;
        el[i] = (
          <div key="bar" className={classes.ChartContainer}>
            <BarChart
              color={inputs.color}
              labels={inputs.labels}
              datasets={inputs.datasets}
            />
          </div>
        );
      }
    }

    if (elements[i].id === "titleFade") {
      let texts = elements[i].inputs.texts;
      let delayTime = -5;
      const TitleFadeList = (
        <li
          className={classes.Li}
          key={texts[4]}
          style={{ "--delay-time": delayTime }}
        >
          لطفا صبر کنید...
        </li>
      );
      // for (var j = 0; j < texts.length; j++) {
      //   delayTime = delayTime + 5;
      //   // console.log(delayTime);
      //   // console.log(elements[i].inputs.texts[j]);
      //   TitleFadeList.push(
      //     <li
      //       className={classes.Li}
      //       key={elements[i].inputs.texts[j]}
      //       style={{ "--delay-time": delayTime }}
      //     >
      //       {elements[i].inputs.texts[j]}
      //     </li>
      //   );
      // }

      el[i] = (
        <div key="titleFade" className={classes.TitleFadeContainer}>
          <ul className={classes.TitleFadeList}>{TitleFadeList}</ul>
        </div>
      );

      setTimeout(() => props.goNext(parasite.aid, props.code), 5000);
    }

    if (elements[i].id === "video") {
      const inputs = elements[i].inputs;
      el[i] = (
        <div key="video" className={classes.Element}>
          <video
            src={inputs.link}
            controls
            autoPlay
            className={classes.Video}
            controlsList="nodownload"
          />
        </div>
      );
    }

    if (elements[i].id === "image") {
      const inputs = elements[i].inputs;
      el[i] = (
        <div key="image" className={classes.Element}>
          <img src={inputs.link} className={classes.Image} alt="" />
        </div>
      );
    }
  }

  return <div className={classes.ParasiteContainer}>{el}</div>;
};

const mapStateToProps = (state) => ({ code: state.quiz.code });

export default connect(mapStateToProps)(parasite);
