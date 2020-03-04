import React from "react";

const LargeParagraph = (props) => {
  if (props.isPanel) {
    return (
      <p style={{color: 'white'}} className="govuk-body govuk-!-font-size-24">{props.text}</p>
    );
  } else {
    return (
      <p className="govuk-body govuk-!-font-size-24">{props.text}</p>
    );
  }
};

export default LargeParagraph;

