import React from "react";

const ExtraLargeTitle = (props) => {
  if (props.isPanel) {
    return (
        <h1 style={{ color: "white" }} className="govuk-heading-xl">
          {props.text}
        </h1>
    );
  } else {
    return (
        <h1 className="govuk-heading-xl">
          {props.text}
        </h1>
    );
  }
};

export default ExtraLargeTitle;