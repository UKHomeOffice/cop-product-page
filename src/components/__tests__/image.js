import React from "react";
import renderer from "react-test-renderer";
import Image from "../image";

describe("image", () => {
  const link = 'www.google.com'
  it("renders correctly", () => {
    const tree = renderer
      .create(<Image/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when not on mobile", () => {
  const tree = renderer
    .create(<Image noMobile={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

  it("Returns the correct source and alt with its correct values given", () => {
    const tree = renderer
      .create(<Image alt={"description"} source={link}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("alt", "description");
    expect(testInstance.props).toHaveProperty("source", link);
  });

  it("Returns the correct class properties", () => {
    const tree = renderer
      .create(<Image noImage={true} alt={"description"} source={link}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("noImage", true);
  });
});