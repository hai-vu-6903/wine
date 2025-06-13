import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const items = [
    { key: '/', label: 'Trang chủ' },
    { key: '/cart', label: 'Giỏ hàng' },
    { key: '/admin', label: 'Admin' },
    { key: '/upload', label: 'Upload' },
    { key: '/login', label: 'Đăng nhập' },
    { key: '/register', label: 'Đăng ký' },
    { key: 'logout', label: 'Đăng xuất' },
  ];

  const onClick = (e) => {
    if (e.key === 'logout') handleLogout();
    else navigate(e.key);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">WINE SHOP</div>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={onClick}
        className="navbar-menu"
      />
    </div>
  );
}
