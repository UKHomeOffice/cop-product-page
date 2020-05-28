import React from "react";
import renderer from "react-test-renderer";
import SubNavigation from "../sub_navigation";
import { navItems } from "../../config/about-nav-items";

describe("SubNavigation", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SubNavigation navItems={navItems}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct SubNavigation 'navItems' prop passed in", () => {
    const tree = renderer
      .create(<SubNavigation navItems={navItems}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("navItems", [
      { name: "About COP", href: "/about/" },
      {
        name: "How COP helps you", href: "/about/benefits/"
      },
      { name: "Get started", href: "/about/get_started/" },
      { name: "Roadmap", href: "/about/roadmap/" },
      { name: "Security", href: "/about/security/" }
    ]);
  });
});