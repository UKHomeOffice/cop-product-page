import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import LoginForm from '../login-form';

describe('LoginForm', () => {
  it('triggers login function on button press', () => {
    jest
      .spyOn(LoginForm.prototype, 'componentDidMount')
      .mockImplementation(jest.fn());

    const loginMock = jest.fn();
    jest.spyOn(LoginForm.prototype, 'login').mockImplementation(loginMock);

    const wrapper = shallow(<LoginForm />);
    wrapper.find('button').simulate('click');
    expect(loginMock).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
