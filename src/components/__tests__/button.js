import React from "react";
import renderer from "react-test-renderer";
import { Button, testables } from "../button";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe("button", () => {

  it("renders correctly", () => {
    const tree = renderer
      .create(<Button/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct button 'text' prop passed in", () => {
    const tree = renderer
      .create(<Button text={"submit"}/>);
    const testInstance = tree.root;
    expect(testInstance.props.text).toBe("submit");
  });

  it("should handle the click function", () => {
    const {handler} = testables;
    const consoleSpy = jest.spyOn(console, 'log');
    handler('event');

    expect(consoleSpy).toHaveBeenCalledWith('event');
    expect(consoleSpy).not.toHaveBeenCalledWith('no event');
  });
});