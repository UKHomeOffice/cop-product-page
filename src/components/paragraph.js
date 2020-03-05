import React from "react";

const Paragraph = (props) => (
  <div className="govuk-width-container">
    <p className="govuk-body">{props.text}</p>
  </div>
);

export default Paragraph;