import React, { useEffect } from "react";

const Accordion = (props) => {
  return (
    <div id="accordion" style={{ marginBottom: '2em' }} className="accordion">
      {props.content.map((value, index) => {
        return <div key={index} className="option">
          <input type="checkbox" id={`${value.id}${value.header}${index}`} className="toggle" />
          <label style={{ fontSize: '16px', marginBottom: '6px', marginTop: '6px', backgroundColor: '#F0F0F0', color: '#1d70b8', cursor: 'pointer', paddingBottom: '1em', paddingLeft: '0px', paddingLeft: '10px' }} className="title govuk-heading-s" htmlFor={`${value.id}${value.header}${index}`}>{value.header}
          </label>
          <div style={{margin: '0px'}} className="content">
            {value.body}
          </div>
        </div>;
      })}
    </div>
  );
};

export default Accordion;

