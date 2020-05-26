import React from "react";
import renderer from "react-test-renderer";
import ImageNewWindow from "../image-new-window";

describe("imageNewWindow", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ImageNewWindow source={"www.google.com"} text={'image-name'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct breakline 'pixel' prop passed in", () => {
    const tree = renderer
      .create(<ImageNewWindow source={"www.google.com"} text={'image-name'}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('source', 'www.google.com');
    expect(testInstance.props).toHaveProperty('text', 'image-name');
  });
});