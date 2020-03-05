import React from "react";

const LargeParagraph = (props) => {
  if (props.isPanel) {
    return (
      <div className="govuk-width-container">
        <p style={{ color: "white" }} className="govuk-body govuk-!-font-size-24">{props.text}</p>
      </div>
    );
  } else {
    return (
      <div className="govuk-width-container">
        <p className="govuk-body govuk-!-font-size-24">{props.text}</p>
      </div>
    );
  }
};

export default LargeParagraph;

