import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";
import { testables } from "../header";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays the logo", () => {
    const tree = renderer
      .create(<Header/>);
    const testInstance = tree.root;
    expect(testInstance.findByProps({ id: "logo-image" })._fiber.memoizedProps.source).toEqual("/images/logo.png");
  });


    it('Test click event', () => {
      const {showMobileButton} = testables;
      const mockCallBack = jest.fn();
      const header = shallow(<Header onClick={mockCallBack}/>);
      header.find('button').simulate('click');
      console.log(header);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});