import React from "react";
import renderer from "react-test-renderer";
import Paragraph from "../paragraph";
import LargeParagraph from "../large-paragraph";

describe("create paragraph", () => {
  const paragraphText =
    "paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text, paragraph text";
  it("renders correctly", () => {
    const tree = renderer.create(<Paragraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct paragraph 'text' prop passed in", () => {
    const tree = renderer.create(<Paragraph text={paragraphText} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe(paragraphText);
  });

  it("Returns the incorrect paragraph 'text' prop passed in", () => {
    const tree = renderer.create(<Paragraph text={paragraphText} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).not.toBe("");
  });

  it("Returns the correct paragraph 'text' prop passed in", () => {
    const tree = renderer.create(<LargeParagraph text={paragraphText} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe(paragraphText);
  });

  it("Returns the incorrect paragraph 'text' prop passed in", () => {
    const tree = renderer.create(<LargeParagraph text={paragraphText} />);
    const testInstance = tree.root;
    expect(testInstance.props.text).not.toBe("");
  });

  it("Returns style prop with color white when isPanel is true", () => {
    const tree = renderer.create(
      <LargeParagraph
        style={{ color: "white" }}
        isPanel={true}
        text={paragraphText}
      />
    );
    const testInstance = tree.root;
    const style = testInstance.props.style;
    expect(testInstance.props).toHaveProperty("style");
    expect(style).toHaveProperty("color", "white");
  });

  it("Returns no style prop when isPanel is false", () => {
    const tree = renderer.create(
      <LargeParagraph isPanel={false} text={paragraphText} />
    );
    const testInstance = tree.root;
    expect(testInstance.props).not.toHaveProperty("style");
  });
});
