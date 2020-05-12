import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";
import StatContent from "../stats-content";

describe("stat-content", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<StatContent title={"Used and trusted by Border Force teams"}
                           stats={[{ stat: "6,652", description: "Border Force users" },
                             { stat: "7,500+", description: "forms and reports submitted per month" },
                             { stat: "300+", description: "COP visits per day" }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays the service name", () => {
    const tree = renderer
      .create(<StatContent title={"Used and trusted by Border Force teams"}
                           stats={[{ stat: "6,652", description: "Border Force users" },
                             { stat: "7,500+", description: "forms and reports submitted per month" },
                             { stat: "300+", description: "COP visits per day" }]}/>);
    const testInstance = tree.root;
    const getStatProp = (key) => {
      return testInstance.findByProps({ id: key })._fiber.memoizedProps.text;
    };
    const getDescriptionProp = (key) => {
      return testInstance.findByProps({ id: key })._fiber.memoizedProps.children;
    };
    expect(getDescriptionProp("valueText0")).toEqual("Border Force users");
    expect(getDescriptionProp("valueText1")).toEqual("forms and reports submitted per month");
    expect(getDescriptionProp("valueText2")).toEqual("COP visits per day");
    expect(getStatProp("valueNum0")).toEqual("6,652");
    expect(getStatProp("valueNum1")).toEqual("7,500+");
    expect(getStatProp("valueNum2")).toEqual("300+");
  });
});