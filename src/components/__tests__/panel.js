import React from "react"
import renderer from "react-test-renderer"
import Panel from "../panel";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Panel/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
});