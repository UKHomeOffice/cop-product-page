import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });

  it("displays the service name", () => {
    const tree = renderer
      .create(<Header/>);
    const testInstance = tree.root;
    expect(testInstance.findByProps({className: "govuk-header__product-name"}).children).toEqual(['Central Operations Platform']);
  });

  it("displays the GOV.UK text/ logo", () => {
    const tree = renderer
      .create(<Header/>);
    const testInstance = tree.root;
    expect(testInstance.findByProps({className: "govuk-header__logotype-text"}).children).toEqual(['GOV.UK']);
  });
});