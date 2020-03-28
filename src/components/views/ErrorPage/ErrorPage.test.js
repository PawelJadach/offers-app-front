import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './ErrorPage';

test('renders learn react link', () => {
  const { getByText } = render(<ErrorPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
