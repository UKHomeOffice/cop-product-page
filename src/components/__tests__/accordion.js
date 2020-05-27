import React from "react"
import renderer from "react-test-renderer"
import Accordion from "../accordion";
import RoadMapBlockContainer from "../RoadMapBlockContainer";
import {roadMapItem, roadMapMobile} from "../../config/roadmapItems-mobile.js";

describe("Accordion", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<div><Accordion content={roadMapMobile.streamLine}/> <Accordion content={roadMapMobile.inform}/> <Accordion content={roadMapMobile.trusted}/></div> )
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<div><Accordion content={roadMapMobile.streamLine}/> <Accordion content={roadMapMobile.inform}/> <Accordion content={roadMapMobile.trusted}/></div>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})