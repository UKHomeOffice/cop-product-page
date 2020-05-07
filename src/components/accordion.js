import React, { useEffect } from "react";

const Accordion = (props) => {


  return (
    <div className="accordion">
      {props.content.map((value, index) => {
        return <div key={index} className="option">
          <input type="checkbox" id={index} className="toggle"/>
          <label style={{fontSize: '16px'}} className="title govuk-heading-s" htmlFor={index}>{value.header}
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

