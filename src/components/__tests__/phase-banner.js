import React from "react"
import renderer from "react-test-renderer"
import PhaseBanner from "../phase-banner";

describe("PhaseBanner", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PhaseBanner/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})