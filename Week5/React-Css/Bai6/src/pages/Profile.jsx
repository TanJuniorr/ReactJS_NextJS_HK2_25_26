import { useAuth } from '../contexts/AuthContext';

export const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Trang Cá Nhân</h2>
      <p>Xin chào, {user.name}!</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
};