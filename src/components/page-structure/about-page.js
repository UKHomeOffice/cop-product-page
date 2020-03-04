import React from "react";
import SubNavigation from "../sub_navigation";

const AboutPage = (props) => (
  <div className="govuk-width-container main-height" style={{marginTop: '30px'}}>
    <div className="grid-row">
      <div className="column-one-quarter">
        <SubNavigation currentPage={props.path}/>
      </div>
      <div className="column-five-eighths">
        {props.children}
      </div>
    </div>
  </div>
);

export default AboutPage;