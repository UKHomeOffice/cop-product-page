import React from "react";

const ExtraLargeTitle = (props) => {
  if (props.isPanel) {
    return (
      <div style={{color: 'white'}} className="govuk-heading-xl">
        {props.text}
      </div>
    );
  } else {
    return (
      <div className="govuk-heading-xl">
        {props.text}
      </div>
    );
  }
};

export default ExtraLargeTitle;