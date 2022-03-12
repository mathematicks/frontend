import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/app-routes';

function App(): JSX.Element {
  return (
    <Router basename="/">
      <AppRoutes />
    </Router>
  );
}

export default App;
