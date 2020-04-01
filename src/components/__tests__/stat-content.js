import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";
import StatContent from "../stats-content";

describe("stat-content", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<StatContent title={"Used and trusted by Border Force teams"}
                           stats={[{ number: "6,652", description: "Border Force users" },
                             { number: "7,500+", description: "forms and reports submitted per month" },
                             { number: "300+", description: "COP visits per day" }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays the service name", () => {
    const tree = renderer
      .create(<StatContent title={"Used and trusted by Border Force teams"}
                           stats={[{ number: "6,652", description: "Border Force users" },
                             { number: "7,500+", description: "forms and reports submitted per month" },
                             { number: "300+", description: "COP visits per day" }]}/>);
    const testInstance = tree.root;
    const getProp = (key) => {
      return testInstance.findByProps({ id: key })._fiber.memoizedProps.text;
    };
    expect(getProp("valueText0")).toEqual("Border Force users");
    expect(getProp("valueText1")).toEqual("forms and reports submitted per month");
    expect(getProp("valueText2")).toEqual("COP visits per day");
    expect(getProp("valueNum0")).toEqual("6,652");
    expect(getProp("valueNum1")).toEqual("7,500+");
    expect(getProp("valueNum2")).toEqual("300+");
  });
});