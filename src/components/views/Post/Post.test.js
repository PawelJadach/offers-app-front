import React from 'react';
import { render } from '@testing-library/react';
import Post from './Post';

test('renders learn react link', () => {
  const { getByText } = render(<Post />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
