import React from "react";
import renderer from "react-test-renderer";
import SubNavigation from "../sub_navigation";

describe("Header", () => {
  it("renders correctly", () => {
    const navItems = [{ name: "About COP", href: "/about/" }, {
      name: "How COP helps you",
      href: "/about/benefits/"
    }, { name: "Get started", href: "/about/get_started/" }, {
      name: "Roadmap",
      href: "/about/roadmap/"
    }, { name: "Security", href: "/about/security/" }];
    const tree = renderer
      .create(<SubNavigation navItems={navItems}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});