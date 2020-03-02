import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";

describe("button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct button 'text' prop passed in", () => {
    const tree = renderer
      .create(<Button text={"submit"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("submit");
  });
});