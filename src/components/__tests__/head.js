import React from "react"
import renderer from "react-test-renderer"
import Head from "../head";

describe("Head", () => {
  it("renders correctly", () => {
    const data = { title: 'title',  subTitle: 'sub title'}  
    const tree = renderer
      .create(<Head data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with no subtitle", () => {
    const dataObj = { title: 'title',  subTitle: 'sub title', subject: 'How to'}  
    const tree = renderer
      .create(<Head data={dataObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with no subtitle", () => {
    const childrenObj = { title: 'title'}
    const tree = renderer
      .create(<Head data={childrenObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})