import React from "react"

const BulletList = (props) => (
  <div className="govuk-width-container">
  <ul className="govuk-list govuk-list--bullet">
    {props.list.map((value, index) => {
      return <li key={index}>{value}</li>;
    })}
  </ul>
  </div>
);

export default BulletList