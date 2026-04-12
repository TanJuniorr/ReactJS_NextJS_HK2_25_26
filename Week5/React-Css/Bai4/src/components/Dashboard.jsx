import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h1>Dashboard Admin</h1>
      
      {/* Menu nội bộ của Dashboard */}
      <nav style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
        <Link to="profile">Profile</Link> |{' '}
        <Link to="orders">Orders</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet là nơi nội dung của các trang con sẽ được render */}
      <div style={{ padding: '10px', backgroundColor: '#fff' }}>
        <Outlet />
      </div>
    </div>
  );
}