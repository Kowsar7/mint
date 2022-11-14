import React from "react";
import { connect } from "react-redux";

import classes from "./Parasite.module.css";
import LineChart from "../../../Components/Chart/lineChart";
import PieChart from "../../../Components/Chart/pieChart";
import BarChart from "../../../Components/Chart/barChart";
import CircularStatic from "../../../Components/Progressbar/circular/circularProgressbar";
import LinearProgressbar from "../../../Components/Progressbar/linear/linearProgressbar";
import TitleFade from "../../../Components/TitleFade/TitleFade";

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
          <h3 className={classes.Title}>{elements[i].inputs.text}</h3>
        </div>
      );
    }

    if (elements[i].id === "description") {
      const text = elements[i].inputs.text;
      const fixed = text.replace(/<br\s*\\?>/g, "\r\n");
      el[i] = (
        <div key="description" className={classes.Element}>
          <div className={classes.Description}>
            {fixed.split(/[\r\n]+/).map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
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
            />
          </div>
        );
      }
      if (inputs.type === "linear") {
        el[i] = (
          <div key="linearloading" className={classes.LineLoading}>
            <LinearProgressbar loadingtime={inputs.time} color={inputs.color} />
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
      el[i] = (
        <div key="titleFade" className={classes.TitleFadeContainer}>
          <TitleFade texts={elements[i].inputs.text} />
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
        <div
          key="image"
          className={classes.Image}
          style={{ textAlign: inputs.textAlign }}
        >
          <img src={inputs.link} alt="" />
        </div>
      );
    }
  }

  return <div className={classes.ParasiteContainer}>{el}</div>;
};

const mapStateToProps = (state) => ({ code: state.quiz.code });

export default connect(mapStateToProps)(parasite);