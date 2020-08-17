import React from "react";
import renderer, { create } from "react-test-renderer";
import Header from "../header";
const openNavClassName = "govuk-header__navigation--open";
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("menu button renders correctly when active", () => {
    const tree = create(<Header />);
    const instance = tree.root;

    const mButton = global.document.createElement("button");
    mButton.setAttribute("id", "menuButton");
    mButton.setAttribute("classList", openNavClassName);
    global.window.domNode = mButton;
    global.document.body.appendChild(mButton);

    const mNavigation = global.document.createElement("ul");
    mNavigation.setAttribute("id", "navigation");
    mNavigation.setAttribute("classList", openNavClassName);
    global.window.domNode = mNavigation;
    global.document.body.appendChild(mNavigation);
    const button = instance.findByProps({ id: "menuButton" });
    button.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  it("menu button renders correctly when inactive", () => {
    const tree = create(<Header />);
    const instance = tree.root;

    const mButton = global.document.createElement("button");
    mButton.setAttribute("id", "menuButton");
    mButton.removeAttribute("classList", openNavClassName);
    global.window.domNode = mButton;
    global.document.body.appendChild(mButton);

    const mNavigation = global.document.createElement("ul");
    mNavigation.setAttribute("id", "navigation");
    mNavigation.removeAttribute("classList", openNavClassName);
    global.window.domNode = mNavigation;
    global.document.body.appendChild(mNavigation);
    const button = instance.findByProps({ id: "menuButton" });
    button.props.onClick();
    expect(tree).toMatchSnapshot();
  });

  it("displays the logo with correct source", () => {
    const tree = renderer.create(<Header />);
    const testInstance = tree.root;
    expect(
      testInstance.findByProps({ id: "logo-image" })._fiber.memoizedProps.source
    ).toEqual("/images/logo.png");
  });
});
