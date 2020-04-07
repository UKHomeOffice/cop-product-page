import React from "react";

const SmallTitle = (props) => (
  <h4 id={props.id} className="govuk-heading-s">
    {props.text}
  </h4>
);

export default SmallTitle;