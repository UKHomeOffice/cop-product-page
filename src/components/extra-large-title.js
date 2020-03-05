import React from "react";

const ExtraLargeTitle = (props) => {
  if (props.isPanel) {
    return (
      <div className="govuk-width-container">
        <div style={{ color: "white" }} className="govuk-heading-xl">
          {props.text}
        </div>
      </div>
    );
  } else {
    return (
      <div className="govuk-width-container">
        <div className="govuk-heading-xl">
          {props.text}
        </div>
      </div>
    );
  }
};

export default ExtraLargeTitle;