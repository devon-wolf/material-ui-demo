import { render } from '@testing-library/react';
import React from 'react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Calculator />);
    expect(baseElement).toBeTruthy();
  });
});
