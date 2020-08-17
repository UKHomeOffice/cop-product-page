import React from "react";
import renderer from "react-test-renderer";
import ExtraLargeTitle from "../extra-large-title";
import LargeTitle from "../large-title";
import MediumTitle from "../MediumTitle";

describe("title", () => {
  it("renders extra large title correctly", () => {
    const tree = renderer.create(<ExtraLargeTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct extra large title 'text' prop passed in", () => {
    const tree = renderer.create(<ExtraLargeTitle text={"a title"} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("a title");
  });

  it("renders large title correctly", () => {
    const tree = renderer.create(<LargeTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct large title 'text' prop passed in", () => {
    const tree = renderer.create(<LargeTitle text={"a title"} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("a title");
  });

  it("renders medium title correctly", () => {
    const tree = renderer.create(<MediumTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct medium title 'text' prop passed in", () => {
    const tree = renderer.create(<MediumTitle text={"a title"} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("a title");
  });
});
