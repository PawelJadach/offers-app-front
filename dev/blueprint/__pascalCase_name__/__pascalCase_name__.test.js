import React from 'react';
import { render } from '@testing-library/react';
import {{pascalCase name}} from './{{pascalCase name}}';

test('renders learn react link', () => {
  const { getByText } = render(<{{pascalCase name}} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
