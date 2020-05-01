import React from "react";

const panelAdditionalStyle = {
  background: '#bbd4fe',
  margin: '0 auto',
  paddingTop: '10px',
  textAlign: 'left'
};

const panelContentAdditionalStyleOverrides = {
  marginBottom: '0px',
  lineHeight: '1.4'
};

const closeSplash = () => {
  let subPanel = document.getElementById("sub-panel");
  if (subPanel) {
    subPanel.style.display = "none";
  }
};

  const SubPanel = (props) => (
    <div style={panelAdditionalStyle} id="sub-panel" className="govuk-panel">
      <div className="govuk-width-container">
        <a onClick={() => closeSplash()}
           className="boxclose govuk-link" id="boxclose"/>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <div style={panelContentAdditionalStyleOverrides} className="govuk-body" dangerouslySetInnerHTML={{__html: props.text}} />
          </div>
        </div>


      </div>
    </div>
  );


export default SubPanel;