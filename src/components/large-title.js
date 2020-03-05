import React from "react";

const LargeTitle = (props) => (
  <div className="govuk-width-container">
    <div className="govuk-heading-l">
      {props.text}
    </div>
  </div>
);

export default LargeTitle;