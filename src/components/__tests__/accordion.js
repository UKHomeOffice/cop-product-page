import React from "react"
import renderer from "react-test-renderer"
import Accordion from "../accordion";
import {OarTables} from "../../config/oar-tables.js";

describe("AccordionOAR", () => {

  
  it("renders correctly in content", () => {
    const tree = renderer
      .create(<div><Accordion content={OarTables}/></div>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})