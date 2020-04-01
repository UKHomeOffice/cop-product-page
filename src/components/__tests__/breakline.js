import React from "react";
import renderer from "react-test-renderer";
import BreakLine from "../Break-line";

describe("breakline", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<BreakLine/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct breakline 'pixel' prop passed in", () => {
    const tree = renderer
      .create(<BreakLine pixels={"2"}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('pixels', '2');
  });
});