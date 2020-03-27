import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from './MainLayout';

test('renders learn react link', () => {
  const { getByText } = render(<MainLayout />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
