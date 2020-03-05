import React from "react";
import Paragraph from "./paragraph";
import ExtraLargeTitle from "./extra-large-title";
import MediumTitle from "./MediumTitle";
import BreakLine from "./Break-line";

const StatContent = (props) => {
  const stats = props.stats;
  return (
    <div>
      <MediumTitle text={props.title}/>
      <BreakLine pixels={'50px'}/>
      <div className="govuk-grid-row">
        {stats.map((value, index) => {
          return <div key={index} className="govuk-grid-column-one-third">
            <ExtraLargeTitle text={value.number}/>
            <Paragraph text={value.description}/>
          </div>;
        })}
      </div>
    </div>
  );
};

export default StatContent;

