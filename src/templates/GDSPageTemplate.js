import React from "react";
import BreakLine from "../components/Break-line";
import "../components/layout.scss";

const GDSPagesTemplate = (props) => {
  const children = props.contents;
  return (
    <>
      <div className="govuk-width-container main-height">

        <BreakLine pixels={"40"}/>

        <div className="grid-row">

          <div className="column-two-thirds">
            {children}
          </div>

        </div>

      </div>

    </>
  );
};

export default GDSPagesTemplate;