import React from "react";

const RoadMapLabel = (props) => (
  <div className="grid-row">
    <div className="govuk-grid-column-one-third">

      <div style={{fontSize: '14px'}} className='govuk-body'>{props.text}</div>

    </div>
  </div>
);

export default RoadMapLabel