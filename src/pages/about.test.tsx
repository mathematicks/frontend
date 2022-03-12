import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './about';

let documentBody: RenderResult;

describe('<About />', () => {
  beforeEach(() => {
    documentBody = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
  });

  it('shows about rendered', () => {
    expect(documentBody.getByText('About ....')).toBeInTheDocument();
    expect(documentBody.getByText('Home')).toBeInTheDocument();
  });
});
