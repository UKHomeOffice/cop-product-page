import React from "react"
import renderer from "react-test-renderer"
import HyperLink from "../hyperlink";

describe("HyperLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HyperLink/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})