import React from "react";
import renderer from "react-test-renderer";
import RoadMapLabel from "../roadmap-labels";

describe("roadmapLabel", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<RoadMapLabel text={"roadmap item"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct RoadMapLabel 'text' prop passed in", () => {
    const tree = renderer.create(<RoadMapLabel text={"roadmap Label"} />);
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("text", "roadmap Label");
  });
});
