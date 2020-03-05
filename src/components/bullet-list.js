import React from "react"

const BulletList = (props) => (
  <ul className="govuk-list govuk-list--bullet">
    {props.list.map((value, index) => {
      return <li key={index}>{value}</li>;
    })}
  </ul>
);

export default BulletList