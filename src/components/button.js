import React from "react";

export const Button = (props) => {
  return (
    <button id={"button"} className="govuk-button" data-module="govuk-button">
      {props.text}
    </button>
  );
};
