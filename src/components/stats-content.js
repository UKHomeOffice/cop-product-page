import React from "react";
import Paragraph from "./paragraph";
import ExtraLargeTitle from "./extra-large-title";
import MediumTitle from "./MediumTitle";
import BreakLine from "./Break-line";

const StatContent = (props) => {
  const stats = props.stats;
  return (
    <div>
      <MediumTitle id={"title"} text={props.title}/>
      <BreakLine pixels={'50'}/>
      <div className="govuk-grid-row">
        {stats.map((value, index) => {
          return <div key={index} className="govuk-grid-column-one-third">
            <ExtraLargeTitle id={`valueNum${index}`} text={value.number}/>
            <Paragraph id={`valueText${index}`} text={value.description}/>
          </div>;
        })}
      </div>
    </div>
  );
};

export default StatContent;

