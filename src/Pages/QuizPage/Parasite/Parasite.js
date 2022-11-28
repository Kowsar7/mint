import React, { useEffect } from "react";

import classes from "./Parasite.module.css";
import Button from "./button/button";
import Title from "./title/title";
import Description from "./description/description";
import ParasiteLoading from "./loading/loading";
import Diagram from "./diagram/diagram";
import TitleFade from "../../../Components/TitleFade/TitleFade";
import Image from "./imagee/image";
import Video from "./videoo/video";
import TransitionText from "./transitionText/transitionText";
import Icon from "./iconn/icon";
import { connect } from "react-redux";

const Parasite = (props) => {
  let parasite = props.result.parasite;
  let elements = props.result.parasite.elements;

  let el = [];
  let elementsLength = Object.keys(elements).length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (var i = 0; i < elementsLength; i++) {
    if (elements[i].id === "button") {
      el[i] = (
        <div key="button" className={classes.FixedButtonContainer}>
          <Button
            parasite={parasite}
            inputs={elements[i].inputs}
            goNext={props.goNext}
          />
        </div>
      );
    }

    if (elements[i].id === "title") {
      el[i] = (
        <Title key={"title" + Math.random()} inputs={elements[i].inputs} />
      );
    }

    if (elements[i].id === "description") {
      el[i] = (
        <Description
          key={"description" + Math.random()}
          inputs={elements[i].inputs}
        />
      );
    }

    if (elements[i].id === "loading") {
      el[i] = (
        <ParasiteLoading
          key={"loading" + Math.random()}
          parasite={parasite}
          inputs={elements[i].inputs}
        />
      );
    }

    if (elements[i].id === "diagram") {
      el[i] = (
        <Diagram
          key={"diagram" + Math.random()}
          inputs={elements[i].inputs}
          type={elements[i].type}
        />
      );
    }

    if (elements[i].id === "titleFade") {
      el[i] = (
        <div key="titleFade" className={classes.TitleFadeContainer}>
          <TitleFade texts={elements[i].inputs.texts} />
        </div>
      );
      setTimeout(
        () => props.goNext(parasite.aid, props.code),
        elements[i].inputs.texts.length * 4000
      );
    }

    if (elements[i].id === "transitionText") {
      el[i] = (
        <TransitionText
          key={"transitionText" + Math.random()}
          inputs={elements[i].inputs}
        />
      );
    }

    if (elements[i].id === "video") {
      el[i] = (
        <Video key={"image" + Math.random()} inputs={elements[i].inputs} />
      );
    }

    if (elements[i].id === "image") {
      el[i] = (
        <Image key={"image" + Math.random()} inputs={elements[i].inputs} />
      );
    }

    if (elements[i].id === "icon") {
      el[i] = <Icon key={"icon" + Math.random()} inputs={elements[i].inputs} />;
    }
  }

  return <div className={classes.ParasiteContainer}>{el}</div>;
};

const mapStateToProps = (state) => ({
  code: state.quiz.code,
});

export default connect(mapStateToProps)(Parasite);
