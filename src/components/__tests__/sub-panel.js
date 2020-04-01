import React from "react"
import renderer from "react-test-renderer"
import SubPanel from "../sub-panel";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SubPanel/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
});