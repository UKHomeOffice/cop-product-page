import React from "react"
import renderer from "react-test-renderer"
import AccordionOar from "../accordion-oar";
import {OarTables} from "../../config/oar-tables.js";


describe("AccordionOAR", () => {

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<div><AccordionOar content={OarTables}/></div>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})