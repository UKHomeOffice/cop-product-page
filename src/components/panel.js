import React from "react";
import ExtraLargeTitle from "./extra-large-title";
import Image from "./image";
import LargeParagraph from "./large-paragraph";
import { Link } from "gatsby";
import SubPanel from "./sub-panel";

const bannerImageMobile = {
  maxWidth: "180px",
  margin: "0 auto"
};

const Panel = (props) => (
  <>
    <div className="govuk-panel">
      <div className="govuk-width-container" style={{ marginTop: "30px" }}>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <ExtraLargeTitle isPanel={true} text={props.title}/>
            <div className="banner-image-mobile">
              <div style={bannerImageMobile}><Image source={props.imageSource} alt={props.imageAlt}/></div>
            </div>
            <LargeParagraph isPanel={true} text={props.paragraphText}/>
            <div className="button-container " style={{ marginBottom: "20px" }}>
              <a href="https://www.cop.homeoffice.gov.uk/" role="button" draggable="false"
                 className="govuk-button product-page-button button-container__button govuk-!-margin-right-3">
                <div style={{ paddingLeft: "20px" }}>Sign-in <i className="sign-in-arrow"/></div>
              </a>
              or &nbsp;<Link style={{ color: "white" }} className="govuk-link govuk-!-font-weight-bold" to="/about/">find
              out more about COP</Link>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="banner-image"><Image source={props.imageSource} alt={props.imageAlt}/></div>
          </div>
        </div>
      </div>
    </div>
    <SubPanel/>
  </>
);

export default Panel;