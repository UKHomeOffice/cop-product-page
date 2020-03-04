import React from "react";
import ExtraLargeTitle from "./extra-large-title";
import Image from "./image";
import LargeParagraph from "./large-paragraph";
import { Link } from "gatsby";

const Panel = (props) => (
  <div className="govuk-panel">
    <div className="govuk-width-container" style={{ marginTop: "50px" }}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <ExtraLargeTitle isPanel={true} text={props.title}/>
          <LargeParagraph isPanel={true} text={props.paragraphText}/>
          <div className="button-container">
            <Link to="/about_sub_pages/cop" role="button" draggable="false"
               className="govuk-button product-page-button button-container__button govuk-!-margin-right-3">
              Find out more
            </Link>
            or &nbsp;<a  style={{color: 'white'}} className="govuk-link" href="https://www.cop.homeoffice.gov.uk/">sign in to COP if you want to use it</a>
          </div>
        </div>
        <div className="govuk-grid-column-one-third">
          <Image source={props.imageSource} height={props.imageHeight} width={props.imageWidth} alt={props.imageAlt}/>
        </div>
      </div>
    </div>
  </div>

);

export default Panel;