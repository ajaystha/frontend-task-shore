import React from 'react';
import { UsersListItem } from '../components/Users/UsersListItem';
import { render, fireEvent, RenderResult } from '@testing-library/react';

const props = {
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
  department: 'Marketing',
  phone: '0301828475964',
  onClick: jest.fn(),
};

describe('UsersListItem component tests', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<UsersListItem {...props} />);
  });

  afterEach(() => wrapper.unmount());

  it('should render list', () => {
    expect(wrapper.getByText('George Bluth')).toBeInTheDocument();
    expect(wrapper.getByText('Marketing')).toBeInTheDocument();
    expect(wrapper.getByText('george.bluth@reqres.in')).toBeInTheDocument();
    expect(wrapper.getByText('0301828475964')).toBeInTheDocument();
  });

  it('should render avatar', () => {
    const avatar = wrapper.getByTestId('user-avatar');

    expect(avatar.innerHTML).toEqual(
      '<img alt="George Bluth" src="https://reqres.in/img/faces/1-image.jpg" class="MuiAvatar-img">'
    );
  });

  it('click on the list should fire a function', () => {
    const listButton = wrapper.getByTestId('user-item-list');
    fireEvent.click(listButton);
    expect(props.onClick.mock.calls.length).toEqual(1);
  });
});
