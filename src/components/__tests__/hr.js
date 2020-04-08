import React from "react"
import renderer from "react-test-renderer"
import Hr from "../hr";

describe("Hr", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Hr/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<Hr inContent={true}/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})