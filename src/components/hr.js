import React from "react";

const Hr = (props) => {
  if (props.inContent) {
    return <div className="gov-hr govuk-width-container"></div>;
  } else {
    return <div className="gov-hr"></div>;
  }
};
export default Hr;
