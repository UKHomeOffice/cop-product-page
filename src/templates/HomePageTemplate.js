import React from "react";
import Panel from "../components/panel";
import SubPanel from "../components/sub-panel";
import BreakLine from "../components/Break-line";
import "../components/layout.scss";

const HomePageTemplate = (props) => {
  const children = props.contents;
  return (
    <div>
        <Panel title={"Easily capture data, make better decisions"}
               imageSource={"/images/home/banner.png"} imageAlt={"transform"}
               paragraphText={"Use the Central Operations Platform (COP) to capture information quickly and produce data that informs decision making."}/>
        <SubPanel/>
      <div className="govuk-width-container">
        <BreakLine pixels={"30"}/>
        {children}
        <BreakLine pixels={"50"}/>
      </div>
    </div>
  );
};

export default HomePageTemplate;