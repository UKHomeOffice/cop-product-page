import React from "react";
import renderer from "react-test-renderer";
import BoxIcon from "../box-icon";

describe("Box-icon", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<BoxIcon colour={"red"}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct box icon 'colour' prop passed in", () => {
    const tree = renderer
      .create(<BoxIcon colour={"red"}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('colour', 'red');
  });
});