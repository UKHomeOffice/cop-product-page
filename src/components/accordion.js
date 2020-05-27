import React, { useEffect } from "react";

const Accordion = (props) => {
  useEffect(() => {
    if (document.getElementById('streamLineNow1') && document.getElementById('informNow1') && document.getElementById('trustedNow1')) {
      document.getElementById('streamLineNow1').click();
      document.getElementById('informNow1').click();
      document.getElementById('trustedNow1').click();
    }
  });


  return (
    <div style={{ marginBottom: '2em' }} className="accordion">
      {props.content.map((value, index) => {
        return <div key={index} className="option">
          <input type="checkbox" id={`${value.id}${value.header}${index}`} className="toggle" />
          <label style={{ fontSize: '16px', marginBottom: '0px' }} className="title govuk-heading-s" htmlFor={`${value.id}${value.header}${index}`}>{value.header}
          </label>
          <div className="content">
            {value.body}
          </div>
        </div>;
      })}
    </div>
  );
};

export default Accordion;

