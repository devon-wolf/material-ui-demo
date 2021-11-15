import { render } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <Layout>
        <div>Child div</div>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
