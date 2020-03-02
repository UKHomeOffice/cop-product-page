import React from "react";
import renderer from "react-test-renderer";
import ExtraLargeTitle from "../extra-large-title";

describe("extra-large-title", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ExtraLargeTitle/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct title 'text' prop passed in", () => {
    const tree = renderer
      .create(<ExtraLargeTitle text={"a title"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("a title");
  });
});