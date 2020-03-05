import React from 'react'


const Image = (props) => (
  <div className="govuk-width-container">
  <img src={props.source} height={props.height} width={props.width} alt={props.alt}/>
  </div>
);
export default Image


