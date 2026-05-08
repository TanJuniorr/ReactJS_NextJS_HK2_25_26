import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Orders } from './pages/Orders';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
          <Link to="/profile" style={{ marginRight: '15px' }}>Profile</Link>
          <Link to="/orders">Orders</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;