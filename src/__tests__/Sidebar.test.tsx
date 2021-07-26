import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { render } from '@testing-library/react';

describe('Sidebar component tests', () => {
  it('renders logo correctly', () => {
    const { getByTestId } = render(<Sidebar />);

    expect(getByTestId('header-logo')).toBeInTheDocument();
  });
});
