import React from "react";
import renderer from "react-test-renderer";
import NotFoundPage from "../../pages/404";
describe("404", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays page not found when 404 page is loaded", () => {
    const tree = renderer.create(<NotFoundPage />);
    const testInstance = tree.root;
    expect(
      testInstance.findByProps({ className: "govuk-heading-xl" }).children[0]
    ).toEqual("Page not found");
  });
});
