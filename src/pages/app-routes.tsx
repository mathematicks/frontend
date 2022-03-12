import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
