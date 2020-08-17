import React from "react";
import renderer from "react-test-renderer";
import Logo from "../logo";

describe("Logo", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct alt and source with its correct values given", () => {
    const tree = renderer.create(
      <Logo source={"http://test.com"} alt={"description"} />
    );
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("alt", "description");
    expect(testInstance.props).toHaveProperty("source", "http://test.com");
  });
});
