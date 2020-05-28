import React from "react";
import renderer from "react-test-renderer";
import RoadMapBlock from "../roadmap-block";


describe("roadmapBlock", () => {
  const text = 'roadmap item';
  it("renders correctly", () => {
    const tree = renderer
      .create(<RoadMapBlock text={text}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct RoadMapBlock 'text' prop passed in", () => {
    const tree = renderer
      .create(<RoadMapBlock text={text}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('text', text);
  });
});