import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './i18n';

const App: React.FC = () => {
  return (
    <AppProvider>
      
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      
    </AppProvider>
  );
};

export default App;