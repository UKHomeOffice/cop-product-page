import React from "react";

const MediumTitle = (props) => (
  <h3 id={props.id} className="govuk-heading-m">
    {props.text}
  </h3>
);

export default MediumTitle;
