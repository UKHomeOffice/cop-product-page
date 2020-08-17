import React, { Children } from "react";
import renderer from "react-test-renderer";
import Layout from "../layout";
import { render } from "@testing-library/react";
describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
