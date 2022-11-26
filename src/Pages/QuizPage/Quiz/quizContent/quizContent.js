import React, { useEffect } from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";
import DatePicker from "./Calendar/datePicker";
import GenderSelection from "./GenderSelection/genderSelection";

const QuizContent = (props) => {
  let QuestionType;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      QuestionType = (
        <InputQuestion
          borderImage={props.result.borderImage}
          header={props.result.text}
          HorW={props.result.inputQuestion}
          aid={props.result.answers[0].aid}
        />
      );
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
    case "genderSelection":
      QuestionType = (
        <GenderSelection
          dataCard={props.result.answers}
          header={props.result.text}
          hint={props.result.hint}
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
