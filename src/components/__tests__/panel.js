import React from "react";
import renderer from "react-test-renderer";
import Panel from "../panel";
import { render } from "@testing-library/react";

describe("Panel", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with sign in button", () => {
    const { getByText } = render(<Panel />);
    const signInButton = getByText("Sign-in");
    const findOutMore = getByText("find out more about COP");
    expect(signInButton).toBeTruthy();
    expect(findOutMore).toBeTruthy();
  });
});
