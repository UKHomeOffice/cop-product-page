import React from "react";
import renderer from "react-test-renderer";
import ImageNewWindow from "../image-new-window";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe("imageNewWindow", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ImageNewWindow source={"www.google.com"} text={'image-name'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct imagenewwindow 'source' and 'text' prop passed in", () => {
    const tree = renderer
      .create(<ImageNewWindow source={"www.google.com"} text={'image-name'} />);
    const testInstance = tree.root;
    const wrapper = shallow(<ImageNewWindow source={"www.google.com"} text={'image-name'} />);
    wrapper.find('a').prop('onClick')();
    expect(testInstance.props).toHaveProperty('source', 'www.google.com');
    expect(testInstance.props).toHaveProperty('text', 'image-name');
  });
});