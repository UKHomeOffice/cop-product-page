import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const panelAdditionalStyle = {
  background: "#bbd4fe",
  margin: "0 auto",
  paddingTop: "15px",
  paddingBottom: "0px",
  textAlign: "left"
};

const panelContentAdditionalStyleOverrides = {
  marginBottom: '0px',
  lineHeight: '1.4'
};

const closeSplash = () => {
  const subPanel = document.getElementById("sub-panel");
  if (subPanel) {
    subPanel.style.display = "none";
  }
};

const Notification = ({notificationContent}) => {
  return (
    <div style={panelAdditionalStyle} id="sub-panel" className="govuk-panel">
      <div className="govuk-width-container">
        <a onClick={() => closeSplash()}
           className="boxclose govuk-link" id="boxclose"/>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <div style={panelContentAdditionalStyleOverrides}>
            <MDXRenderer>{notificationContent}</MDXRenderer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Notification;
