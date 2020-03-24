import React from "react"
import renderer from "react-test-renderer"
import SubNavigation from "../sub_navigation";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SubNavigation/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
});