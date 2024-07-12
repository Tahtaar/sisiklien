import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import { StudentProvider } from './context/StudentContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <StudentProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentPage />} />
        </Routes>
      </StudentProvider>
    </Router>
  );
};

export default App;
