import React from "react";

const panelAdditionalStyle = {
  background: '#bbd4fe',
  margin: '0 auto',
  paddingTop: '10px'
};

const SubPanel = () => (
  <div style={panelAdditionalStyle} id="sub-panel" className="govuk-panel">
    <div className="govuk-width-container">
      <a onClick={() => document.getElementById("sub-panel").style.display = "none"}
         onKeyPress={() => document.getElementById("sub-panel").style.display = "none"}
         className="boxclose govuk-link" id="boxclose"/>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <p style={{marginBottom: '0px'}} className="govuk-body-m"><span className="govuk-!-font-weight-bold">Mandatory Declarations (Man Dec)</span> submission deadline is <span className="govuk-!-font-weight-bold">31 April 2020</span><br/>
            <a className="govuk-link govuk-!-font-weight-bold" href="https://www.cop.homeoffice.gov.uk/">Sign-in</a> to COP to fill the form, or <a className="govuk-link govuk-!-font-weight-bold" href="https://training.cop.homeoffice.gov.uk/mandec.html#mandatory-declarations-man-dec">find out more about the Man Dec.</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default SubPanel;