import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";
import { shallow } from 'enzyme';

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

  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <Button text={"submit"} handler={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});