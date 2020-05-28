import React from "react";
import renderer, { create } from "react-test-renderer";
import Header from "../header";
import { navItems } from "../../config/header-nav-items";

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

    it("button onclick render correctly", async () => {
    const tree = create(<Header/>);
    const instance = tree.root;

    jest.mock('../../config/header-nav-items', () => [
      { name: "Home", href: "/" },
      { name: "About", href: "/about/" },
      { name: "Help", href: "/help/" },
      { name: "Sign-in", href: 'https://www.cop.homeoffice.gov.uk/' }
    ])
    expect(navItems).toStrictEqual([
      { name: "Home", href: "/" },
      { name: "About", href: "/about/" },
      { name: "Help", href: "/help/" },
      { name: "Sign-in", href: 'https://www.cop.homeoffice.gov.uk/' }
    ]);
  });

  it("displays the logo", () => {
    const tree = renderer
      .create(<Header/>);
    const testInstance = tree.root;
    expect(testInstance.findByProps({ id: "logo-image" })._fiber.memoizedProps.source).toEqual("/images/logo.png");
  });
});