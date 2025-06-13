import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import UploadPage from './pages/UploadPage';
import MainLayout from './layouts/MainLayout';
import OrderDetailPage from './pages/OrderDetailPage';

const RequireAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.role === 1 ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="order/:id" element={<RequireAdmin><OrderDetailPage /></RequireAdmin>} />
          <Route path="admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
          <Route path="*" element={<h2>404 - Trang không tồn tại</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
