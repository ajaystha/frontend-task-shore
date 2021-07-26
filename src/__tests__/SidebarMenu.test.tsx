import React from 'react';
import { SidebarMenu } from '../components/Sidebar/SidebarMenu';
import { render } from '@testing-library/react';

describe('Sidebar menu component tests', () => {
  it('renders menus correctly', () => {
    const { getByText } = render(<SidebarMenu />);

    expect(getByText('Point of Sales')).toBeInTheDocument();
    expect(getByText('Invoices & returns')).toBeInTheDocument();
    expect(getByText('Contacts')).toBeInTheDocument();
    expect(getByText('Inventory')).toBeInTheDocument();
    expect(getByText('Reports')).toBeInTheDocument();
    expect(getByText('Settings')).toBeInTheDocument();
    expect(getByText('Imprint')).toBeInTheDocument();
  });
});
