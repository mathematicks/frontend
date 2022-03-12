import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app-root'),
);
