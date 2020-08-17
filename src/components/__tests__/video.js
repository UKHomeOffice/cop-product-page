import React from "react";
import renderer from "react-test-renderer";
import Video from "../video";

describe("video", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Video/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct width, height, source with its correct values given", () => {
    const tree = renderer
      .create(<Video width={'20'} height={'10'} source={'http://test.com'}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('width', '20');
    expect(testInstance.props).toHaveProperty('height', '10');
    expect(testInstance.props).toHaveProperty('source', 'http://test.com');
  });
});