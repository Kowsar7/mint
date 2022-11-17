import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";
import DatePicker from "./Calendar/datePicker";

const QuizContent = (props) => {
  let QuestionType;

  switch (props.result.questionType) {
    case "singleSelect":
      QuestionType = (
        <SingleSelectQuestion
          borderImage={props.result.borderImage}
          dataCard={props.result.answers}
          header={props.result.text}
          image={props.result.image}
          hint={props.result.hint}
          video={props.result.video}
          description={props.result.description}
        />
      );
      break;
    case "inputQuestion":
      QuestionType = <InputQuestion header={props.header} hint={props.hint} />;
      break;
    case "multiSelect":
      QuestionType = (
        <MultiSelectQuestion
          borderImage={props.result.borderImage}
          dataCard={props.result.answers}
          header={props.result.text}
          image={props.result.image}
          hint={props.result.hint}
          video={props.result.video}
          description={props.result.description}
        />
      );
      break;
    case "Calendar":
      QuestionType = <DatePicker header={props.header} />;
      break;
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
