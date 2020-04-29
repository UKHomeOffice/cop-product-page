import React from "react";
import BreakLine from "../components/Break-line";
import SubNavigation from "../components/sub_navigation";
import "../components/layout.scss";

const HelpPagesTemplate = (props) => {
  const children = props.contents;
  return (
    <>
      <div className="govuk-width-container main-height">
        <BreakLine pixels={"30"}/>
        <div className="grid-row">
          <div className="column-one-quarter">
            <SubNavigation navItems={[{ name: "Help", href: "/help/" }, {
              name: "How to",
              href: "help/how-to"
            }]}/>
          </div>
          <div className="column-five-eighths">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPagesTemplate;