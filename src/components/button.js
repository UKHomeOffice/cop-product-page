import React from "react"

const handler = (message) => {
  console.log(message);
};

export const Button = (props) => {
  return (
    <button id={'a'} onClick={event => handler("is clicked")} className="govuk-button" data-module="govuk-button">
      {props.text}
    </button>
  )
};

export const testables = {
  handler:handler
};