import React from "react";

const HyperLink = (props) => (
  <div className="govuk-width-container">
    <a href={props.href} className="govuk-link">{props.text}</a>
  </div>
);

export default HyperLink;