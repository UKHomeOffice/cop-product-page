import React from "react";

const RoadMapLabel = (props) => (
  <div className="grid-row">
    <div className="govuk-grid-column-one-third">

      <p style={{fontSize: '14px !important'}} className='govuk-body'>{props.text}</p>

    </div>
  </div>
);

export default RoadMapLabel