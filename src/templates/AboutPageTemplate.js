import React from "react";
import BreakLine from "../components/Break-line";
import "../components/layout.scss";
import SubNavigation from "../components/sub_navigation";

const AboutPagesTemplate = (props) => {
  const children = props.contents;
  return (
    <div>
      <div className="govuk-width-container main-height">
        <BreakLine pixels={"30"}/>
        <div className="grid-row">
          <div className="column-one-quarter">
            <SubNavigation navItems={[{ name: "About COP", href: "/about/" }, {
              name: "How COP helps you",
              href: "/about/benefits/"
            }, { name: "Get started", href: "/about/get_started/" }, {
              name: "Roadmap",
              href: "/about/roadmap/"
            }, { name: "Security", href: "/about/security/" }]}/>
          </div>
          <div className="column-five-eighths">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPagesTemplate;