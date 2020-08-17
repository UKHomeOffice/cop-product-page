import React from "react";
import ExtraLargeTitle from "./extra-large-title";
import Image from "./image";
import LargeParagraph from "./large-paragraph";
import { Link } from "gatsby";
import LoginForm from "./login-form";

const bannerImageMobile = {
  maxWidth: "180px",
  margin: "0 auto",
};

const Panel = (props) => (
  <>
    <div className="govuk-panel">
      <div
        className="govuk-width-container"
        style={{ marginTop: "30px", textAlign: "left" }}
      >
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <ExtraLargeTitle isPanel={true} text={props.title} />
            <div className="banner-image-mobile">
              <div style={bannerImageMobile}>
                <Image source={props.imageSource} alt={props.imageAlt} />
              </div>
            </div>
            <LargeParagraph isPanel={true} text={props.paragraphText} />
            <div className="button-container " style={{ marginBottom: "20px" }}>
              <LoginForm />
              or &nbsp;
              <Link
                style={{ color: "white" }}
                className="govuk-link govuk-!-font-weight-bold"
                to="/about/"
              >
                find out more about COP
              </Link>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="banner-image">
              <Image source={props.imageSource} alt={props.imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Panel;
