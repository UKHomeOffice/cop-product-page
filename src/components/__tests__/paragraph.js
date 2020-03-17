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

  it("Returns the correct styling of the paragraph 'text' prop passed in", () => {
    const tree = renderer
      .create(<LargeParagraph isPanel={true} text={"paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text"}/>);
    const testInstance = tree.root;
    expect(testInstance).toHaveStyleRule('color', expect.stringContaining('white'))
  });
});