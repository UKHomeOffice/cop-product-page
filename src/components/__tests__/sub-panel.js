import React from "react";
import SubPanel from "../sub-panel";
import { create } from "react-test-renderer";
import renderer from "react-test-renderer";

describe("Header", () => {
  it("Render correctly", async () => {
    const tree = renderer
      .create(<SubPanel/>);
    expect(tree).toMatchSnapshot();
  });

  it("button onclick render correctly", async () => {
    const tree = create(<SubPanel/>);
    const instance = tree.root;

    const button = instance.findByProps({id: 'boxclose'});
    button.props.onClick();
    expect(tree).toMatchSnapshot();
  });


});

