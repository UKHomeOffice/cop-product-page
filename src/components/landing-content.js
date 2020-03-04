import React from "react";
import MediumTitle from "./MediumTitle";
import Paragraph from "./paragraph";

const LandingContent = (props) => (
  <div className="govuk-width-container">
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <MediumTitle text={props.title}/>
        <Paragraph text={props.description}/>
      </div>
      <div className="govuk-grid-column-one-half">

      </div>
    </div>
  </div>
);

export default LandingContent;