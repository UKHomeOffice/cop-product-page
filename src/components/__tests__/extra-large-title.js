import React from "react"
import renderer from "react-test-renderer"
import ExtraLargeTitle from "../extra-large-title";
describe("extra-large-title", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ExtraLargeTitle text={'a title'} />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
});