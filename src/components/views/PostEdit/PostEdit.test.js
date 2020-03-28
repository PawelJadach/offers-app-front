import React from 'react';
import { render } from '@testing-library/react';
import PostEdit from './PostEdit';

test('renders learn react link', () => {
  const { getByText } = render(<PostEdit />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
