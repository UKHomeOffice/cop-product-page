import React from "react";

const BulletList = (props) => {
  try {
    return (
      <ul className="govuk-list govuk-list--bullet">
        {props.list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    );
  } catch (e) {
    return <ul className="govuk-list govuk-list--bullet" />;
  }
};

export default BulletList;
