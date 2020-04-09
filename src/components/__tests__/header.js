import React from "react";
import renderer, { create } from "react-test-renderer";
import Header from "../header";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("button onclick render correctly", async () => {
    const tree = create(<Header/>);
    const instance = tree.root;

    const button = instance.findByProps({id: 'menuButton'});
    button.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  it("displays the logo", () => {
    const tree = renderer
      .create(<Header/>);
    const testInstance = tree.root;
    expect(testInstance.findByProps({ id: "logo-image" })._fiber.memoizedProps.source).toEqual("/images/logo.png");
  });
});