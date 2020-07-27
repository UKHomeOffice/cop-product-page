import React from "react"
import renderer from "react-test-renderer"
import AccordionRoadmap from "../accordion-roadmap";
import RoadMapBlockContainer from "../RoadMapBlockContainer";
import {roadMapItem, roadMapMobile} from "../../config/roadmapItems.js";


describe("AccordionRoadmap", () => {
  it("renders correctly", () => {
    const input = document.createElement('label');
    input.setAttribute('id', 'streamLineNow1');
    window.domNode = input;
    document.body.appendChild(input);
  
    const input2 = document.createElement('label');
    input2.setAttribute('id', 'informNow1');
    window.domNode = input2;
    document.body.appendChild(input2);
  
    const input3 = document.createElement('label');
    input3.setAttribute('id', 'trustedNow1');
    window.domNode = input3;
    document.body.appendChild(input3);
    const tree = renderer
      .create(<div><AccordionRoadmap content={roadMapMobile.streamLine}/> <AccordionRoadmap content={roadMapMobile.inform}/> <AccordionRoadmap content={roadMapMobile.trusted}/></div> )
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<div><AccordionRoadmap content={roadMapMobile.streamLine}/> <AccordionRoadmap content={roadMapMobile.inform}/> <AccordionRoadmap content={roadMapMobile.trusted}/></div>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})