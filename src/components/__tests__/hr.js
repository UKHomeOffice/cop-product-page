import React from "react"
import renderer from "react-test-renderer"
import Hr from "../hr";

describe("Hr", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Hr/>)
      .toJSON();
    expect(tree.props.className).toEqual('gov-hr');
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<Hr inContent={true}/>)
      .toJSON();
    expect(tree.props.className).toEqual('gov-hr govuk-width-container');
    expect(tree).toMatchSnapshot()
  })
})