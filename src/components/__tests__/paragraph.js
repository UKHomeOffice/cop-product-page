import React from "react";
import renderer from "react-test-renderer";
import Paragraph from "../paragraph";
import LargeParagraph from "../large-paragraph";

describe("create paragraph", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Paragraph/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct paragraph 'text' prop passed in", () => {
    const tree = renderer
      .create(<Paragraph text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text");
  });

  it("Returns the incorrect paragraph 'text' prop passed in", () => {
    const tree = renderer
      .create(<Paragraph text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).not.toBe("");
  });

  it("Returns the correct paragraph 'text' prop passed in", () => {
    const tree = renderer
      .create(<LargeParagraph text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text");
  });

  it("Returns the incorrect paragraph 'text' prop passed in", () => {
    const tree = renderer
      .create(<LargeParagraph text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).not.toBe("");
  });

  it("Returns style prop with color white when isPanel is true", () => {
    const tree = renderer
      .create(<LargeParagraph style={{ color: "white" }} isPanel={true} text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    let style = testInstance.props.style;
    expect(testInstance.props).toHaveProperty('style');
    expect(style).toHaveProperty('color', 'white');
  });

  it("Returns no style prop when isPanel is false", () => {
    const tree = renderer
      .create(<LargeParagraph isPanel={false} text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    let style = testInstance.props.style;
    expect(testInstance.props).not.toHaveProperty('style');
  });
});