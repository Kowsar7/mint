import React from "react";

import classes from "./TitleFade.module.css";
import Delayed from "./Delayed/Delayed";
import Fader from "./Title/title";

const titleFade = (props) => {
  const texts = props.texts;

  return (
    <ul className={classes.TitleFadeList}>
      {texts.map((text, index) => (
        <Delayed key={text} waitBeforeShow={index * 4000}>
          <Fader text={text} />
        </Delayed>
      ))}
    </ul>
  );
};

export default titleFade;
