import React, { useEffect } from "react";

const AccordionOar = (props) => {
  console.log(props.contnet);
  return (
    <div style={{ marginBottom: '2em' }} className="accordion">
      {props.content.map((value, index) => {
        return <div key={index} className="option">
          <input type="checkbox" id={`${value.id}${value.header}${index}`} className="toggle" />
          <label style={{ fontSize: '16px', marginBottom: '0px', backgroundColor: 'unset', color: '#0036a8', cursor: 'pointer', padding: '0em' }} className="title govuk-heading-s" htmlFor={`${value.id}${value.header}${index}`}>{value.header}
          </label>
          <div style={{margin: '0px'}} className="content">
            {value.body}
          </div>
        </div>;
      })}
    </div>
  );
};

export default AccordionOar;

