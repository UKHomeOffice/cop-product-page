import React from "react";
import BreakLine from "./Break-line";

const MinimalStandardLimitsTable = (props) => {
  return (
    <div>
      {props.table.map((value, index) => {
        return (
          <div key={index} className="govuk-grid-row displayFlexOnDesktop">
            <div
              className="govuk-grid-column-one-third minimalStandardsTable"
              style={{ backgroundColor: "#00703c", margin: "1px" }}
            >
              <div
                className="govuk-body"
                style={{
                  padding: "10px",
                  textAlign: "left",
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "white",
                }}
                dangerouslySetInnerHTML={{ __html: value.column1 }}
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 112, 60, 0.2)",
                margin: "1px",
              }}
              className="govuk-grid-column-one-third minimalStandardsTable"
            >
              <div
                className="govuk-body"
                style={{
                  padding: "10px",
                  textAlign: "left",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                dangerouslySetInnerHTML={{ __html: value.column2 }}
              />
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 112, 60, 0.2)",
                margin: "1px",
              }}
              className="govuk-grid-column-one-third "
            >
              <div
                className="govuk-body"
                style={{
                  padding: "10px",
                  textAlign: "left",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                dangerouslySetInnerHTML={{ __html: value.column3 }}
              />
            </div>
          </div>
        );
      })}
      <BreakLine pixels={"20"} />
    </div>
  );
};

export default MinimalStandardLimitsTable;
