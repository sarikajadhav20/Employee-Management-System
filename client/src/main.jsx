import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard"/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  );

