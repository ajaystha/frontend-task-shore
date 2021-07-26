import React from 'react';
import { Header } from '../components/Header';
import { render } from '@testing-library/react';

describe('Header component tests', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Users')).toBeInTheDocument();
  });
});
