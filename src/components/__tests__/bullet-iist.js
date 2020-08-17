import React from "react";
import renderer from "react-test-renderer";
import BulletList from "../bullet-list";

describe("button", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BulletList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns list length of 0 when bullet list is empty", () => {
    const tree = renderer.create(<BulletList list={[]} />);
    const testInstance = tree.root;
    expect(testInstance.props.list.length).toBe(0);
  });

  it("Returns list length of 2 when bullet list has 2 list items", () => {
    const tree = renderer.create(<BulletList list={["item 1", "item 2"]} />);
    const testInstance = tree.root;
    expect(testInstance.props.list.length).toBe(2);
  });

  it("Returns list item 2 when second list item is called", () => {
    const tree = renderer.create(<BulletList list={["item 1", "item 2"]} />);
    const testInstance = tree.root;
    expect(testInstance.props.list[1]).toBe("item 2");
  });
});
