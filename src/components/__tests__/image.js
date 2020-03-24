import React from "react";
import renderer from "react-test-renderer";
import Image from "../image";

describe("image", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Image/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct source and alt with its correct values given", () => {
    const tree = renderer
      .create(<Image alt={"description"} source={"http://test.com"}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("alt", "description");
    expect(testInstance.props).toHaveProperty("source", "http://test.com");
  });
});