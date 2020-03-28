import React from 'react';
import { render } from '@testing-library/react';
import PostAdd from './PostAdd';

test('renders learn react link', () => {
  const { getByText } = render(<PostAdd />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
