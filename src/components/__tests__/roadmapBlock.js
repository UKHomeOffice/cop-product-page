import React from "react";
import renderer from "react-test-renderer";
import RoadMapBlock from "../roadmap-block";


describe("roadmapBlock", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<RoadMapBlock text={'roadmap item'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct RoadMapBlock 'text' prop passed in", () => {
    const tree = renderer
      .create(<RoadMapBlock text={'roadmap item'}/>);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty('text', 'roadmap item');
  });
});