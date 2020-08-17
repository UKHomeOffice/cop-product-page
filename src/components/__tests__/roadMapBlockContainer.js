import React from "react";
import renderer from "react-test-renderer";
import RoadMapBlockContainer from "../RoadMapBlockContainer";
import { roadMapItem } from "../../config/roadmapItems.js";

describe("roadmapBlockContainer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <RoadMapBlockContainer
          content={roadMapItem.streamLine.now}
          bannerColour={"#28afb0"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct RoadMapBlockContainer 'content' and bannerColour prop passed in", () => {
    const tree = renderer.create(
      <RoadMapBlockContainer
        content={roadMapItem.streamLine.now}
        bannerColour={"#28afb0"}
      />
    );
    const testInstance = tree.root;
    expect(testInstance.props).toHaveProperty("content", [
      "Intel Referral",
      "Events at the border",
      "Intel workflow",
      "sGMR",
      "Firmstep Migration*",
    ]);
    expect(testInstance.props).toHaveProperty("bannerColour", "#28afb0");
  });
});
