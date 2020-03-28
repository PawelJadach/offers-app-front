import React from 'react';
import { render } from '@testing-library/react';
import PostListItem from './PostListItem';

test('renders learn react link', () => {
  const { getByText } = render(<PostListItem />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
