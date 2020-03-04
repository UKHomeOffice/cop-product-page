import React from "react";
import MediumTitle from "./MediumTitle";
import Paragraph from "./paragraph";
import Image from "./image";

const LandingContent = (props) => (
  <div className="govuk-width-container">
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half">
        <MediumTitle text={props.title}/>
        <Paragraph text={props.description}/>
      </div>
      <div className="govuk-grid-column-one-half">
        <Image source={props.imageSource} height={props.imageHeight} width={props.imageWidth} alt={props.imageAlt}/>
      </div>
    </div>
  </div>
);

export default LandingContent;