import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { IndexPage } from './pages/index';

export const AppRoutes = () => {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </Header>
  );
};
