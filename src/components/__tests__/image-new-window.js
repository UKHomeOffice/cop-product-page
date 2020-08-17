import React from "react";
import renderer from "react-test-renderer";
import ImageNewWindow from "../image-new-window";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("imageNewWindow", () => {
  const link = "www.google.com";
  const text = "image-name";
  it("renders correctly", () => {
    const tree = renderer
      .create(<ImageNewWindow source={link} text={text} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Returns the correct imagenewwindow 'source' and 'text' prop passed in", () => {
    const tree = renderer.create(<ImageNewWindow source={link} text={text} />);
    const testInstance = tree.root;
    window.open = jest.fn(() => ({}));
    const wrapper = shallow(<ImageNewWindow source={link} text={text} />);
    wrapper.find("a").prop("onClick")();
    expect(window.open).toBeCalled();
    expect(testInstance.props).toHaveProperty("source", link);
    expect(testInstance.props).toHaveProperty("text", text);
  });
});
