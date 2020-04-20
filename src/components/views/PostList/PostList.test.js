import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';

test('renders learn react link', () => {
  const { getByText } = render(<ProductList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
