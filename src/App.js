import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import AdminDashboard from './pages/AdminDashboard';
import EditProfile from './pages/EditProfile';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<ProfileDetails />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/edit/:id" element={<EditProfile />} />
    </Routes>
  </Router>
);

export default App;
